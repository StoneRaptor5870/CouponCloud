import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ApolloProvider } from '@couponcloud/network/src/config/apollo'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Coupon Cloud',
  description: 'Customer facing platform.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <ApolloProvider>
        <body className={`${inter.className} antialiased bg-gray-25`}>
          {children}
        </body>
      </ApolloProvider>
    </html>
  )
}
