import { createContext, useContext, useEffect, useState } from 'react'
import { ProductCardProps } from '@/components/ProductCard'

export type ProdutoType = {
  nome: string
  slug: string
  descricao: string
  preco: number
  imagem_destaque: {
    data: {
      attributes: {
        url: string
      }
    }
  }
  galeria: {
    data: {
      id: string
      attributes: {
        url: string
        name: string
      }
    }
  }
}

export type UserType = {
  data: {
    id: string
    attributes: {
      username: string
    }
  }
}

export type FavoritosType = {
  id: string
  attributes: {
    produtos: {
      data: {
        attributes: ProdutoType
      }
    }
  }
}

export type WishlistContextData = {
  items: ProductCardProps[]
  isInWishlist: (id: string) => boolean
  addToWishlist: (id: string) => void
  removeFromWishlist: (id: string) => void
  loading: boolean
}

export const WishlistContextDefaultValues = {
  items: [],
  isInWishlist: () => false,
  addToWishlist: () => null,
  removeFromWishlist: () => null,
  loading: false
}

export const WishlistContext = createContext<WishlistContextData>(
  WishlistContextDefaultValues
)

export type WishlistProviderProps = {
  children: React.ReactNode
}

const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const isInWishlist = (id: string) => false
  const addToWishlist = (id: string) => {}
  const removeFromWishlist = (id: string) => {}
  const [wishlistItems, setWishlistItems] = useState<FavoritosType[]>([])

  // console.log(wishlistItems[0].attributes.produtos.data)
  return (
    <WishlistContext.Provider
      value={{
        // items,
        isInWishlist,
        addToWishlist,
        removeFromWishlist
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

// useEffect(() => {
//   // setWishlistItems(data?.wishlists[0]?.games || [])
//   setWishlistItems(data?.favorito[0].attributes.produtos.data)
//   setWishlistId(data?.wishlists[0]?.id)
// }, [data])

const useWishlist = () => useContext(WishlistContext)

export { WishlistProvider, useWishlist }
