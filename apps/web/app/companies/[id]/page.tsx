'use client'

import { useRouter } from 'next/navigation'
import { useQuery } from '@apollo/client'
import { CompanyDocument } from '@couponcloud/network/src/gql/generated'

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

  if (loading) return <div>Loading company details...</div>
  if (error) return <div>Error fetching company details</div>

  const company = data?.company

  return (
    <div className="p-6">
      <button
        className="mb-4 p-2 bg-secondary text-black rounded"
        onClick={() => router.back()}
      >
        Go Back
      </button>
      {company ? (
        <div className="p-4 bg-primary rounded">
          <h1 className="text-xl font-bold">{company.displayName}</h1>
          <p>{company.description}</p>
        </div>
      ) : (
        <div>company not found</div>
      )}
    </div>
  )
}
