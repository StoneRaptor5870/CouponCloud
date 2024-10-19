'use client'

import { useQuery } from '@apollo/client'
import {
  CompaniesDocument,
  CouponsDocument,
} from '@couponcloud/network/src/gql/generated'
import { useSession } from 'next-auth/react'
import Scene from '@couponcloud/3d/src/Scene'

export default function Home() {
  const { data, loading } = useQuery(CompaniesDocument)
  const { data: couponsData, loading: couponsLoading } =
    useQuery(CouponsDocument)
  const { data: sessionData, status } = useSession()

  if (loading) return <div>Loading...</div>

  console.log(sessionData)

  return (
    <main className="w-full h-screen overflow-hidden flex flex-col justify-center items-center">
      CouponCloud Home
      <Scene />
      <div className="flex flex-row justify-center items-center pb-12">
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
        <div>
          {couponsData?.coupons && couponsData.coupons.length > 0 ? (
            couponsData.coupons.map((coupon) => (
              <div className="p-4 bg-primary rounded" key={coupon.id}>
                <div>{coupon.description}</div>
                <div>{coupon.discount}</div>
                <div>{coupon.expiryDate}</div>
                <div>{coupon.status}</div>
                <div>{coupon.company?.displayName}</div>
                <div>{coupon.company?.description}</div>
              </div>
            ))
          ) : (
            <div>No coupons</div>
          )}
        </div>
      </div>
    </main>
  )
}
