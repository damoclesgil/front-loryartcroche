// 'use client'

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
          {produtos.map((produto: any, index: number) => (
            <ProductCard
              documentId={produto?.documentId ? produto.documentId : ''}
              key={index}
              slug={produto.slug ? produto.slug : 'bolsa'}
              name={produto.nome ? produto.nome : 'Sem Nome por Enquanto'}
              price={produto.preco ? Number(produto.preco) : 0}
              img={{
                src: getImageUrl(produto?.imagem_destaque?.formats.small.url),
                overImgSrc: getImageUrl(produto.galeria[1]?.formats.small.url),
                width: produto?.imagem_destaque?.formats.small.width,
                height: produto?.imagem_destaque?.formats.small.height,
                alt: produto.imagem_destaque?.caption || ''
              }}
            />
          ))}
        </div>

        {/* !== produtos.length */}
        {pagination.total === produtos.length && (
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
