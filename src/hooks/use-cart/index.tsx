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
  price?: number
}

export type CartContextData = {
  items: CartItem[]
  quantity: number
  total: string
  isInCart: (id: string) => boolean
  addToCart: (id: string) => void // agora vai ter que receber o id e qty eu acho.
  increment: () => void
  decrement: () => void
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
  increment: () => null,
  decrement: () => null,
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
  const [cartItems, setCartItems] = useState<string[]>([])
  const [count, setCount] = useState(0)

  // let data = []
  useEffect(() => {
    const data = getStorageItem(CART_KEY)

    if (data) {
      setCartItems(data)
    }
  }, [])
  // SE NÃO PASSAR NADA ELE VAI RODAR SÓ UMA VEZ "[]"

  const { data, loading } = useGetProdutosQuery({
    skip: !cartItems?.length,
    variables: {
      filters: {
        id: {
          in: cartItems
        }
      }
    }
  })

  const total = data?.produtos?.data?.reduce((acc, product) => {
    return acc + (Number(product.attributes?.preco) ?? 0)
  }, 0)

  const isInCart = (id: string) => (id ? cartItems.includes(id) : false)

  const saveCart = (cartItems: string[]) => {
    setCartItems(cartItems)
    setStorageItem(CART_KEY, cartItems)
  }

  const addToCart = (id: string) => {
    if (!isInCart(id)) {
      saveCart([...cartItems, id])
    }
  }

  const increment = () => {
    setCount(function (prevCount) {
      return (prevCount += 1)
    })
  }

  const decrement = () => {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1)
      } else {
        return (prevCount = 0)
      }
    })
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
        items: cartMapper(data?.produtos?.data),
        quantity: cartItems.length,
        total: formatPrice(total || 0),
        isInCart,
        increment,
        decrement,
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
