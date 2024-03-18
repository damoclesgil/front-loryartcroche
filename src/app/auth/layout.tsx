import type { Metadata } from 'next'

import { ApolloWrapper } from '@/utils/apolloWrapper'
import { Toaster } from '@/components/ui/toaster'
export const metadata: Metadata = {
  title: 'Lory Art Crochê - Registrar',
  description: 'Lorilei, bolsas em crochê modernas e de Luxo'
}

export default async function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ApolloWrapper>
      {children}
      <Toaster />
    </ApolloWrapper>
  )
}
