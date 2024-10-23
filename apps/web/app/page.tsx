'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Scene from '@couponcloud/3d/src/Scene'

export default function Home() {
  const { data: session } = useSession()
  const router = useRouter()

  const handleRedirect = () => {
    router.push('/login')
  }

  return (
    <main className="w-full h-[calc(100vh-5rem)] overflow-hidden flex justify-center items-center">
      <div className="grid grid-cols-4 grid-rows-4 gap-4 w-full h-full p-4">
        <div className="col-span-4 flex flex-col justify-center items-center text-2xl font-bold space-y-2">
          <h1>CouponCloud</h1>
          <p className="text-lg">Effortless Coupon Distribution</p>

          {!session && (
            <button
              className="mt-4 bg-tertiary-400 rounded-lg text-black py-2 font-normal px-4"
              onClick={handleRedirect}
            >
              Create Account
            </button>
          )}
        </div>

        <div className="row-span-2 sm:flex hidden flex-col justify-center items-center text-xl font-bold space-y-4 mt-20">
          <p>Recent Activity</p>
          <ul className="text-base space-y-2">
            <li>20% off coupon issued by Jane</li>
            <li>10x $5 Discount used today</li>
            <li>BOGO deal redeemed 5 times</li>
          </ul>
        </div>

        <div className="col-span-4 row-span-2 flex justify-center items-center sm:col-span-2 sm:row-span-2">
          <Scene />
        </div>

        <div className="row-span-2 sm:flex hidden flex-col justify-center items-center text-xl font-bold space-y-4 mt-20">
          <button className="hover:text-tertiary-400">Food Coupons</button>
          <button className="hover:text-tertiary-400">Electronics</button>
          <button className="hover:text-tertiary-400">Travel</button>
          <button className="hover:text-tertiary-400">All Coupons</button>
        </div>

        <div className="col-span-4 sm:flex hidden justify-around items-center text-lg font-bold mt-20">
          <p>Coupons Issued Today: 125</p>
          <p>Total Active Coupons: 2450</p>
          <p>Expiring Soon: 45</p>
        </div>
      </div>
    </main>
  )
}
