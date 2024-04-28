'use client'

import ProductCard from '@/components/ProductCard'
import { getImageUrl } from '@/utils/getImageUrl'
import { Produto } from '@/graphql/types'
import { Button } from '@/components/ui/button'

export type ProductListProps = {
  produtos: Produto[]
  loadMore: () => void
}

const ProductList = ({ produtos, loadMore }: ProductListProps) => {
  if (produtos.length) {
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center my-4 mx-2">
          {produtos.map((produto, index: number) => (
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

        {produtos.length && (
          <div className="flex items-center justify-center">
            <Button onClick={loadMore}>Carregar Mais</Button>
          </div>
        )}
      </>
    )
  }
}

export default ProductList
