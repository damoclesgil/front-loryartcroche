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
    id: string
    slug: string
  }
  searchParams?: {
    id: string
  }
}

async function getProduct({ searchParams }: PropsProduto) {
  // console.log('sera que ta fazendo duas vezes a query?')
  const { data, error } = await getClient().query({
    query: GetProdutoDocument,
    // context: {
    //   headers: session ? `Bearer ${session.jwt}` : ``
    // },
    variables: {
      produtoId: searchParams?.id
    },
    fetchPolicy: 'no-cache'
  })

  return {
    data,
    error
  }
}

export async function generateMetadata({
  searchParams
}: PropsProduto): Promise<Metadata> {
  const { data } = await getProduct({ searchParams })
  let product = normalize(data.produto) as Produto

  return {
    title: `${product.nome}`
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
  const { data, error } = await getProduct({ searchParams })

  let produto = null
  if (error) {
    throw error
  }

  if (data) {
    produto = normalize(data?.produto) as Produto
    // console.log(produto)
  }

  return (
    <Base backgroundImg="croche-pink" sizeBg="medium">
      <>
        <Suspense fallback={<SkeletonEffectProductPage />}>
          {/* {loading && <SkeletonEffectProductPage />} */}

          {/* {JSON.stringify(loading)} */}
          {/* {JSON.stringify(params)} */}
          {/* {JSON.stringify(data)} */}
          {/* {JSON.stringify(currentProduct)} */}
          {produto && <Product currentProduct={produto} />}
        </Suspense>
      </>
    </Base>
  )
}
