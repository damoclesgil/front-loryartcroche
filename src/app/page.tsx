'use client'

import Empty from '@/components/Empty'
import Heading from '@/components/Heading'
import InstagramSection from '@/components/InstagramSection'
import ProductList from '@/components/ProductList'
import SkeletonEffectProducts from '@/components/ProductList/SkeletonEffectProducts'
import { useGetProdutosQuery } from '@/graphql/types'
import Base from '@/templates/Base'
import { useState } from 'react'

export default function Home() {
  const hasFilters = true
  const [page, setPage] = useState(1)

  const { data, error, loading, fetchMore } = useGetProdutosQuery({
    variables: {
      sort: ['documentId:DESC'],
      pagination: {
        pageSize: 1,
        page: page
      }
    },
    fetchPolicy: 'no-cache'
    // nextFetchPolicy: 'cache-first'
  })

  const handleShowMore = () => {
    // setPage(page + 1)
    fetchMore({
      variables: {
        sort: ['documentId:DESC'],
        pagination: {
          pageSize: 2,
          page: page + 1
        }
        // pagination: {
        //   pageSize: data?.produtos?.meta.pagination.pageSize,
        //   page: data?.produtos?.meta.pagination.page
        //     ? data?.produtos?.meta.pagination.page + 1
        //     : 1
        // }
      }
    })
  }

  if (loading) {
    return <SkeletonEffectProducts qtdLoadingItems={4} />
  }

  if (error) {
    throw error
  }

  if (data?.produtos.length === 0) {
    return (
      <>
        {hasFilters ? (
          <Empty
            title="Nenhuma Bolsa Registrada"
            description="
            Nenhuma Bolsa Foi Encontrado com esses parâmetros de busca considere alterar os filtros ou a busca
            "
          />
        ) : (
          <Empty
            title="Nenhuma Bolsa Registrada"
            description="Nenhuma de Bolsa foi encontrada"
          />
        )}
      </>
    )
  }

  if (data?.produtos.length) {
    return (
      <Base backgroundImg="croche-cofe">
        <Heading className="mb-12 text-center">
          Bolsas lindamente desenhadas feitas com amor.
          <br />
          Perfeito para todas as ocasiões.
        </Heading>
        <ProductList
          // @ts-ignore
          produtos={data.produtos}
          loadMore={handleShowMore}
        />

        {/* pagination={data?.produtos.meta.pagination} */}
        <InstagramSection />
      </Base>
    )
  }
}
