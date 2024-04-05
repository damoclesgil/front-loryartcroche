import { gql } from '@apollo/client'
import { ProdutoFragment } from '../fragments/produto'

export const QUERY_PRODUTO = gql`
  query getProduto($produtoId: ID) {
    produto(id: $produtoId) {
      data {
        id
        attributes {
          ...ProdutoFragment
        }
      }
    }
  }
  ${ProdutoFragment}
`

export const QUERY_PRODUTOS = gql`
  query getProdutos($filters: ProdutoFiltersInput) {
    produtos(filters: $filters) {
      data {
        id
        attributes {
          ...ProdutoFragment
        }
      }
    }
  }
  ${ProdutoFragment}
`
