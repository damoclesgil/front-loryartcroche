import { gql } from '@apollo/client/core'
import { OrdemPagamentoFragment } from '../fragments/ordens'

export const GET_ORDENS_PAGAMENTO = gql`
  query ordensDePagamentos {
    ordens {
      data {
        id
        attributes {
          ...OrdemPagamentoFragment
        }
      }
    }
  }
  ${OrdemPagamentoFragment}
`
