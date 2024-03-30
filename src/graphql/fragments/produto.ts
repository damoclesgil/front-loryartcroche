import { gql } from '@apollo/client'

export const ProdutoFragment = gql`
  fragment ProdutoFragment on Produto {
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
`
