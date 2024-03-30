import { gql } from '@apollo/client'
import { ProdutoFragment } from '../fragments/produto'

export const MUTATION_UPDATE_FAVORITO = gql`
  mutation mutationUpdateFavorito($id: ID!, $data: FavoritoInput!) {
    updateFavorito(id: $id, data: $data) {
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
          user {
            data {
              id
            }
          }
        }
      }
    }
  }
  ${ProdutoFragment}
`
/**
{
  "data": {
    "produtos": [2],
    "user": 2
  }
}
*/
export const MUTATION_CREATE_FAVORITO = gql`
  mutation mutationCreateFavorito($data: FavoritoInput!) {
    createFavorito(data: $data) {
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
          user {
            data {
              id
            }
          }
        }
      }
    }
  }
  ${ProdutoFragment}
`

/* 
{ 
 "id": 28,
 "data": { "produtos": [2], "user": 2 }
}
*/
