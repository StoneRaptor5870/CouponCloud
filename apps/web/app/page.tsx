'use client'

import { useQuery } from '@apollo/client'
import { CompaniesDocument } from '@couponcloud/network/src/gql/generated'

export default function Home() {
  const { data, loading } = useQuery(CompaniesDocument)
  console.log(data)
  if (loading) return <div>Loading...</div>
  return (
    <main>
      CouponCloud Home
      <div>
        {data?.companies && data.companies.length > 0 ? (
          data.companies.map((company) => (
            <div className="p-4 bg-primary rounded" key={company.id}>
              <div>{company.displayName}</div>
              <div>{company.description}</div>
            </div>
          ))
        ) : (
          <div>No companies</div>
        )}
      </div>
    </main>
  )
}
