'use client'

// import ProductCard from '@/components/ProductCard'
import { mockedProducts } from '@/components/ProductList/mockedProducts'
import dynamic from 'next/dynamic'
import Image from 'next/image'
// import { useSearchParams } from 'next/navigation'
const Tabs = dynamic(() => import('@/components/Tabs'))
import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'

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
              <button>
                <FavoriteBorder width={20} aria-label="Favoritar" />
              </button>
              {/* <button>
                <Favorite width={20} aria-label="Favoritar" />
              </button> */}
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-lg">{currentProduct.name}</p>
              <p>Adicionar ao carrinho?</p>
              <p>Encomendar?</p>
              <p>Compartilhar?</p>
            </div>
          </div>
          <div>
            <Tabs
              contentFirstTab={
                <>
                  <p>ada</p>
                  <p className="font-bold">*Encomende a sua*</p>

                  <p>entre em contato</p>

                  <p>Descrição do produtos:</p>

                  <p>Genero: Feminino.</p>

                  <p>Ótimo acabamento.</p>

                  <p>FOTOS TIRADAS DO PRÓPRIO PRODUTO.</p>

                  <p>
                    {' '}
                    Linda bolsa de luxo feita com muito cuidado e zelo,
                    acabamento impecável, para quem quer se destacar nos
                    passeios e nas festas.
                  </p>

                  <p>
                    {' '}
                    Tem o fechamento principal com tampa de crochê emoldurada e
                    trava com metal dourado e internamente tem um bolsinho em
                    tecido, tem alça de mão exclusiva em crochê e correia de
                    ombro em corrente de alumínio dourada especial.
                  </p>

                  <p>
                    Tamanho bom. Comprimento:..20 CM Altura:.................15
                    CM Largura: ............05 CM
                  </p>
                  <p>As medidas podem ter pequenas variações.</p>

                  <p>
                    COMPRE COM A GRANTIA QUE VAI RECEBER UM PRODUTO ORIGINAL.
                  </p>
                  <p>Garantia do vendedor: 3 meses</p>
                </>
              }
            />
          </div>
        </>
      )}
    </>
  )
}
