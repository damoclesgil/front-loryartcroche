'use client'

import { useQuery } from '@apollo/client'
import ProductCard from '@/components/ProductCard'
import { QUERY_PRODUTOS } from '@/graphql/queries/produtos'
import { ProdutoEntity, useGetProdutosQuery } from '@/graphql/types'
import { getImageUrl } from '@/utils/getImageUrl'
import Loader from '@/components/Loader'
import Empty from '../Empty'
import { Button } from '../ui/button'

const ProductList = () => {
  const { data, error, loading, fetchMore } = useGetProdutosQuery({
    variables: {
      // pagination: {
      //   pageSize: 1
      //   // limit: 1
      // }
    },
    fetchPolicy: 'no-cache'
    // nextFetchPolicy: 'cache-first'
  })

  const handleShowMore = () => {
    fetchMore({
      variables: {
        pagination: {
          pageSize: 2
          // page
          // limit: 2
        }
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        console.log(fetchMoreResult.produtos.data)
        return {
          produtos: {
            data: [
              ...previousResult.produtos.data,
              ...fetchMoreResult.produtos.data
            ]
          }
        }
      }
    })
  }

  if (error) {
    throw error
  }

  if (loading) {
    return <Loader />
  }

  if (data?.produtos?.data.length === 0) {
    console.log(data?.produtos?.data)
    return (
      <>
        <Empty
          title="Nenhuma Bolsa Registrada"
          description="Nenhuma de Bolsa foi encontrada"
        />
      </>
    )
  }
  if (data?.produtos?.data.length) {
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center my-4 mx-2">
          {data?.produtos?.data.map((produto, index: number) => (
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
              img={getImageUrl(
                produto.attributes?.imagem_destaque?.data?.attributes!.url
              )}
            />
          ))}
        </div>

        <Button onClick={handleShowMore}>Carregar Mais</Button>
      </>
    )
  }
}

export default ProductList
