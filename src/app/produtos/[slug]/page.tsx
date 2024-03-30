'use client'

const Tabs = dynamic(() => import('@/components/Tabs'), { ssr: false })

import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'
import formatPrice from '@/utils/format-price'
import { Button, buttonVariants } from '@/components/ui/button'
import { LocalShipping, CreditCard } from '@styled-icons/material-outlined'
import { Pix } from '@styled-icons/fa-brands'
import Gallery from '@/components/Gallery'
import Head from 'next/head'
import { usePathname, useSearchParams } from 'next/navigation'
import { useCart } from '@/hooks/use-cart'
import { useQuery } from '@apollo/client'
import { GetProdutoDocument } from '@/graphql/generated/graphql'
import { links } from '@/utils/constant'

export default function Page({ params }: { params: { slug: string } }) {
  const pathname = usePathname()

  const productId = useSearchParams().get('id')

  const { data, error, loading } = useQuery(GetProdutoDocument, {
    variables: { produtoId: productId }
  })
  let currentProduct = null

  if (data) {
    currentProduct = {
      id: data?.produto?.data?.id,
      name: data?.produto?.data?.attributes?.nome,
      price: data?.produto?.data?.attributes?.preco,
      img: data?.produto?.data?.attributes?.imagem_destaque?.data?.attributes
        ?.url,
      gallery: data?.produto?.data?.attributes?.galeria?.data,
      detalhes: data?.produto?.data?.attributes?.descricao
    }
  }

  const { addToCart, isInCart, removeFromCart } = useCart()

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      {currentProduct && (
        <>
          {/* flex flex-col md:flex-row */}
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.5fr_1fr] justify-between">
            <div className="flex flex-col">
              {/* <div className="w-full">
                <Image
                  className="object-cover"
                  src={`/img/products/${currentProduct.img}`}
                  alt={currentProduct.name}
                  width={580}
                  height={580}
                  loading="lazy"
                />
              </div> */}
              <Gallery items={currentProduct.gallery} />
              {/* <p>Galeria de imagens?</p> */}
            </div>
            <div className="flex flex-col mt-4 md:mt-0">
              <p className="font-semibold text-lg mb-2">
                {currentProduct.name}
              </p>
              <p className="font-bold text-lg mb-2">
                {formatPrice(Number(currentProduct.price))}
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
              <p className="mb-2">Cores:</p>
              <div className="flex mb-2">
                {/* <Link
                  className={`p-3 mr-2 border-primary focus:border-2 rounded-sm ${
                    pathname === '/produtos/bolsa-de-croche-cor-de-rosa'
                      ? 'border-2 '
                      : 'border'
                  }`}
                  href={{
                    pathname: `bolsa-de-croche-cor-de-rosa`,
                    query: { id: 1 }
                  }}
                >
                  Rosa
                </Link>
                <Link
                  className={`p-3 ml-2 border-primary focus:border-2 rounded-sm ${
                    pathname === '/produtos/bolsa-de-croche-cor-azul'
                      ? 'border-2 '
                      : 'border'
                  }`}
                  href={{
                    pathname: `bolsa-de-croche-cor-azul`,
                    query: { id: 2 }
                  }}
                >
                  Azul
                </Link> */}
              </div>

              <div className="flex items-center">
                <button
                  className="mr-2"
                  onClick={() => {
                    isInCart(currentProduct?.id)
                      ? removeFromCart(currentProduct?.id)
                      : addToCart({
                          id: currentProduct?.id,
                          name: currentProduct.name,
                          img: currentProduct.img,
                          price: Number(currentProduct.price),
                          slug: pathname
                        })
                  }}
                >
                  {isInCart(currentProduct.id) ? (
                    <Favorite
                      width={20}
                      aria-label="Favoritar"
                      title="Desfavoritar"
                    />
                  ) : (
                    <FavoriteBorder
                      width={20}
                      aria-label="Favoritar"
                      title="Favoritar"
                    />
                  )}
                </button>
              </div>
              <p className="my-2">Compartilhar</p>
              <p>Meios de pagamento:</p>
              <p className="mb-2">Pix, Cartão e Boleto</p>
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
              <Button asChild>
                <a
                  target="_blank"
                  className={buttonVariants({
                    variant: 'default',
                    className: 'w-full',
                    size: 'lg'
                  })}
                  href={`${links.WhatsApp}`}
                >
                  Encomendar
                </a>
              </Button>
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
