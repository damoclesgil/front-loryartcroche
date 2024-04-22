import { useGetProdutosQuery } from '@/graphql/types'
import formatPrice from '@/utils/format-price'
import { getStorageItem, setStorageItem } from '@/utils/localStorage'
import { cartMapper } from '@/utils/mappers'
import { useContext, createContext, useEffect, useState } from 'react'

const CART_KEY = 'cartItems'

export type CartItem = {
  id: string
  img: string
  name: string
  slug: string
  qty: number
  price?: number
}

export type CartContextData = {
  items: CartItem[]
  quantity: number
  total: string
  isInCart: (id: string) => boolean
  addToCart: (id: string) => void // agora vai ter que receber o id e qty eu acho.
  incrementQuantity: (id: string) => void
  decrementQuantity: (id: string) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
  count: number
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
  count: 0,
  loading: false
}

export const CartContext = createContext<CartContextData>(
  CartContextDefaultValues
)

export type CartProviderProps = {
  children: React.ReactNode
}

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<any[]>([])
  const [count, setCount] = useState(0)
  const [items, setItems] = useState<any[]>([])

  const { data, loading } = useGetProdutosQuery({
    skip: !cartItems?.length,
    variables: {
      filters: {
        id: {
          in: cartItems
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

  const total = items?.reduce((acc, product) => {
    return acc + (Number(product?.price) ?? 0)
  }, 0)

  const isInCart = (id: string) => (id ? cartItems.includes(id) : false)

  const saveCart = (cartItems: string[]) => {
    setCartItems(cartItems)
    setStorageItem(CART_KEY, cartItems)
  }

  const addToCart = (id: string) => {
    //
    if (!isInCart(id)) {
      saveCart([...cartItems, id])
    }
  }

  const incrementQuantity = (id: string) => {
    const nextCounters = items.map((product) => {
      if (product.id === id) {
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
    const newCartItems = cartItems.filter((itemId: string) => itemId !== id)
    saveCart(newCartItems)
  }

  const clearCart = () => {
    saveCart([])
  }

  return (
    <CartContext.Provider
      value={{
        // @ts-ignore
        items: items,
        quantity: cartItems.length,
        total: formatPrice(total || 0),
        isInCart,
        incrementQuantity,
        decrementQuantity,
        addToCart,
        count: count,
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
