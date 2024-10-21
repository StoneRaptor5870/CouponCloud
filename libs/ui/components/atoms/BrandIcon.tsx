import { ReactNode } from 'react'

export interface IBrandIconProps {
  children?: ReactNode
}

export const BrandIcon = ({
  children = (
    <div
      className={`bg-tertiary-400 shadow w-4 h-4 rounded-full animate-coupon`}
    />
  ),
}: IBrandIconProps) => {
  return (
    <div className="inline-block overflow-hidden">
      <div
        className={`flex items-center justify-center border-2 border-tertiary-400 w-6 h-6 rounded-full`}
      >
        {children}
      </div>
    </div>
  )
}
