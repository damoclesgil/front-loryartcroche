import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { ProdutoFragment } from '../fragments/produto'
import { GetFavoritosQuery, GetFavoritosQueryVariables } from '@/graphql/types'

export const GET_FAVORITOS = gql`
  query getFavoritos(
    $filters: FavoritoFiltersInput
    $pagination: PaginationArg
    $sort: [String]
  ) {
    favoritos(filters: $filters, pagination: $pagination, sort: $sort) {
      createdAt
      documentId
      produtos {
        ...ProdutoFragment
      }
      user {
        documentId
        email
      }
    }
  }
  ${ProdutoFragment}
`

export function useQueryFavoritos(
  options?: QueryHookOptions<GetFavoritosQuery, GetFavoritosQueryVariables>
) {
  return useQuery<GetFavoritosQuery, GetFavoritosQueryVariables>(
    GET_FAVORITOS,
    options
  )
}
