'use client'

import Heading from '@/components/Heading'
import InstagramSection from '@/components/InstagramSection'
import ProductList from '@/components/ProductList'
import { useGetProdutosQuery } from '@/graphql/types'
import Base from '@/templates/Base'

export default function Home() {
  const { data, error, loading, fetchMore } = useGetProdutosQuery({
    variables: {
      sort: ['documentId:ASC'],
      pagination: {
        pageSize: 10,
        page: 1
      }
    }
  })

  const handleShowMore = () => {
    fetchMore({
      variables: {
        sort: ['id:ASC']
        // pagination: {
        //   pageSize: data?.produtos?.meta.pagination.pageSize,
        //   page: data?.produtos?.meta.pagination.page
        //     ? data?.produtos?.meta.pagination.page + 1
        //     : 1
        // }
      }
    })
  }

  return (
    <Base backgroundImg="croche-cofe">
      <Heading className="mb-12 text-center">
        Bolsas lindamente desenhadas feitas com amor.
        <br />
        Perfeito para todas as ocasiões.
      </Heading>
      <ProductList
        // @ts-ignore
        produtos={data?.produtos}
        loading={loading}
        error={error}
        loadMore={handleShowMore}
        // @ts-ignore
      />
      {/* pagination={data?.produtos.meta.pagination} */}
      <InstagramSection />
    </Base>
  )
}
