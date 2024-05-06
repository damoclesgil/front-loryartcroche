'use client'

import { useSession } from 'next-auth/react'
import ProductList from '@/components/ProductList'
// import { useFavoritosAction } from '../actions'
// import { Suspense } from 'react'
import { useQueryFavoritos } from '@/graphql/queries/favoritos'

const WishList = () => {
  const { data: session } = useSession()

  // const { data, loading, error } = await useFavoritosAction()

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
        produtos={data?.favoritos?.data[0]?.attributes?.produtos?.data}
        loading={loadingFavoritos}
        page="favoritos"
        error={error}
        loadMore={() => {}}
        // @ts-ignore
        pagination={data?.favoritos?.meta?.pagination}
      />
      {/* <Suspense>
        <p>{JSON.stringify(data.favoritos)}</p>
        <ProductList
          produtos={data.favoritos?.[0]?.produtos}
          loading={loading}
          page="favoritos"
          error={error}
          loadMore={() => {}}
          pagination={data.favoritos?.meta?.pagination}
        />
      </Suspense> */}
    </>
  )
}

export default WishList
