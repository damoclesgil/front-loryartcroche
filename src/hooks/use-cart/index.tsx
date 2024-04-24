import { useGetProdutosQuery } from '@/graphql/types'
import formatPrice from '@/utils/format-price'
import { getStorageItem, setStorageItem } from '@/utils/localStorage'
import { cartMapper } from '@/utils/mappers'
import { useContext, createContext, useEffect, useState } from 'react'

export const CART_KEY = 'cartItems'

export type CartItem = {
  id: string
  img: string
  name: string
  slug: string
  qty: number
  price?: number
}

export type MetodoPagamento =
  | 'Cartão de Crédito'
  | 'Boleto'
  | 'Pix'
  | 'Não Informado'

export type CartContextData = {
  items: CartItem[]
  quantity: number
  total: string
  isInCart: (id: string) => boolean
  addToCart: (id: string, qty: number) => void
  incrementQuantity: (id: string) => void
  decrementQuantity: (id: string) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
  loading: boolean
}

export const CartContextDefaultValues = {
  items: [],
  quantity: 0,
  total: 'R$ 0,00',
  isInCart: () => false,
  addToCart: () => null,
  incrementQuantity: () => null,
  decrementQuantity: () => null,
  removeFromCart: () => null,
  clearCart: () => null,
  loading: false
}

export const CartContext = createContext<CartContextData>(
  CartContextDefaultValues
)

export type CartProviderProps = {
  children: React.ReactNode
}

export type cartItemsLocalStorageProps = Pick<CartItem, 'id' | 'qty'>

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<cartItemsLocalStorageProps[]>([])
  const [items, setItems] = useState<any[]>([])

  const { data, loading } = useGetProdutosQuery({
    skip: !cartItems?.length,
    variables: {
      filters: {
        id: {
          in: cartItems.map((item) => item.id)
        }
      }
    },
    fetchPolicy: 'no-cache'
  })

  useEffect(() => {
    const idsProduct = getStorageItem(CART_KEY)
    if (data?.produtos?.data) {
      // @ts-ignore
      setItems(cartMapper(data?.produtos?.data))
    }
    if (idsProduct) {
      setCartItems(idsProduct)
    }
  }, [data])
  // SE NÃO PASSAR NADA ELE VAI RODAR SÓ UMA VEZ "[]"

  const totalPrice: number = items.reduce(
    (total, product) => total + product.price * product.qty,
    0
  )

  const isInCart = (id: string) =>
    id ? cartItems.map((cartItem) => cartItem.id).includes(id) : false

  const saveCart = (cartItems: cartItemsLocalStorageProps[]) => {
    setCartItems(cartItems)
    // @ts-ignore
    setStorageItem(CART_KEY, cartItems)
  }

  const addToCart = (id: string, qty: number) => {
    //

    if (!isInCart(id)) {
      saveCart([
        ...cartItems,
        {
          id: id,
          qty: qty
        }
      ])
    }
  }

  const incrementQuantity = (id: string) => {
    const nextCounters = items.map((product) => {
      if (product.id === id) {
        let cartIndex = cartItems.findIndex((cartItem) => cartItem.id === id)
        cartItems[cartIndex].qty = cartItems[cartIndex].qty + 1
        saveCart([...cartItems])
        return {
          ...product,
          qty: product.qty + 1
        }
      } else {
        return {
          ...product,
          qty: product.qty
        }
      }
    })
    setItems(nextCounters)
  }

  const decrementQuantity = (id: string) => {
    const nextCounters = items.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          qty: product.qty - 1
        }
      } else {
        return {
          ...product,
          qty: product.qty
        }
      }
    })
    setItems(nextCounters)
  }

  const removeFromCart = (id: string) => {
    const newCartItems = cartItems.filter(
      (item: cartItemsLocalStorageProps) => item.id !== id
    )
    const currentIndex = items.findIndex((item) => item.id === id)
    saveCart(newCartItems)
    if (currentIndex !== -1) {
      setItems([...items.filter((item, index) => index !== currentIndex)])
    }
  }

  const clearCart = () => {
    saveCart([])
  }

  return (
    <CartContext.Provider
      value={{
        items: items,
        quantity: cartItems.length,
        total: formatPrice(totalPrice || 0),
        isInCart,
        incrementQuantity,
        decrementQuantity,
        addToCart,
        removeFromCart,
        clearCart,
        loading
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
