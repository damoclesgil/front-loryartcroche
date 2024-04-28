import { gql } from '@apollo/client/core'
import { OrdemPagamentoFragment } from '../fragments/ordens'

export const GET_ORDENS_PAGAMENTO = gql`
  query ordensDePagamentos(
    $filters: OrdemFiltersInput
    $pagination: PaginationArg
    $sort: [String]
  ) {
    ordens(filters: $filters, pagination: $pagination, sort: $sort) {
      ...OrdemPagamentoFragment
    }
  }
  ${OrdemPagamentoFragment}
`
