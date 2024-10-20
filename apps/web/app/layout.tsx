import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ApolloProvider } from '@couponcloud/network/src/config/apollo'
import { SessionProvider } from '@couponcloud/ui/components/molecules/SessionProvider'
import { Header } from '@couponcloud/ui/components/organisms/Header'
import { MenuItem } from '@couponcloud/util/types'
import '@couponcloud/ui/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Coupon Cloud',
  description: 'Customer facing platform.',
}

const MENUITEMS: MenuItem[] = [
  { label: 'Search', href: '/search' },
  { label: 'Coupons', href: '/coupon' },
  { label: 'Companies', href: '/companies' },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <SessionProvider>
        <ApolloProvider>
          <body className={`${inter.className} antialiased bg-gray-25`}>
            <Header menuItems={MENUITEMS} />
            {children}
          </body>
        </ApolloProvider>
      </SessionProvider>
    </html>
  )
}
