// import { gql } from '@apollo/client'
// import { gql } from  './gql/gql'
// import { graphql } from './gql/gql';
// import { graphql } from '../generated'

export const QUERY_PRODUTOS = /* GraphQL */ `
  query produtos {
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
`

// export const QUERY_PRODUTOS = graphql(/* GraphQL */ `
//   query QueryProdutos {
//     produtos {
//       data {
//         id
//         attributes {
//           nome
//           slug
//           descricao
//           preco
//           imagem_destaque {
//             data {
//               attributes {
//                 url
//               }
//             }
//           }
//           galeria {
//             data {
//               attributes {
//                 url
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `)

// export const QUERY_PRODUTO = graphql(/* GraphQL */ `
//   query getProduto($produtoId: ID) {
//     produto(id: $produtoId) {
//       data {
//         id
//         attributes {
//           nome
//           slug
//           descricao
//           preco
//           imagem_destaque {
//             data {
//               attributes {
//                 url
//               }
//             }
//           }
//           galeria {
//             data {
//               attributes {
//                 url
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `)
