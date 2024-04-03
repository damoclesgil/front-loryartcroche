export type ProdutoType = {
  id: string
  attributes: {
    nome: string
    slug: string
    descricao: string
    preco: number
    imagem_destaque: {
      data: {
        attributes: {
          url: string
        }
      }
    }
    galeria: {
      data: {
        id: string
        attributes: {
          url: string
          name: string
        }
      }
    }
  }
}
