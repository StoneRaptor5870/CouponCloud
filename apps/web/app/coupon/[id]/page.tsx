'use client'

import { useRouter } from 'next/navigation'
import { useQuery } from '@apollo/client'
import { CouponDocument } from '@couponcloud/network/src/gql/generated'

interface CouponPageProps {
  params: {
    id: string
  }
}

export default function CouponPage({ params }: CouponPageProps) {
  const router = useRouter()
  const { id } = params

  const { data, loading, error } = useQuery(CouponDocument, {
    variables: { where: { id } },
  })

  if (loading) return <div>Loading coupon details...</div>
  if (error) return <div>Error fetching coupon details</div>

  const coupon = data?.coupon

  return (
    <div className="p-6">
      <button
        className="mb-4 p-2 text-black rounded"
        onClick={() => router.back()}
      >
        Go Back
      </button>
      {coupon ? (
        <div className="p-4 rounded">
          <h1 className="text-xl font-bold">{coupon.description}</h1>
          <p>Discount: {coupon.discount}</p>
          <p>Expiry Date: {coupon.expiryDate}</p>
          <p>Status: {coupon.status}</p>
          <div>
            <h2 className="text-lg font-semibold">Company</h2>
            <p>Name: {coupon.company?.displayName}</p>
            <p>Description: {coupon.company?.description}</p>
          </div>
        </div>
      ) : (
        <div>Coupon not found</div>
      )}
    </div>
  )
}
