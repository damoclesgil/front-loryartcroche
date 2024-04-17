import {
  Ordem,
  OrdemEntity,
  OrdensDePagamentosQuery,
  ProdutoEntity,
  ProdutoEntityResponse
} from '@/graphql/types'
import { getImageUrl } from '@/utils/getImageUrl'
import formatPrice from '../format-price'

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

// ordensComprasMapper(dataOrdensPagamento)
export const ordensComprasMapper = (
  dataOrdensPagamento: OrdensDePagamentosQuery
) => {
  return dataOrdensPagamento.ordens?.data.map
    ? dataOrdensPagamento.ordens?.data.map((ordem) => {
        return {
          id: ordem.id,
          bandeiraCartaoCredito: ordem.attributes?.card_brand,
          img: ordem.attributes?.card_brand
            ? `/img/cards/${ordem.attributes?.card_brand}.png`
            : null,
          ultimoDigitosCartaoCredito: ordem.attributes?.card_last4
            ? `**** **** **** ${ordem.attributes?.card_last4}`
            : 'Produto Gratuito',
          itencaoPagamentoId: ordem.attributes?.payment_intent_id,
          totalEmCentavos: ordem.attributes?.total_in_cents,
          dataCompra: `Comprado em ${new Intl.DateTimeFormat('pt-BR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
          }).format(new Date(ordem.attributes?.createdAt))}`,
          produtos: ordem.attributes?.produtos?.data.map((produto) => ({
            id: produto.id,
            nome: produto.attributes?.nome,
            img: `${getImageUrl(produto.attributes?.imagem_destaque?.data?.attributes?.url)}`,
            preco: `${formatPrice(Number(produto.attributes?.preco))}`
          }))
        }
      })
    : []
}
