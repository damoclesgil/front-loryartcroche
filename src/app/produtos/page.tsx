'use client'

import ExploreSidebar from '@/components/ExploreSidebar'
import InstagramSection from '@/components/InstagramSection'
import ProductList from '@/components/ProductList'
import { ParsedUrlQueryInput } from 'querystring'
import { useGetProdutosQuery } from '@/graphql/types'
import { filterItems, OrderPriceEntity } from '@/utils/filter/fields'
import { useState } from 'react'

export type filterStrapiType = {
  preco?: number
  sort?: OrderPriceEntity
}

export default function Produtos() {
  const [filters, setFilters] = useState<filterStrapiType>({})

  const handleFilter = (items: ParsedUrlQueryInput) => {
    setFilters(items)
    return
  }

  const { data, error, loading, fetchMore, refetch } = useGetProdutosQuery({
    variables: {
      // https://docs.strapi.io/dev-docs/api/rest/filters-locale-publication#filtering
      filters: {
        preco: {
          lt: filters.preco
        }
      },
      sort: filters?.sort ? [filters?.sort] : [],
      pagination: {
        pageSize: 10,
        page: 1
      }
    },
    fetchPolicy: 'no-cache',
    nextFetchPolicy: 'cache-first'
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

  return (
    <main>
      <ExploreSidebar
        // @ts-ignore
        items={filterItems}
        // @ts-ignore
        initialValues={{ sort: 'preco:DESC', preco: 1200 }}
        onFilter={handleFilter}
      />
      {/* {JSON.stringify(filters)} */}
      <h1 className="text-2xl font-bold text-center">
        Confira nossas bolsas de crochê 🧶
      </h1>
      <ProductList
        // @ts-ignore
        produtos={data?.produtos.data}
        loading={loading}
        hasFilters={true}
        error={error}
        loadMore={handleShowMore}
        // @ts-ignore
        pagination={data?.produtos.meta.pagination}
      />
      <InstagramSection />
    </main>
  )
}
