import { gql } from '@apollo/client'

export const ProdutoFragment = gql`
  fragment ProdutoFragment on Produto {
    documentId
    nome
    cor
    preco
    nomeCor
    slug
    descricao
    imagem_destaque {
      url
      caption
      alternativeText
      formats
    }
    galeria {
      alternativeText
      url
      name
      width
      height
      formats
    }
    produtosReferentes {
      documentId
      cor
      nomeCor
      slug
    }
  }
`
