type Format = {
  large: object
  small: object
  medium: object
  thumbnail: object
}

export type UploadFile = {
  documentId: string | undefined
  url: string
  name?: string
  width?: number
  height?: number
  alternativeText?: string | null
  caption?: string | null
  formats: Format
}

type ProdutoReferente = {
  documentId: string
  cor: string | null
  nomeCor: string
  slug: string
}

export type Produto = {
  documentId: string
  nome: string
  slug: string
  descricao: string
  preco: number
  imagem_destaque: UploadFile
  galeria: UploadFile[]
  cor: string
  nomeCor: string
  produtosReferentes: ProdutoReferente[]
}
