import formatPrice from '@/utils/format-price'
import { getStorageItem, setStorageItem } from '@/utils/localStorage'
import { useContext, createContext, useEffect, useState } from 'react'

const CART_KEY = 'cartItems'

export type CartItem = {
  id: string
  img: string
  name: string
  slug: string
  price?: number
}

export type CartProviderProps = {
  children: React.ReactNode
}

export type CartContextData = {
  items: CartItem[]
  quantity: number
  total: string
  isInCart: (id: string) => boolean
  addToCart: (item: CartItem) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
  // loading: boolean
}

export const CartContextDefaultValues = {
  items: [],
  quantity: 0,
  total: 'R$ 0,00',
  isInCart: () => false,
  addToCart: () => null,
  removeFromCart: () => null,
  clearCart: () => null
  // loading: false
}

export const CartContext = createContext<CartContextData>(
  CartContextDefaultValues
)

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  // let data = []
  useEffect(() => {
    const data = getStorageItem(CART_KEY)

    if (data) {
      setCartItems(data)
    }
  }, [])

  let total = 0
  // let total = cartItems.reduce((acc))
  // const total = data?.reduce((acc, product) => {
  //   return acc + product
  // })

  const isInCart = (id: string) =>
    id ? cartItems.some((cartItem: CartItem) => cartItem.id === id) : false

  const saveCart = (cartItems: CartItem[]) => {
    setCartItems(cartItems)
    setStorageItem(CART_KEY, cartItems)
  }

  const getCartItems = () => {
    return cartItems
  }

  const addToCart = (cartItem: CartItem) => {
    if (!isInCart(cartItem.id)) {
      saveCart([...cartItems, cartItem])
    }
  }

  const removeFromCart = (id: string) => {
    const newCartItems = cartItems.filter(
      (cartItem: CartItem) => cartItem.id !== id
    )
    saveCart(newCartItems)
  }

  const clearCart = () => {
    saveCart([])
  }

  return (
    <CartContext.Provider
      value={{
        items: cartItems,
        quantity: cartItems.length,
        total: formatPrice(total || 0),
        isInCart,
        addToCart,
        // getCartItems,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
