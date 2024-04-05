import { ProdutoEntity, ProdutoEntityResponse } from '@/graphql/types'
import { getImageUrl } from '@/utils/getImageUrl'

export const cartMapper = (produtos: ProdutoEntity[] | undefined) => {
  return produtos
    ? produtos.map((produto) => ({
        id: produto.id,
        img: getImageUrl(
          produto.attributes?.imagem_destaque?.data?.attributes?.url
        ),
        name: produto.attributes?.nome,
        slug: produto.attributes?.slug,
        price: produto.attributes?.preco
      }))
    : []
}
