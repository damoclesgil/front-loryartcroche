'use client'

import ProductCard from '@/components/ProductCard'
import { getImageUrl } from '@/utils/getImageUrl'
import Empty from '../Empty'
import { Button } from '../ui/button'
import SkeletonEffectProducts from './SkeletonEffectProducts'
import { Pagination, Produto } from '@/graphql/types'
// import { ApolloErrorOptions } from '@apollo/client/errors'
// import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr'

export type ProductListProps = {
  produtos: any[]
  loading: boolean
  hasFilters?: boolean
  pagination: Pagination
  loadMore: () => void
  error: any | undefined
}

const ProductList = ({
  produtos,
  loading,
  pagination,
  loadMore,
  hasFilters = false,
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
        {hasFilters ? (
          <Empty
            title="Nenhuma Bolsa Registrada"
            description="
            Nenhuma Bolsa Foi Encontrado com esses parâmetros de busca considere alterar os filtros ou a busca
            "
          />
        ) : (
          <Empty
            title="Nenhuma Bolsa Registrada"
            description="Nenhuma de Bolsa foi encontrada"
          />
        )}
      </>
    )
  }

  if (produtos.length) {
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center my-4 mx-2">
          {produtos.map((produto: Produto, index: number) => (
            <ProductCard
              id={produto?.documentId ? produto.documentId : ''}
              key={index}
              slug={produto?.slug ? produto.slug : 'bolsa'}
              name={produto?.nome ? produto.nome : 'Sem Nome por Enquanto'}
              price={produto?.preco ? Number(produto.preco) : 0}
              img={{
                src: getImageUrl(produto?.imagem_destaque?.formats.small.url),
                width: produto.imagem_destaque?.formats.small.width,
                height: produto.imagem_destaque?.formats.small.height,
                alt: produto.imagem_destaque?.caption || ''
              }}
            />
          ))}
        </div>
        {/* 
        {pagination.total !== produtos.length && (
          <div className="flex items-center justify-center">
            <Button loading={loading} disabled={loading} onClick={loadMore}>
              Carregar Mais
            </Button>
          </div>
        )} */}
      </>
    )
  }
}

export default ProductList
