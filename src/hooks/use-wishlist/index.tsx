import { createContext, useContext } from 'react'

export const WishlistContextDefaultValues = {
  items: [],
  isInWishlist: () => false,
  addToWishlist: () => null,
  removeFromWishlist: () => null,
  loading: false
}

export type ProductCardProps = {
  id: string
  slug: string
  nome: string
  img: string
  price: number
}

export type WishlistContextData = {
  items: ProductCardProps[]
  isInWishlist: (id: string) => boolean
  addToWishlist: (id: string) => void
  removeFromWishlist: (id: string) => void
  loading: boolean
}

export const WishlistContext = createContext<WishlistContextData>(
  WishlistContextDefaultValues
)

export type WishlistProviderProps = {
  children: React.ReactNode
}

const useWishlist = () => useContext(WishlistContext)

export { useWishlist }
