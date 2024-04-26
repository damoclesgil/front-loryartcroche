import {
  Ordem,
  OrdemEntity,
  OrdensDePagamentosQuery,
  ProdutoEntity,
  ProdutoEntityResponse
} from '@/graphql/types'
import { getImageUrl } from '@/utils/getImageUrl'
import formatPrice from '../format-price'
import { getStorageItem } from '../localStorage'
import { CART_KEY, cartItemsLocalStorageProps } from '@/hooks/use-cart'
import { formatDateLong } from '../common/formatDate'

export const cartMapper = (produtos: ProdutoEntity[]) => {
  const cartItems = getStorageItem(CART_KEY)

  return produtos
    ? produtos.map((produto) => ({
        id: produto.id,
        img: getImageUrl(
          produto.attributes?.imagem_destaque?.data?.attributes?.url
        ),
        name: produto.attributes?.nome,
        slug: produto.attributes?.slug,
        price: produto.attributes?.preco,
        qty:
          cartItems.find(
            (item: cartItemsLocalStorageProps) => item.id === produto.id
          ).qty || 1
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
          dataCompra: `Comprado em ${formatDateLong(ordem.attributes?.createdAt)}`,
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

export const normalize = (data: any) => {
  const isObject = (data: any) =>
    Object.prototype.toString.call(data) === '[object Object]'
  const isArray = (data: any) =>
    Object.prototype.toString.call(data) === '[object Array]'

  const flatten = (data: any) => {
    if (!data.attributes) return data

    return {
      id: data.id,
      ...data.attributes
    }
  }

  if (isArray(data)) {
    return data.map((item: any) => normalize(item))
  }

  if (isObject(data)) {
    if (isArray(data.data)) {
      data = [...data.data]
    } else if (isObject(data.data)) {
      data = flatten({ ...data.data })
    } else if (data.data === null) {
      data = null
    } else {
      data = flatten(data)
    }

    for (const key in data) {
      data[key] = normalize(data[key])
    }

    return data
  }

  return data
}
