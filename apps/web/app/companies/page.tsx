'use client'

import { useRouter } from 'next/navigation'
import { useQuery } from '@apollo/client'
import { CompaniesDocument } from '@couponcloud/network/src/gql/generated'

export default function Companies() {
  const router = useRouter()
  const { data, loading } = useQuery(CompaniesDocument)

  if (loading) return <div>Loading...</div>

  const handleRedirect = (id: string) => {
    router.push(`/companies/${id}`)
  }

  return (
    <div className="space-y-4 p-6">
      {data?.companies && data.companies.length > 0 ? (
        data.companies.map((company) => (
          <div
            key={company.id}
            className="p-4 bg-primary rounded cursor-pointer hover:bg-primary-dark"
            onClick={() => handleRedirect(company.id)}
          >
            <div>{company.displayName}</div>
            <div>{company.description}</div>
          </div>
        ))
      ) : (
        <div>No companies available</div>
      )}
    </div>
  )
}
