import { gql } from '@apollo/client'
import { ProdutoFragment } from '../fragments/produto'

export const QUERY_PRODUTO = gql`
  query getProduto($documentId: ID!) {
    produto(documentId: $documentId) {
      ...ProdutoFragment
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
    $status: PublicationStatus
  ) {
    produtos(
      filters: $filters
      pagination: $pagination
      sort: $sort
      status: $status
    ) {
      ...ProdutoFragment
    }
  }

  ${ProdutoFragment}
`
