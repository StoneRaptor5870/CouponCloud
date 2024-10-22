'use client'

import { useRouter } from 'next/navigation'
import { useQuery } from '@apollo/client'
import { CouponsDocument } from '@couponcloud/network/src/gql/generated'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@couponcloud/ui/components/ui/card'

export default function Coupon() {
  const router = useRouter()
  const { data, loading } = useQuery(CouponsDocument)

  if (loading)
    return (
      <div className="flex justify-center items-center mt-12">Loading...</div>
    )

  const handleRedirect = (id: string) => {
    router.push(`/coupon/${id}`)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
      {data?.coupons && data.coupons.length > 0 ? (
        data.coupons.map((coupon) => (
          <Card
            key={coupon.id}
            className="p-4 rounded cursor-pointer hover:shadow-lg"
            onClick={() => handleRedirect(coupon.id)}
          >
            <CardHeader>
              <CardTitle>{coupon.code}</CardTitle>
              <CardDescription>{coupon.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{coupon.company?.displayName}</p>
              <p>{coupon.discount}</p>
              <p>{coupon.status}</p>
            </CardContent>
          </Card>
        ))
      ) : (
        <div className="flex justify-center items-center mt-12">
          No coupons available
        </div>
      )}
    </div>
  )
}
