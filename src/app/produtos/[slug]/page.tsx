import Base from '@/templates/Base'
import Product from './_components/Product'
import SkeletonEffectProductPage from './_components/SkeletonEffectProductPage'
import { getClient } from '@/utils/apollo/apollo'
import type { Metadata } from 'next'
import { Suspense } from 'react'
import {
  GetProdutoDocument,
  GetProdutosDocument,
  GetProdutosQuery,
  ProdutoEntity
} from '@/graphql/types'
import { ProdutoFragment } from '@/graphql/fragments/produto'
// import { useRouter } from 'next/router'
// import { useSearchParams } from 'next/navigation'

export const dynamic = 'force-dynamic'

type PropsProduto = {
  params: {
    id: string
    slug: string
  }
  // query: {
  //   id: string
  // }
}

export const generateMetadata = ({ params }: PropsProduto): Metadata => {
  return {
    title: `Produto ${params.slug}`
  }
}

// export const metadata: Metadata = {
//   title: 'Produto'
// }

export async function generateStaticParams() {
  const { data, error } = await getClient().query({
    query: GetProdutosDocument,
    fetchPolicy: 'no-cache'
  })

  // const paths2 = data.produtos.data

  // console.log(slug)
  const paths = data.produtos.data.map((produto: ProdutoEntity) => {
    // console.log('a', produto?.attributes?.slug || '')
    return {
      params: { slug: produto?.attributes?.slug || '', id: produto.id }
    }
  })
  // as GetProdutosQuery
  console.log('generateStaticParams', paths)
  return paths
  // console.log(paths2)
  // paths.produtos?.data[0]
  // return [
  //   { id: '3', slug: 'bolsa-01' },
  //   { id: '2', slug: 'bolsa-02' }
  // ]
}

export default async function ProductPage({ params }: PropsProduto) {
  // let session = await getSession()
  console.log('ProductPage', params)

  // vai pegar [slug] do nome do arquivo
  // const productIda = useSearchParams().get('id')
  // console.log(productIda)
  // const router = useRouter()
  // const query = router.query
  // console.log(query)

  // / / Authorization: `Bearer ${JSON.parse(jwtToken!)}`,
  const productId = '3'

  const { data, error } = await getClient().query({
    query: GetProdutoDocument,
    // context: {
    //   headers: session ? `Bearer ${session.jwt}` : ``
    // },
    variables: {
      produtoId: productId
    },
    fetchPolicy: 'no-cache'
  })

  let currentProduct = null

  if (error) {
    throw error
  }

  // if (client) {
  //   console.log(client)
  // }

  if (data) {
    currentProduct = {
      id: data?.produto?.data?.id,
      name: data?.produto?.data?.attributes?.nome,
      price: data?.produto?.data?.attributes?.preco,
      img: data?.produto?.data?.attributes?.imagem_destaque?.data?.attributes
        ?.url,
      gallery: data?.produto?.data?.attributes?.galeria?.data,
      detalhes: data?.produto?.data?.attributes?.descricao,
      cor: data?.produto?.data?.attributes?.cor,
      slug: data?.produto?.data?.attributes?.slug,
      nomeCor: data?.produto?.data?.attributes?.nomeCor,
      produtoReferentes:
        data?.produto?.data?.attributes?.produtosReferentes?.data
    }
    // console.log(data)
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

          <Product currentProduct={currentProduct} />
        </Suspense>
      </>
    </Base>
  )
}
