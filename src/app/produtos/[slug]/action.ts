// Server Side Actions

import { normalize } from '@/utils/mappers'

// Demo Ecommerce para ver e estudoar https://github.com/vercel/commerce/tree/main
export async function getProduto(
  produtoId: string
): Promise<Product | undefined> {
  const res = await shopifyFetch<ShopifyProductOperation>({
    query: getProductQuery,
    tags: [TAGS.products],
    variables: {
      handle
    }
  })

  const { data, error } = await getClient().query({
    query: GetProdutoDocument,
    // context: {
    //   headers: session ? `Bearer ${session.jwt}` : ``
    // },
    variables: {
      produtoId: produtoId
    },
    fetchPolicy: 'no-cache'
  })

  const produto = normalize(data?.produto) as Produto | null

  return {
    produto
  }
}
