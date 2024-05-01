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
import SearchInput from '@/components/SearchInput'
import Heading from '@/components/Heading'

export type filterStrapiType = {
  preco?: number
  // search?: string
  sort?: OrderPriceEntity
}

export default function Produtos() {
  const [filters, setFilters] = useState<filterStrapiType>({})
  const [search, setSearch] = useState<string>('')
  const debouncedSearch = useDebounce(search, 980)
  const defaultPriceFilter = 99999
  const initialValues = {
    sort: 'preco:DESC',
    preco: defaultPriceFilter
  } as filterStrapiType

  const handleFilter = (items: ParsedUrlQueryInput) => {
    setFilters(items)
    return
  }

  const { data, error, loading, fetchMore, refetch } = useGetProdutosQuery({
    variables: {
      // https://docs.strapi.io/dev-docs/api/rest/filters-locale-publication#filtering
      filters: {
        nome: {
          containsi: debouncedSearch
        },
        preco: {
          lt: filters?.preco ? filters.preco : defaultPriceFilter
        }
      },
      sort: filters?.sort ? [filters?.sort] : [],
      pagination: {
        pageSize: 10,
        page: 1
      }
    },
    fetchPolicy: 'no-cache'
    // nextFetchPolicy: 'cache-first'
  })

  const handleShowMore = () => {
    fetchMore({
      variables: {
        filters: {
          nome: {
            containsi: debouncedSearch
          },
          preco: {
            lt: filters?.preco ? filters.preco : defaultPriceFilter
          }
        },
        sort: filters?.sort ? [filters?.sort] : [],
        pagination: {
          pageSize: data?.produtos?.meta.pagination.pageSize,
          page: data?.produtos?.meta.pagination.page
            ? data?.produtos?.meta.pagination.page + 1
            : 1
        }
      }
    })
  }

  const onChangeInputSearch = (query: string) => {
    setSearch(query)
  }

  return (
    <Base backgroundImg="croche-pink" sizeBg="medium">
      <Heading size="huge" className="mb-5 text-center">
        Confira nossas bolsas de crochê 🧶
      </Heading>
      <div className="flex flex-col lg:flex-row w-full">
        {/* {JSON.stringify(filterItems)} */}
        <div className="w-full max-w-[14rem]">
          <ExploreSidebar
            // @ts-ignore
            items={filterItems}
            // @ts-ignore
            initialValues={initialValues}
            onFilter={handleFilter}
          />
        </div>
        <div className="w-full">
          <div className="flex items-center flex-col lg:flex-row justify-center mt-4 lg:mt-0 w-full">
            <SearchInput
              inputValue={search}
              loading={false}
              setInputValue={onChangeInputSearch}
            />
            {/* <div>oi</div> */}
          </div>
          <ProductList
            // @ts-ignore
            produtos={data?.produtos.data}
            loading={loading}
            page="produtos"
            error={error}
            loadMore={handleShowMore}
            // @ts-ignore
            pagination={data?.produtos.meta.pagination}
          />
        </div>
      </div>

      <InstagramSection />
    </Base>
  )
}
