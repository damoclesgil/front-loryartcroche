// import { gql } from '@apollo/client'
// import { graphql } from './gql/gql';
import { graphql } from '../generated'

export const QUERY_PRODUTOS = graphql(/* GraphQL */ `
  query QueryProdutos {
    produtos {
      data {
        id
        attributes {
          nome
          slug
          descricao
          preco
          imagem_destaque {
            data {
              attributes {
                url
              }
            }
          }
          galeria {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`)
