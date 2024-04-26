import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lory Art Crochê - Produtos',
  description: 'Lorilei, bolsas em crochê modernas e de Luxo'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
