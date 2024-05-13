'use client'

import Heading from '@/components/Heading'
import InstagramSection from '@/components/InstagramSection'
import ProductList from '@/components/ProductList'
import { useGetProdutosQuery } from '@/graphql/types'
import Base from '@/templates/Base'
import { normalize } from '@/utils/mappers'

export default function Home() {
  const { data, error, loading, fetchMore } = useGetProdutosQuery({
    variables: {
      sort: ['id:ASC'],
      pagination: {
        pageSize: 10,
        page: 1
      }
    },
    fetchPolicy: 'no-cache'
  })

  const handleShowMore = () => {
    fetchMore({
      variables: {
        sort: ['id:ASC'],
        pagination: {
          pageSize: data?.produtos?.meta.pagination.pageSize,
          page: data?.produtos?.meta.pagination.page
            ? data?.produtos?.meta.pagination.page + 1
            : 1
        }
      }
    })
  }

  let produtosData = normalize(data?.produtos)
  let pagination = data?.produtos?.meta

  return (
    <Base backgroundImg="croche-cofe">
      <Heading className="mb-12 text-center">
        Bolsas lindamente desenhadas feitas com amor.
        <br />
        Perfeito para todas as ocasiões.
      </Heading>
      <ProductList
        // @ts-ignore
        produtos={produtosData}
        loading={loading}
        error={error}
        page="inicio"
        loadMore={handleShowMore}
        // @ts-ignore
        pagination={pagination}
      />
      <InstagramSection />
    </Base>
  )
}
