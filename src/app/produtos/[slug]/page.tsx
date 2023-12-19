'use client'

// import ProductCard from '@/components/ProductCard'
import { mockedProducts } from '@/components/ProductList/mockedProducts'
import Image from 'next/image'
// import { useSearchParams } from 'next/navigation'
import Tabs from '@/components/Tabs'
// import dynamic from 'next/dynamic'
// const Tabs = dynamic(() => import('@/components/Tabs'), { ssr: false })
// import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'
import formatPrice from '@/utils/format-price'
import Button from '@/components/Button'
import { LocalShipping, CreditCard } from '@styled-icons/material-outlined'
// import { LocalShipping } from '@styled-icons/material-outlined'
import { Pix } from '@styled-icons/fa-brands'
export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params
  const currentProduct = mockedProducts.find((product) => product.slug === slug)
  // const queryParams = useSearchParams()
  // console.log(queryParams.get('id'))

  // <ProductCard {...currentProduct} />
  return (
    <>
      {currentProduct && (
        <>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="flex flex-col">
              <div className="w-full">
                <Image
                  className="object-cover"
                  src={`/img/products/${currentProduct.img}`}
                  alt={currentProduct.name}
                  width={580}
                  height={580}
                  loading="lazy"
                />
              </div>
              {/* <p>Galeria de imagens?</p> */}
              {/* <p>Favoritar</p> */}
              {/* <button>
                <FavoriteBorder width={20} aria-label="Favoritar" />
              </button> */}
              {/* <button>
                <Favorite width={20} aria-label="Favoritar" />
              </button> */}
            </div>
            <div className="flex flex-col mt-4 md:mt-0">
              <p className="font-semibold text-lg mb-2">
                {currentProduct.name}
              </p>
              <p className="font-bold text-lg mb-2">
                {formatPrice(currentProduct.price)}
              </p>
              <p className="text-md">Feito sob encomenda</p>
              <p className="mb-4">12 Dias para produção.</p>
              <div className="flex items-center mb-4  text-primary">
                <LocalShipping size={30} />
                <div className="ml-4 text-sm">
                  <p>Frete grátis para Goiânia e regiões próximas</p>
                  <p>Verificar disponibilidade</p>
                </div>
              </div>
              <p>Meios de pagamento:</p>
              <p>Pix, Cartão e Boleto</p>
              <div className="flex mb-4">
                <Pix color="#4bb8a9" size={20} className="mr-3" />
                <CreditCard size={20} className="mr-3" />
                <Image
                  className="object-cover"
                  src="/img/products/ic-new-boleto.svg"
                  alt="Boleto"
                  width={24}
                  height={16}
                  loading="lazy"
                />
              </div>
              <Button>Encomendar</Button>
              {/* <p>Adicionar ao carrinho?</p> */}
              {/* <p>Encomendar?</p> */}
              {/* <p>Compartilhar?</p> */}
            </div>
          </div>
          <div>
            <Tabs
              contentFirstTab={
                <div
                  dangerouslySetInnerHTML={{ __html: currentProduct.detalhes }}
                ></div>
              }
              contentSecondTab={<p>Muito bom mesmo, está de parabéns</p>}
            />
          </div>
        </>
      )}
    </>
  )
}
