'use client'

import { useQuery } from '@apollo/client'
import { CompaniesDocument } from '@couponcloud/network/src/gql/generated'
import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import { Button } from '@couponcloud/ui/components/atoms/Button'

export default function Home() {
  const { data, loading } = useQuery(CompaniesDocument)
  const { data: sessionData, status } = useSession()

  if (loading) return <div>Loading...</div>

  console.log(sessionData)

  return (
    <main>
      <div>
        {sessionData?.user?.id ? (
          <Button onClick={() => signOut()}>Signout</Button>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
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
