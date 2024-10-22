'use client'

import { useRouter } from 'next/navigation'
import { useQuery } from '@apollo/client'
import { CompanyDocument } from '@couponcloud/network/src/gql/generated'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@couponcloud/ui/components/ui/card'

interface CompanyPageProps {
  params: {
    id: string
  }
}

export default function CompanyPage({ params }: CompanyPageProps) {
  const router = useRouter()
  const { id } = params

  const { data, loading, error } = useQuery(CompanyDocument, {
    variables: { where: { id } },
  })

  if (loading)
    return (
      <div className="flex justify-center items-center mt-12">
        Loading company details...
      </div>
    )
  if (error)
    return (
      <div className="flex justify-center items-center mt-12">
        Error fetching company details
      </div>
    )

  const company = data?.company

  return (
    <div className="p-6">
      <button
        className="mb-4 p-2 text-black rounded"
        onClick={() => router.back()}
      >
        Go Back
      </button>
      {company ? (
        <Card className="p-4 rounded hover:shadow-lg">
          <CardHeader>
            <CardTitle>{company.displayName}</CardTitle>
            <CardDescription>{company.description}</CardDescription>
          </CardHeader>
          <CardContent>
            {company.coupons.length > 0 ? (
              <div>
                <h4 className="font-semibold mb-2">Coupons:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {company.coupons.map((coupon) => (
                    <li key={coupon.id}>
                      <p>Code: {coupon.code}</p>
                      <p>Description: {coupon.description}</p>
                      <p>Discount: {coupon.discount}</p>
                      <p>Status: {coupon.status}</p>
                      <p>
                        Expiry Date:{' '}
                        {new Date(coupon.expiryDate).toLocaleDateString()}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <p>No coupons available</p>
            )}
          </CardContent>
        </Card>
      ) : (
        <div className="flex justify-center items-center mt-12">
          company not found
        </div>
      )}
    </div>
  )
}
