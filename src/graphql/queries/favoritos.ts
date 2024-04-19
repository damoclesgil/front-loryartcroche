import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { ProdutoFragment } from '../fragments/produto'
import { GetFavoritosQuery, GetFavoritosQueryVariables } from '@/graphql/types'

export const GET_FAVORITOS = gql`
  query getFavoritos($filters: FavoritoFiltersInput) {
    favoritos(filters: $filters) {
      data {
        id
        attributes {
          produtos {
            data {
              id
              attributes {
                ...ProdutoFragment
              }
            }
          }
        }
      }
      meta {
        pagination {
          total
        }
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
