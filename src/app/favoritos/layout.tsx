import type { Metadata } from 'next'
import Base from '@/templates/Base'

export const metadata: Metadata = {
  title: 'Lory Art Crochê - Favoritos',
  description: 'Lorilei, bolsas em crochê modernas e de Luxo'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <Base>{children}</Base>
}
