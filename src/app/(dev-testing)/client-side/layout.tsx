import type { Metadata } from 'next'
import Base from '@/templates/Base'

import { ApolloWrapper } from '@/utils/apollo/apolloWrapper'
export const metadata: Metadata = {
  title: 'Lory Art Crochê - Client Side',
  description: 'Lorilei, bolsas em crochê modernas e de Luxo'
}

export default async function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ApolloWrapper>
      <Base>{children}</Base>
    </ApolloWrapper>
  )
}
