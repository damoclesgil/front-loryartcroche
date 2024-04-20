'use client'

// import dynamic from 'next/dynamic'
// const Tabs = dynamic(() => import('@/components/Tabs'), { ssr: false })
import formatPrice from '@/utils/format-price'
import { Button } from '@/components/ui/button'
import Gallery from '@/components/Gallery'
import { usePathname, useSearchParams } from 'next/navigation'
import { useGetProdutoQuery, type ProdutoEntity } from '@/graphql/types'
import WishlistButton from '@/components/WishlistButton'
import Link from 'next/link'
import { useCart } from '@/hooks/use-cart'
import Loader from '@/components/Loader'
import { ShareButton } from './_components/shareButton'
import { PaymentMethods } from './_components/paymentMethods'
import SkeletonEffectProductPage from './_components/SkeletonEffectProductPage'

export default function Page() {
  const pathname = usePathname()

  const productId = useSearchParams().get('id')

  const { isInCart, addToCart, removeFromCart } = useCart()

  const handleClick = (id: string) => {
    return isInCart(id) ? removeFromCart(id) : addToCart(id)
  }

  const { data, loading, error } = useGetProdutoQuery({
    variables: {
      produtoId: productId
    },
    fetchPolicy: 'no-cache'
  })

  let currentProduct = null

  if (loading) {
    return <SkeletonEffectProductPage />
    // return <Loader />
  }

  if (error) {
    console.log(error)
    throw error
  }

  if (data) {
    currentProduct = {
      id: data?.produto?.data?.id,
      name: data?.produto?.data?.attributes?.nome,
      price: data?.produto?.data?.attributes?.preco,
      img: data?.produto?.data?.attributes?.imagem_destaque?.data?.attributes
        ?.url,
      gallery: data?.produto?.data?.attributes?.galeria?.data,
      detalhes: data?.produto?.data?.attributes?.descricao,
      cor: data?.produto?.data?.attributes?.cor,
      slug: data?.produto?.data?.attributes?.slug,
      nomeCor: data?.produto?.data?.attributes?.nomeCor,
      produtoReferentes:
        data?.produto?.data?.attributes?.produtosReferentes?.data
    }
    // console.log(data)
  }

  return (
    <div className="mb-1">
      {currentProduct && (
        <>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.5fr_1fr] justify-between">
            <div className="flex flex-col">
              {/*  @ts-ignore */}
              <Gallery items={currentProduct.gallery} key="-1" />
            </div>
            <div className="flex flex-col mt-4 md:mt-0">
              <h1 className="font-semibold text-[3rem] mb-2">
                {currentProduct.name}
              </h1>
              <p className="font-bold text-lg mb-2">
                {formatPrice(Number(currentProduct.price))}
              </p>
              <div
                // @ts-ignore
                dangerouslySetInnerHTML={{ __html: currentProduct.detalhes }}
              />
              {/* <div className="text-md">{currentProduct.detalhes}</div> */}
              {/* <p className="text-md">Feito sob encomenda</p> */}
              {/* <p className="mb-4">12 Dias para produção.</p> */}
              {/* <div className="flex mt-2 items-center mb-2 text-primary">
                <LocalShipping size={30} />
                <div className="ml-4 text-sm">
                  <p>Frete grátis para Goiânia e regiões próximas</p>
                  <p>Verificar disponibilidade</p>
                </div>
              </div> */}

              {currentProduct.nomeCor && (
                <p className="mb-2 text-md">
                  Cor: <strong>{currentProduct.nomeCor}</strong>
                </p>
              )}

              <div className="flex items-center">
                {currentProduct?.cor && (
                  <Link
                    style={{
                      backgroundColor: currentProduct?.cor
                        ? currentProduct?.cor
                        : '#fff'
                    }}
                    className={`w-8 h-8 rounded-full border-gray-600 border-[3px] focus:border-2 mr-1.5 ${
                      pathname === '/produtos/bolsa-de-croche-cor-de-rosa'
                        ? 'border-2 '
                        : 'border'
                    }`}
                    href={{
                      pathname: currentProduct.slug,
                      query: { id: currentProduct.id }
                    }}
                  ></Link>
                )}

                {currentProduct.produtoReferentes &&
                  currentProduct.produtoReferentes.map((product, iColor) => (
                    <Link
                      key={`color_${iColor}`}
                      style={{
                        backgroundColor: product.attributes?.cor
                          ? product.attributes?.cor
                          : '#fff'
                      }}
                      className={`w-8 h-8 rounded-full border-gray-600 focus:border-2 mr-1.5 ${
                        pathname === '/produtos/bolsa-de-croche-cor-de-rosa'
                          ? 'border-2 '
                          : 'border'
                      }`}
                      href={{
                        pathname: product.attributes?.slug,
                        query: { id: product.id }
                      }}
                    ></Link>
                  ))}
              </div>

              <div className="flex items-center mb-2 ml-[-0.35rem]">
                <WishlistButton id={currentProduct.id} />
                {/* <CartButton id={currentProduct.id} /> */}
              </div>

              <ShareButton product={currentProduct} />

              <PaymentMethods />

              {/* <Button asChild>
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
              </Button> */}
              <Button
                // @ts-ignore
                onClick={() => handleClick(currentProduct.id)}
                className="mt-4 uppercase font-bold"
                size="lg"
              >
                {/* @ts-ignore */}
                {isInCart(currentProduct.id)
                  ? 'Remover do Carrinho'
                  : 'Adicionar ao Carrinho'}
              </Button>
            </div>
          </div>
          {/* <div>
            <Tabs
              contentFirstTab={
                <div
                  dangerouslySetInnerHTML={{ __html: currentProduct.detalhes }}
                ></div>
              }
              contentSecondTab={<p>Muito bom mesmo, está de parabéns</p>}
            />
          </div> */}
        </>
      )}
    </div>
  )
}
