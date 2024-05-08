import Base from '@/templates/Base'
import Product from './_components/Product'
import SkeletonEffectProductPage from './_components/SkeletonEffectProductPage'
import { getClient } from '@/utils/apollo/apollo'
import type { Metadata, ResolvingMetadata } from 'next'
import { Suspense } from 'react'
import { GetProdutoDocument } from '@/graphql/types'
import { normalize } from '@/utils/mappers'
import { Produto } from '@/utils/types/Produto.type'

// export const dynamic = 'force-dynamic'

type PropsProduto = {
  params?: {
    slug: string
  }
  searchParams: {
    id: string
  }
}

// let produto = null as Produto | null

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

// export async function generateStaticParams() {
//   const { data, error } = await getClient().query({
//     query: GetProdutosDocument,
//     fetchPolicy: 'no-cache'
//   })

//   const paths = data.produtos.data.map((produto: ProdutoEntity) => {
//     return {
//       params: { slug: produto?.attributes?.slug || '', id: produto.id }
//     }
//   })
//   // as GetProdutosQuery
//   console.log('generateStaticParams', paths)
//   return paths

// }

export default async function ProductPage({ searchParams }: PropsProduto) {
  const { produto } = await getProduct(searchParams.id)

  return (
    <Base backgroundImg="croche-pink" sizeBg="medium">
      <>
        <Suspense fallback={<SkeletonEffectProductPage />}>
          {/* {loading && <SkeletonEffectProductPage />} */}

          {produto && <Product currentProduct={produto} />}
        </Suspense>
      </>
    </Base>
  )
}
