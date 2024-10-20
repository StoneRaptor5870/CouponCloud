'use client'

import { useRouter } from 'next/navigation'
import { useQuery } from '@apollo/client'
import { CouponsDocument } from '@couponcloud/network/src/gql/generated'

export default function Search() {
  const router = useRouter()
  const { data, loading } = useQuery(CouponsDocument)

  if (loading) return <div>Loading...</div>

  const handleRedirect = (id: string) => {
    router.push(`/coupon/${id}`)
  }

  return (
    <div className="space-y-4 p-6">
      {data?.coupons && data.coupons.length > 0 ? (
        data.coupons.map((coupon) => (
          <div
            key={coupon.id}
            className="p-4 bg-primary rounded cursor-pointer hover:bg-primary-dark"
            onClick={() => handleRedirect(coupon.id)}
          >
            <div>{coupon.description}</div>
            <div>{coupon.discount}</div>
            <div>{coupon.expiryDate}</div>
            <div>{coupon.status}</div>
            <div>{coupon.company?.displayName}</div>
          </div>
        ))
      ) : (
        <div>No coupons available</div>
      )}
    </div>
  )
}
