'use client'

import ProductCard from '@/components/ProductCard'
import { getImageUrl } from '@/utils/getImageUrl'
import Empty from '../Empty'
import { Button } from '../ui/button'
import SkeletonEffectProducts from './SkeletonEffectProducts'
import { Pagination, ProdutoEntity } from '@/graphql/types'
import Link from 'next/link'
import { NextRoutes } from '@/utils/constant'
// import { ApolloErrorOptions } from '@apollo/client/errors'
// import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr'

export type ProductListProps = {
  produtos: any[]
  loading: boolean
  page: 'inicio' | 'favoritos' | 'produtos'
  pagination: Pagination
  loadMore: () => void
  error: any | undefined
}

const ProductList = ({
  produtos,
  loading,
  pagination,
  loadMore,
  page = 'inicio',
  error
}: ProductListProps) => {
  if (error) {
    throw error
  }

  if (loading) {
    return <SkeletonEffectProducts qtdLoadingItems={4} />
  }

  if (produtos.length === 0) {
    return (
      <>
        {page === 'produtos' && (
          <Empty
            title="Nenhuma Bolsa Registrada"
            description="
            Nenhuma Bolsa Foi Encontrado com esses parâmetros de busca considere alterar os filtros ou a busca
            "
          />
        )}
        {page === 'inicio' && (
          <Empty
            title="Nenhuma Bolsa Registrada"
            description="Nenhuma de Bolsa foi encontrada"
          />
        )}
        {page === 'favoritos' && (
          <>
            <Empty
              title="Nenhum Produto Adicionado as Favoritos"
              description=""
            />
            <p className="text-center">
              Visite nossa página de
              <Link href={NextRoutes.products} className="text-primary">
                {' '}
                produtos{' '}
              </Link>
              e adicione <br /> aos favoritos os produtos que você mais gostou
              😊
            </p>
          </>
        )}
      </>
    )
  }

  if (produtos.length) {
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center my-4 mx-2">
          {produtos.map((produto: ProdutoEntity, index: number) => (
            <ProductCard
              id={produto?.id ? produto.id : ''}
              key={index}
              slug={
                produto.attributes?.slug ? produto.attributes.slug : 'bolsa'
              }
              name={
                produto.attributes?.nome
                  ? produto.attributes.nome
                  : 'Sem Nome por Enquanto'
              }
              price={
                produto.attributes?.preco ? Number(produto.attributes.preco) : 0
              }
              img={{
                src: getImageUrl(
                  produto.attributes?.imagem_destaque?.data?.attributes?.formats
                    .small.url
                ),
                overImgSrc: getImageUrl(
                  produto.attributes?.galeria?.data[1]?.attributes?.formats
                    .small.url
                ),
                width:
                  produto.attributes?.imagem_destaque?.data?.attributes?.formats
                    .small.width,
                height:
                  produto.attributes?.imagem_destaque?.data?.attributes?.formats
                    .small.height,
                alt:
                  produto.attributes?.imagem_destaque?.data?.attributes
                    ?.caption || ''
              }}
            />
          ))}
        </div>

        {pagination.total !== produtos.length && (
          <div className="flex items-center justify-center">
            <Button loading={loading} disabled={loading} onClick={loadMore}>
              Carregar Mais
            </Button>
          </div>
        )}
      </>
    )
  }
}

export default ProductList
