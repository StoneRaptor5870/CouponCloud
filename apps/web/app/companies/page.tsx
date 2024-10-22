'use client'

import { useRouter } from 'next/navigation'
import { useQuery } from '@apollo/client'
import { CompaniesDocument } from '@couponcloud/network/src/gql/generated'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@couponcloud/ui/components/ui/card'

export default function Companies() {
  const router = useRouter()
  const { data, loading } = useQuery(CompaniesDocument)

  if (loading)
    return (
      <div className="flex justify-center items-center mt-12">Loading...</div>
    )

  const handleRedirect = (id: string) => {
    router.push(`/companies/${id}`)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 space-y-4 p-6">
      {data?.companies && data.companies.length > 0 ? (
        data.companies.map((company) => (
          <Card
            key={company.id}
            className="p-4 rounded cursor-pointer hover:shadow-lg"
            onClick={() => handleRedirect(company.id)}
          >
            <CardHeader>
              <CardTitle>{company.displayName}</CardTitle>
              <CardDescription>{company.description}</CardDescription>
            </CardHeader>
          </Card>
        ))
      ) : (
        <div className="flex justify-center items-center mt-12">
          No companies available
        </div>
      )}
    </div>
  )
}
