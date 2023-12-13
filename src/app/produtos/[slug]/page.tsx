'use client'

// import ProductCard from '@/components/ProductCard'
import { mockedProducts } from '@/components/ProductList/mockedProducts'
import Tabs from '@/components/Tabs'
import Image from 'next/image'
// import { useSearchParams } from 'next/navigation'

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
  const currentProduct = mockedProducts.find((product) => product.slug === slug)
  console.log(currentProduct)
  // const queryParams = useSearchParams()
  // console.log(queryParams.get('id'))

  // <ProductCard {...currentProduct} />
  return (
    <>
      {currentProduct && (
        <>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <div className="w-100 h-100">
                <Image
                  className="object-cover"
                  src={`/img/products/${currentProduct.img}`}
                  alt={currentProduct.name}
                  width={580}
                  height={580}
                  loading="lazy"
                />
              </div>
              <p>Galeria de imagens?</p>
              <p>Favoritar</p>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-lg">{currentProduct.name}</p>
              <p>Adicionar ao carrinho?</p>
              <p>Encomendar?</p>
              <p>Compartilhar?</p>
            </div>
          </div>
          <div>
            <Tabs contentFirstTab={<p>detalhes</p>} />
          </div>
        </>
      )}
    </>
  )
}
