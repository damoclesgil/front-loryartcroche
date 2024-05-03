import { defaultMetadata } from '@/utils/constant'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `${defaultMetadata.title} - Produtos`
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
