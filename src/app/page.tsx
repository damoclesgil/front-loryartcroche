'use client'

// import Empty from '@/components/Empty'
// import SkeletonEffectProducts from '@/components/ProductList/SkeletonEffectProducts'
import Heading from '@/components/Heading'
import InstagramSection from '@/components/InstagramSection'
import ProductList from '@/components/ProductList'
import { useGetProdutosQuery } from '@/graphql/types'
import Base from '@/templates/Base'
import { useState } from 'react'

export default function Home() {
  const hasFilters = true
  const [page, setPage] = useState(1)
  const [pageSise, setPageSise] = useState(10)

  const { data, error, loading, fetchMore } = useGetProdutosQuery({
    variables: {
      sort: ['documentId:DESC'],
      pagination: {
        pageSize: pageSise,
        page: page
      }
    },
    fetchPolicy: 'no-cache'
    // nextFetchPolicy: 'cache-first'
  })

  const handleShowMore = () => {
    fetchMore({
      variables: {
        sort: ['documentId:DESC'],
        pagination: {
          pageSize: pageSise,
          page: page + 1
        }
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
        produtos={data?.produtos!}
        loading={loading}
        error={error}
        hasFilters={hasFilters}
        loadMore={handleShowMore}
      />

      {/* pagination={data?.produtos.meta.pagination} */}
      <InstagramSection />
    </Base>
  )
}
