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
  if (data?.favoritos[0]?.produtos.length === 0) {
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
  if (data?.favoritos[0]?.produtos?.length) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center my-4 mx-2">
        {data?.favoritos[0]?.produtos?.map((produto, index: number) => (
          <ProductCard
            key={produto?.documentId ?? index}
            id={produto?.documentId ?? ''}
            slug={produto?.slug ?? 'bolsa'}
            name={produto?.nome ?? 'Sem Nome por Enquanto'}
            price={Number(produto?.preco) ?? 0}
            img={{
              src: getImageUrl(produto?.imagem_destaque?.url),
              width: 250,
              height: 250,
              alt: produto?.imagem_destaque?.caption || ''
            }}
          />
        ))}
      </div>
    )
  }
}

export default WishList
