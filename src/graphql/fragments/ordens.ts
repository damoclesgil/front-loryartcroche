import { gql } from '@apollo/client/core'
import { ProdutoFragment } from './produto'

export const OrdemPagamentoFragment = gql`
  fragment OrdemPagamentoFragment on Ordem {
    card_brand
    card_last4
    payment_intent_id
    createdAt
    updatedAt
    total_in_cents
    produtos {
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
