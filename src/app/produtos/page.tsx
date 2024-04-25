'use client'

import ExploreSidebar from '@/components/ExploreSidebar'
import InstagramSection from '@/components/InstagramSection'
import ProductList from '@/components/ProductList'
import { priceFields, sortFields } from '@/utils/filter'
import { ParsedUrlQueryInput } from 'querystring'
import { useRouter } from 'next/navigation'
import { NextRoutes } from '@/utils/constant'
import { useGetProdutosQuery } from '@/graphql/types'
import { filterItems } from '@/utils/filter/fields'
import { useState } from 'react'

export default function Produtos() {
  const { push } = useRouter()
  const [filters, setFilters] = useState<any>({})

  const handleFilter = (items: ParsedUrlQueryInput) => {
    setFilters(items)
    console.log(filters)
    // push(NextRoutes.products)
    return
  }

  const { data, error, loading, fetchMore, refetch } = useGetProdutosQuery({
    variables: {
      // https://docs.strapi.io/dev-docs/api/rest/filters-locale-publication#filtering
      filters: {
        preco: {
          // filters?.preco.length ? filters?.preco[0] :
          lt: 200
          // filters.preco ? lt: filters.preco[0] ? gt: 0
          // lt: filters.preco ? filters.preco : 1250
        }
      },
      // sort: ['id:ASC'],
      // filters?.sort ? sort: []
      sort: [filters.sort],
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

  return (
    <main>
      <ExploreSidebar
        // @ts-ignore
        items={filterItems}
        // @ts-ignore
        initialValues={{ sort: 'preco:DESC', preco: [1200] }}
        onFilter={handleFilter}
      />
      {JSON.stringify(filters)}
      <h1 className="text-2xl font-bold text-center">
        Confira nossas bolsas de crochê 🧶
      </h1>
      {data?.produtos && (
        <ProductList
          produtos={data?.produtos.data}
          loading={loading}
          error={error}
          loadMore={handleShowMore}
          pagination={data?.produtos.meta.pagination}
        />
      )}
      <InstagramSection />
    </main>
  )
}
