import { gql, QueryHookOptions, useQuery } from '@apollo/client'
import { ProdutoFragment } from '../fragments/produto'
import {
  GetFavoritoQueryVariables,
  GetFavoritosQuery
} from '../generated/graphql'

// export type ProdutoType = {
//   nome: string
//   slug: string
//   descricao: string
//   preco: number
//   imagem_destaque: {
//     data: {
//       attributes: {
//         url: string
//       }
//     }
//   }
//   galeria: {
//     data: {
//       id: string
//       attributes: {
//         url: string
//         name: string
//       }
//     }
//   }
// }

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

export const GET_FAVORITO = gql`
  query getFavorito($id: ID!) {
    favorito(id: $id) {
      data {
        id
        attributes {
          produtos {
            data {
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

export const GET_FAVORITOS = gql`
  query getFavoritos($filters: FavoritoFiltersInput) {
    favoritos(filters: $filters) {
      data {
        id
        attributes {
          produtos {
            data {
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
  options?: QueryHookOptions<GetFavoritosQuery, GetFavoritoQueryVariables>
) {
  return useQuery<GetFavoritosQuery, GetFavoritoQueryVariables>(
    GET_FAVORITOS,
    options
  )
}
