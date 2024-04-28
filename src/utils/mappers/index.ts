import { OrdensDePagamentosQuery, Produto } from '@/graphql/types'
import { getImageUrl } from '@/utils/getImageUrl'
import formatPrice from '../format-price'
import { getStorageItem } from '../localStorage'
import { CART_KEY, cartItemsLocalStorageProps } from '@/hooks/use-cart'
import { formatDateLong } from '../common/formatDate'

export const cartMapper = (produtos: Produto[]) => {
  const cartItems = getStorageItem(CART_KEY)

  return produtos
    ? produtos.map((produto: Produto) => ({
        id: produto.documentId,
        img: getImageUrl(produto.imagem_destaque?.url),
        name: produto?.nome,
        slug: produto?.slug,
        price: produto?.preco,
        qty:
          cartItems.find(
            (item: cartItemsLocalStorageProps) => item.id === produto.documentId
          ).qty || 1
      }))
    : []
}

// ordensComprasMapper(dataOrdensPagamento)
export const ordensComprasMapper = (
  dataOrdensPagamento: OrdensDePagamentosQuery
) => {
  return dataOrdensPagamento.ordens.map
    ? dataOrdensPagamento.ordens?.map((ordem) => {
        return {
          id: ordem?.documentId,
          bandeiraCartaoCredito: ordem?.card_brand,
          img: ordem?.card_brand ? `/img/cards/${ordem?.card_brand}.png` : null,
          ultimoDigitosCartaoCredito: ordem?.card_last4
            ? `**** **** **** ${ordem?.card_last4}`
            : 'Produto Gratuito',
          itencaoPagamentoId: ordem?.payment_intent_id,
          totalEmCentavos: ordem?.total_in_cents,
          dataCompra: `Comprado em ${formatDateLong(ordem?.createdAt)}`,
          produtos: ordem?.produtos?.map((produto) => ({
            id: produto?.documentId,
            nome: produto?.nome,
            img: `${getImageUrl(produto?.imagem_destaque?.formats?.small.url)}`,
            preco: `${formatPrice(Number(produto?.preco))}`
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
