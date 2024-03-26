import { useCallback, useEffect, useState } from 'react'
import SearchInput from '../SearchInput'
import { usePathname } from 'next/navigation'
import { PRODUCTS_DATA } from '@/hooks/use-products/products-data'
import Image from 'next/image'
import Link from 'next/link'
import { NextRoutes } from '@/utils/constant'

const SearchProducts = () => {
  const pathname = usePathname()
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
    <>
      <SearchInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        isHandling={false}
      />
      {inputValue.length > 0 ? (
        <div className="bg-black text-white p-2 absolute w-full">
          {filteredList.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              slug={product.slug}
              img={product.img}
              name={product.name}
              isProductPage={pathname.includes(`${NextRoutes.products}/`)}
              price={product.price}
            />
          ))}
        </div>
      ) : (
        ''
      )}
    </>
  )
}

export type ProductItemProps = {
  id: string
  slug: string
  name: string
  img?: string
  price?: number
  isProductPage?: boolean
}

const ProductItem = ({
  id,
  slug,
  name,
  img,
  isProductPage = false
}: ProductItemProps) => (
  <div className="bg-product dark:bg-black relative flex w-full">
    <Link
      href={{
        pathname: `${isProductPage ? '' : 'produtos/'}${slug}`,
        query: { id: id }
      }}
    >
      <div className="flex items-center">
        <Image
          className="object-contain object-center"
          src={`/img/products/${img}`}
          alt={name}
          width={50}
          height={50}
          loading="lazy"
        />
        <p className="dark:text-white ml-2">{name}</p>
        <p>{isProductPage}</p>
      </div>
    </Link>
  </div>
)

export default SearchProducts
