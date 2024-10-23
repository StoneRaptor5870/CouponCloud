'use client'

import { useState } from 'react'
import { useQuery } from '@apollo/client'
import {
  CouponsDocument,
  CouponOrderByWithRelationInput,
  SortOrder,
  CouponWhereInput,
} from '@couponcloud/network/src/gql/generated'
import { useDebounce } from '@couponcloud/util/hooks/useDebounce'
import { Input } from '@couponcloud/ui/components/ui/input'
import { Card } from '@couponcloud/ui/components/ui/card'

export default function Search() {
  const [search, setSearch] = useState<{
    code: string
    discount: string
    expiryDate: string
    orderBy: CouponOrderByWithRelationInput[]
  }>({
    code: '',
    discount: '',
    expiryDate: '',
    orderBy: [{ discount: SortOrder.Asc }],
  })

  const debouncedSearchCode = useDebounce(search.code, 500)
  const debouncedDiscount = useDebounce(search.discount, 500)
  const debouncedExpiryDate = useDebounce(search.expiryDate, 500)

  const where: CouponWhereInput = {}

  if (debouncedSearchCode) {
    where.code = { contains: debouncedSearchCode }
  }
  if (debouncedDiscount) {
    where.discount = { gte: parseFloat(debouncedDiscount) }
  }
  if (debouncedExpiryDate) {
    const expiryDate = new Date(debouncedExpiryDate)
    where.expiryDate = { lte: expiryDate.toISOString() }
  }

  const queryVariables = {
    where: Object.keys(where).length ? where : undefined,
    orderBy: search.orderBy.length ? search.orderBy : undefined,
  }

  const { data, loading, error } = useQuery(CouponsDocument, {
    variables: queryVariables,
  })

  if (loading)
    return <p className="flex justify-center items-center mt-12">Loading...</p>
  if (error)
    return (
      <p className="flex justify-center items-center mt-12">
        Error: {error.message}
      </p>
    )

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const [field, order] = e.target.value.split('|')
    const newOrderBy = [{ [field]: order as CouponOrderByWithRelationInput }]
    setSearch((prev) => ({ ...prev, orderBy: newOrderBy }))
  }

  const handleClear = () => {
    setSearch({
      code: '',
      discount: '',
      expiryDate: '',
      orderBy: [{ discount: SortOrder.Asc }],
    })
  }

  const handleDiscountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (value === '' || parseFloat(value) >= 0) {
      setSearch((prev) => ({ ...prev, discount: value }))
    }
  }

  return (
    <div className="space-y-4 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          type="text"
          name="code"
          placeholder="Search by code"
          value={search.code}
          onChange={(e) =>
            setSearch((prev) => ({ ...prev, code: e.target.value }))
          }
          className="border p-2 w-full"
        />

        <Input
          type="number"
          name="discount"
          placeholder="Minimum discount"
          value={search.discount || ''}
          onChange={handleDiscountChange}
          className="border p-2 w-full"
        />

        <Input
          type="date"
          name="expiryDate"
          value={search.expiryDate || ''}
          onChange={(e) =>
            setSearch((prev) => ({ ...prev, expiryDate: e.target.value }))
          }
          className="border p-2 w-full"
        />

        <select
          name="orderBy"
          value={`${Object.keys(search.orderBy[0])[0]}|${Object.values(search.orderBy[0])[0]}`}
          onChange={handleSortChange}
          className="border p-2 w-full bg-white"
        >
          <option value={`discount|${SortOrder.Asc}`}>
            Sort by Discount (Asc)
          </option>
          <option value={`discount|${SortOrder.Desc}`}>
            Sort by Discount (Desc)
          </option>
          <option value={`code|${SortOrder.Asc}`}>Sort by Code (Asc)</option>
          <option value={`code|${SortOrder.Desc}`}>Sort by Code (Desc)</option>
          <option value={`expiryDate|${SortOrder.Asc}`}>
            Sort by Expiry Date (Asc)
          </option>
          <option value={`expiryDate|${SortOrder.Desc}`}>
            Sort by Expiry Date (Desc)
          </option>
        </select>
      </div>

      <button
        onClick={handleClear}
        className="border bg-tertiary-400 text-white p-2"
      >
        Clear Filters
      </button>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data?.coupons?.length ? (
          data.coupons.map((coupon) => (
            <Card
              key={coupon.id}
              className="border p-4 my-2 rounded hover:shadow-lg"
            >
              <h3 className="text-lg font-bold">{coupon.code}</h3>
              <p>Description: {coupon.description}</p>
              <p>Discount: {coupon.discount}%</p>
              <p>
                Expiry Date: {new Date(coupon.expiryDate).toLocaleDateString()}
              </p>
              <p>Status: {coupon.status}</p>
              <p>Company: {coupon.company?.displayName}</p>
            </Card>
          ))
        ) : (
          <p className="flex justify-center items-center mt-12">
            No coupons found
          </p>
        )}
      </div>
    </div>
  )
}
