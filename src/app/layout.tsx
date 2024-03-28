import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from './providers'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ApolloWrapper } from '@/utils/apolloWrapper'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Lory Art Crochê',
  description: 'Lorilei, bolsas em crochê modernas e de Luxo'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <SessionProvider>
          <ApolloWrapper>
            <Providers>{children}</Providers>
            <Toaster />
          </ApolloWrapper>
          <SpeedInsights />
        </SessionProvider>
      </body>
    </html>
  )
}
