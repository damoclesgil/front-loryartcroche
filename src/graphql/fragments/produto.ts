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
          alternativeText
          caption
          formats
        }
      }
    }
    galeria {
      data {
        id
        attributes {
          url
          name
          width
          height
          formats
        }
      }
    }
    cor
    nomeCor
    produtosReferentes {
      data {
        id
        attributes {
          cor
          nomeCor
          slug
        }
      }
    }
  }
`
