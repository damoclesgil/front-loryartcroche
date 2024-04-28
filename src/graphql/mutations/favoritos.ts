import { gql } from '@apollo/client'
import { ProdutoFragment } from '../fragments/produto'

export const MUTATION_UPDATE_FAVORITO = gql`
  mutation UpdateFavorito($documentId: ID!, $data: FavoritoInput!) {
    updateFavorito(documentId: $documentId, data: $data) {
      documentId
      produtos {
        documentId
      }
      user {
        documentId
        username
      }
    }
  }
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
  mutation MutationCreateFavorito($data: FavoritoInput!) {
    createFavorito(data: $data) {
      documentId
      produtos {
        ...ProdutoFragment
      }
      user {
        documentId
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
