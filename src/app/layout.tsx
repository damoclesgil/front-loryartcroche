import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import StyledComponentsRegistry from '@/lib/registry'
import { Providers } from './providers'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lory Art Crochê',
  description: 'Artes de Crochê'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Providers>
            <Header />
            {children}
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
