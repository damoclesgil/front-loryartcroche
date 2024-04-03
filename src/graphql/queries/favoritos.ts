import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { ProdutoFragment } from '../fragments/produto'
import {
  GetFavoritosQuery,
  GetFavoritosQueryVariables
} from '../generated/graphql'

// export type UserType = {
//   data: {
//     id: string
//     attributes: {
//       username: string
//     }
//   }
// }

// export type FavoritosType = {
//   id: string
//   attributes: {
//     produtos: {
//       data: {
//         attributes: ProdutoType
//       }
//     }
//   }
// }

// export const GET_FAVORITO = gql`
//   query getFavorito($id: ID!) {
//     favorito(id: $id) {
//       data {
//         id
//         attributes {
//           produtos {
//             data {
//               id
//               attributes {
//                 ...ProdutoFragment
//               }
//             }
//           }
//         }
//       }
//     }
//   }
//   ${ProdutoFragment}
// `

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
