'use client'

import {
  useCallback,
  useContext,
  createContext,
  useEffect,
  useState
} from 'react'
import { PRODUCTS_DATA } from './products-data'
// import SearchInput from '@/components/SearchInput'

export type GalleryItem = {
  src: string
  label: string
}

export type ProductItem = {
  id: string
  img?: string
  name: string
  slug: string
  price?: number
  detalhes?: string
  gallery?: GalleryItem[]
}

export type ProductProviderProps = {
  children: React.ReactNode
}

export type ProductContextData = {
  products: ProductItem[]
  inputValue: string
}

export const ProductsContextDefaultValues = {
  products: [],
  inputValue: ''
}

export const ProductContext = createContext<ProductContextData>(
  ProductsContextDefaultValues
)

const ProductsProvider = ({ children }: ProductProviderProps) => {
  const [inputValue, setInputValue] = useState<string>('')
  const [initialList] = useState(PRODUCTS_DATA)
  const [filteredList, setFilteredList] = useState(PRODUCTS_DATA)

  // Search Handler
  const searchHandler = useCallback(() => {
    const filteredData = initialList.filter((product) => {
      return product.name.toLowerCase().includes(inputValue.toLowerCase())
    })
    setFilteredList(filteredData)
  }, [initialList, inputValue])

  // const setProductValue = (val: string) => {
  //   setInputValue(val)
  // }

  // EFFECT: Search Handler
  useEffect(() => {
    // Debounce search handler
    const timer = setTimeout(() => {
      searchHandler()
    }, 500)

    // Cleanup
    return () => {
      clearTimeout(timer)
    }
  }, [searchHandler])

  return (
    <ProductContext.Provider
      value={{
        products: initialList,
        inputValue: inputValue
      }}
    >
      {children}
    </ProductContext.Provider>
  )
  // return (
  //   <div>
  //     <SearchInput inputValue={inputValue} setInputValue={setInputValue} />
  //     {JSON.stringify(filteredList)}
  //   </div>
  // )
}

// export default UseProducts

const useProducts = () => useContext(ProductContext)

export { ProductsProvider, useProducts }
