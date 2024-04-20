'use client'

import ProductCard from '@/components/ProductCard'
import {
  // GetProdutosDocument,
  // ProdutoEntity,
  useGetProdutosQuery
  // useGetProdutosSuspenseQuery
} from '@/graphql/types'
import { getImageUrl } from '@/utils/getImageUrl'
import Empty from '../Empty'
import { Button } from '../ui/button'
import SkeletonEffectProducts from './SkeletonEffectProducts'
// import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr'

const ProductList = () => {
  // const { data, error, fetchMore } = useGetProdutosSuspenseQuery({
  //   variables: {
  //     sort: ['id:ASC']
  //   }
  // })

  // const { data, error, fetchMore } = useSuspenseQuery(GetProdutosDocument, {
  //   variables: { sort: ['id:ASC'] }
  // })

  const { data, error, loading, fetchMore, refetch } = useGetProdutosQuery({
    variables: {
      // filters: {
      //   id:
      // },
      sort: ['id:ASC'],
      pagination: {
        pageSize: 10,
        page: 1
      }
    }
    // fetchPolicy: 'no-cache'
    // nextFetchPolicy: 'no-cache'
  })

  const handleShowMore = () => {
    fetchMore({
      variables: {
        sort: ['id:ASC'],
        pagination: {
          pageSize: data?.produtos?.meta.pagination.pageSize,
          page: data?.produtos?.meta.pagination.page
            ? data?.produtos?.meta.pagination.page + 1
            : 1
        }
      }

      // updateQuery: (previousResult, { fetchMoreResult }) => {
      //   console.log('previousResult', previousResult)
      //   console.log('fetchMore', fetchMoreResult)
      //   return {
      //     produtos: {
      //       data: [
      //         ...previousResult.produtos.data,
      //         ...fetchMoreResult.produtos.data
      //       ]
      //     }
      //   }
      // }
    })
  }

  if (error) {
    throw error
  }

  if (loading) {
    return <SkeletonEffectProducts qtdLoadingItems={4} />
    // return <Loader />
  }

  if (data?.produtos?.data.length === 0) {
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
        {/* <div className="flex items-center justify-center">
          <p>total: {data.produtos.meta.pagination.total}</p>
          <p>products Length: {data.produtos.data.length}</p>
        </div> */}
        {data.produtos.meta.pagination.total !== data.produtos.data.length && (
          <div className="flex items-center justify-center">
            <Button
              loading={loading}
              disabled={loading}
              onClick={handleShowMore}
            >
              Carregar Mais
            </Button>
          </div>
        )}
      </>
    )
  }
}

export default ProductList
