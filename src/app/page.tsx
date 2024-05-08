import Heading from '@/components/Heading'
import InstagramSection from '@/components/InstagramSection'
import ProductList from '@/components/ProductList'
import { GetProdutosDocument, useGetProdutosQuery } from '@/graphql/types'
import Base from '@/templates/Base'
import { getClient } from '@/utils/apollo/apollo'
import { normalize } from '@/utils/mappers'

async function getProdutos() {
  const {
    data: dataProdutos,
    error,
    loading
  } = await getClient().query({
    query: GetProdutosDocument,
    variables: {
      sort: ['id:ASC'],
      pagination: {
        pageSize: 10,
        page: 1
      }
    },
    fetchPolicy: 'no-cache'
  })

  const pagination = dataProdutos.produtos.meta.pagination

  const data = normalize(dataProdutos)

  return {
    data,
    pagination,
    error,
    loading
  }
}

export default async function Home() {
  const { data, pagination, error, loading } = await getProdutos()

  // const { data, error, loading, fetchMore } = useGetProdutosQuery({
  //   variables: {
  //     sort: ['id:ASC'],
  //     pagination: {
  //       pageSize: 10,
  //       page: 1
  //     }
  //   },
  //   fetchPolicy: 'no-cache'
  // })

  const handleShowMore = async () => {
    'use server'
    console.log('asd')
    return null
    // fetchMore({
    //   variables: {
    //     sort: ['id:ASC'],
    //     pagination: {
    //       pageSize: data?.produtos?.meta.pagination.pageSize,
    //       page: data?.produtos?.meta.pagination.page
    //         ? data?.produtos?.meta.pagination.page + 1
    //         : 1
    //     }
    //   }
    // })
  }

  return (
    <Base backgroundImg="croche-cofe">
      <Heading className="mb-12 text-center">
        Bolsas lindamente desenhadas feitas com amor.
        <br />
        Perfeito para todas as ocasiões.
      </Heading>
      {/* {JSON.stringify(pagination)} */}
      <ProductList
        produtos={data.produtos}
        loading={loading}
        error={error}
        loadMore={handleShowMore}
        page="inicio"
        pagination={pagination}
      />
      <InstagramSection />
    </Base>
  )
}
