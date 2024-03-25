import { gql } from '@apollo/client'

export const QUERY_PRODUTO = gql`
  query getProduto($produtoId: ID) {
    produto(id: $produtoId) {
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
              id
              attributes {
                url
                name
              }
            }
          }
        }
      }
    }
  }
`

export const QUERY_PRODUTOS = gql`
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
