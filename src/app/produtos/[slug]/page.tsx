import Base from '@/templates/Base'
import Product from './_components/Product'
import SkeletonEffectProductPage from './_components/SkeletonEffectProductPage'
import { getClient } from '@/utils/apollo/apollo'
import type { Metadata, ResolvingMetadata } from 'next'
import { Suspense } from 'react'
import { GetProdutoDocument } from '@/graphql/types'
import { normalize } from '@/utils/mappers'
import { Produto } from '@/utils/types/Produto.type'

export const dynamic = 'force-dynamic'

type PropsProduto = {
  params?: {
    slug: string
  }
  searchParams: {
    id: string
  }
}

async function getProduct(id: string) {
  const { data, error } = await getClient().query({
    query: GetProdutoDocument,
    // context: {
    //   headers: session ? `Bearer ${session.jwt}` : ``
    // },
    variables: {
      produtoId: id
    },
    fetchPolicy: 'no-cache'
  })

  const produto = normalize(data?.produto) as Produto | null

  return {
    produto,
    error
  }
}

export async function generateMetadata({
  searchParams
}: PropsProduto): Promise<Metadata> {
  const { produto } = await getProduct(searchParams.id)

  return {
    title: `${produto?.nome}`
  }
}

export default async function ProductPage({ searchParams }: PropsProduto) {
  // TODO: Simular o loading, lembar de remove quando for para prod
  await new Promise((resolve) => setTimeout(resolve, 3000))
  const { produto } = await getProduct(searchParams.id)

  // Seria assim que simula o loading do lado server side utilziando o suspense
  return (
    <Base backgroundImg="croche-pink" sizeBg="medium">
      <>
        <Suspense fallback={<SkeletonEffectProductPage />}>
          {produto && <Product currentProduct={produto} />}
        </Suspense>
      </>
    </Base>
  )
}
