'use client'

import { useRouter } from 'next/navigation'
import { useQuery } from '@apollo/client'
import { CouponDocument } from '@couponcloud/network/src/gql/generated'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@couponcloud/ui/components/ui/card'

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

  if (loading)
    return (
      <div className="flex justify-center items-center mt-12">
        Loading coupon details...
      </div>
    )
  if (error)
    return (
      <div className="flex justify-center items-center mt-12">
        Error fetching coupon details
      </div>
    )

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
        <Card className="p-4 rounded hover:shadow-lg flex justify-center items-center h-96">
          <div className="text-center">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                {coupon.code}
              </CardTitle>
              <CardDescription className="mt-2">
                {coupon.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="mt-4">
              <p>{coupon.company?.displayName}</p>
              <p>{coupon.company?.description}</p>
              <p>{coupon.discount}</p>
              <p>{coupon.status}</p>
            </CardContent>
          </div>
        </Card>
      ) : (
        <div className="flex justify-center items-center mt-12">
          Coupon not found
        </div>
      )}
    </div>
  )
}
