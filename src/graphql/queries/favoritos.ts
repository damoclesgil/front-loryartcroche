import { gql } from '@apollo/client'
import { ProdutoFragment } from '../fragments/produto'

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
