'use client'

import ProductList from '@/components/ProductList'
import { serverSideFunction } from '@/utils/server-utils'

export const dynamic = 'force-dynamic'

export default function clientSidePage() {
  console.log('client side Server')
  const result = serverSideFunction()
  return (
    <>
      <h2>
        Aqui no caso é um exemplo usando o Apollo Wrapper no arquivo layout.tsx
        {/* eslint-disable react/no-unescaped-entities */}
        para rendereziação do lado do cliente. no caso com a diretiva "use
        client"
      </h2>
      {result}
      {/* <ProductList /> */}
    </>
  )
}
