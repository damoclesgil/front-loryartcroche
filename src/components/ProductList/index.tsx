'use client'

import { useQuery } from '@apollo/client'
import ProductCard from '@/components/ProductCard'
// import { Produto, ProdutoEntity, ProdutosDocument } from '@/graphql/generated/graphql'
import { QUERY_PRODUTOS } from '@/graphql/queries/produtos'
import { ProdutoType } from '@/types/produto.type'

const ProductList = () => {
  const { data, error, loading } = useQuery(QUERY_PRODUTOS)

  if (error) {
    throw error
  }

  if (loading) {
    return (
      <>
        <p>Carregando Produtos...</p>
      </>
    )
  }

  if (data?.produtos?.data.length === 0) {
    return (
      <>
        <p>Nenhum Produto Cadastrado</p>
      </>
    )
  }
  if (data?.produtos?.data.length) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center my-4 mx-2">
        {data?.produtos?.data.map((produto: ProdutoType, index: number) => (
          <ProductCard
            id={produto?.id ? produto.id : ''}
            key={index}
            slug={produto.attributes?.slug ? produto.attributes.slug : 'bolsa'}
            name={
              produto.attributes?.nome
                ? produto.attributes.nome
                : 'Sem Nome por Enquanto'
            }
            price={
              produto.attributes?.preco ? Number(produto.attributes.preco) : 0
            }
            img={`${produto.attributes?.imagem_destaque?.data?.attributes!.url}`}
          />
        ))}
      </div>
    )
  }
}

export default ProductList
