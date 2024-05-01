'use client'

import { useSession } from 'next-auth/react'
import { useQueryFavoritos } from '@/graphql/queries/favoritos'
import ProductList from '@/components/ProductList'

const WishList = () => {
  const { data: session } = useSession()

  const {
    data,
    loading: loadingFavoritos,
    error
  } = useQueryFavoritos({
    context: { session },
    variables: {
      filters: {
        user: {
          email: {
            contains: session?.user?.email as string
          }
        }
      }
    }
  })

  return (
    <>
      <ProductList
        // @ts-ignore
        produtos={data?.favoritos?.data[0].attributes?.produtos?.data}
        loading={loadingFavoritos}
        page="favoritos"
        error={error}
        loadMore={() => {}}
        // @ts-ignore
        pagination={data?.favoritos?.meta?.pagination}
      />
    </>
  )
}

export default WishList
