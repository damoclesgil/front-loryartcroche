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
// "sort": ["preco"]
export const QUERY_PRODUTOS = gql`
  query getProdutos(
    $filters: ProdutoFiltersInput
    $pagination: PaginationArg
    $sort: [String]
  ) {
    produtos(filters: $filters, pagination: $pagination, sort: $sort) {
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
