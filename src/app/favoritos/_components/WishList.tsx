'use client'

import ProductCard from '@/components/ProductCard'
import Empty from '@/components/Empty'
import Loader from '@/components/Loader'
import { useSession } from 'next-auth/react'
import { useQueryFavoritos } from '@/graphql/queries/favoritos'
import { getImageUrl } from '@/utils/getImageUrl'
import Link from 'next/link'
import { NextRoutes } from '@/utils/constant'

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

  if (error) {
    throw error
  }

  if (loadingFavoritos) {
    return (
      <>
        <Loader />
      </>
    )
  }
  if (data?.favoritos?.data.length === 0) {
    return (
      <>
        <Empty title="Nenhum Produto Adicionado as Favoritos" description="" />
        <p className="text-center">
          Visite nossa página de
          <Link href={NextRoutes.products} className="text-primary">
            {' '}
            produtos{' '}
          </Link>
          e adicione <br /> aos favoritos os produtos que você mais gostou 😊
        </p>
      </>
    )
  }
  if (data?.favoritos?.data.length) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center my-4 mx-2">
        {data?.favoritos?.data[0].attributes?.produtos?.data.map(
          (produto: any, index: number) => (
            <ProductCard
              key={produto?.id ?? index}
              id={produto?.id ?? ''}
              slug={produto?.attributes?.slug ?? 'bolsa'}
              name={produto?.attributes?.nome ?? 'Sem Nome por Enquanto'}
              price={Number(produto?.attributes?.preco) ?? 0}
              img={getImageUrl(
                produto.attributes?.imagem_destaque?.data?.attributes!.url
              )}
            />
          )
        )}
      </div>
    )
  }
}

export default WishList
