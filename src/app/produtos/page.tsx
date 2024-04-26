'use client'

import ExploreSidebar from '@/components/ExploreSidebar'
import InstagramSection from '@/components/InstagramSection'
import ProductList from '@/components/ProductList'
import { ParsedUrlQueryInput } from 'querystring'
import { useGetProdutosQuery } from '@/graphql/types'
import { filterItems, OrderPriceEntity } from '@/utils/filter/fields'
import { useEffect, useState } from 'react'
import Base from '@/templates/Base'
import useDebounce from '@/utils/common/useDebounce'
// import { capitalize } from '@/utils/common'

export type filterStrapiType = {
  preco?: number
  search?: string
  sort?: OrderPriceEntity
}

export default function Produtos() {
  const [filters, setFilters] = useState<filterStrapiType>({})
  const debouncedSearch = useDebounce(filters.search, 980)

  useEffect(() => {
    if (debouncedSearch) {
      console.log(debouncedSearch)
    }
  }, [debouncedSearch])

  const handleFilter = (items: ParsedUrlQueryInput) => {
    setFilters(items)
    return
  }

  const { data, error, loading, fetchMore, refetch } = useGetProdutosQuery({
    variables: {
      // https://docs.strapi.io/dev-docs/api/rest/filters-locale-publication#filtering
      filters: {
        nome: {
          // contains: debouncedSearch
          containsi: debouncedSearch
        },
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
    <Base backgroundImg="accessorios-croche">
      <ExploreSidebar
        // @ts-ignore
        items={filterItems}
        // @ts-ignore
        initialValues={{ sort: 'preco:DESC', preco: 5000, search: '' }}
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
    </Base>
  )
}
