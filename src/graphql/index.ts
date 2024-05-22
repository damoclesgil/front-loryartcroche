// Server Side Mutations and Querys
import {
  GetProdutoDocument,
  MutationUpdateFavoritoDocument,
  Produto
} from '@/graphql/types'
import { auth } from '@/services/auth'
import { getClient } from '@/utils/apollo/apollo'
import { normalize } from '@/utils/mappers'

// Demo Ecommerce para ver e estudoar https://github.com/vercel/commerce/tree/main

// export fetchItems

export async function getProduto(produtoId: string) {
  const { data, error, loading } = await getClient().query({
    query: GetProdutoDocument,
    // context: {
    //   headers: session ? `Bearer ${session.jwt}` : ``
    // },
    variables: {
      produtoId: produtoId
    },
    fetchPolicy: 'no-cache'
  })

  const produto = normalize(data?.produto) as Produto | null

  return {
    produto,
    error,
    loading
  }
}

export const updateFavorito = async () => {
  const session = await auth()

  const [updateFavorito, { loading: updatingFavorito }] =
    await getClient().mutate({
      mutation: MutationUpdateFavoritoDocument,
      variables: {
        filters: {
          user: {
            email: {
              contains: session?.user?.email
            }
          }
        }
      }
    })

  return {
    updateFavorito,
    updatingFavorito
  }
}
