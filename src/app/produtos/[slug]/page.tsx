'use client'

import dynamic from 'next/dynamic'
// const Tabs = dynamic(() => import('@/components/Tabs'), { ssr: false })
const ProductTabs = dynamic(() => import('./_components/ProductTabs'), {
  ssr: false
})
// import ProductTabs from './_components/ProductTabs'
import formatPrice from '@/utils/format-price'
import { Button } from '@/components/ui/button'
import Gallery from '@/components/Gallery'
import { useSearchParams } from 'next/navigation'
import { useGetProdutoQuery } from '@/graphql/types'
import WishlistButton from '@/components/WishlistButton'
import { useCart } from '@/hooks/use-cart'
import { ShareButton } from './_components/ShareButton'
import { PaymentMethods } from './_components/PaymentMethods'
import ColorOptions from './_components/ColorOptions'
import SkeletonEffectProductPage from './_components/SkeletonEffectProductPage'
import Base from '@/templates/Base'
import Heading from '@/components/Heading'
import ProductDetails from './_components/ProductDetails'
// import { Metadata } from 'next'
// import { defaultMetadata } from '@/utils/constant'

// type PropsProduto = {
//   params: {
//     productId: string
//   }
// }

// export const generateMetadata = ({ params }: PropsProduto): Metadata => {
//   return {
//     title: `${defaultMetadata.title} - Produto ${params.productId}`
//   }
// }

export default function Page() {
  const productId = useSearchParams().get('id')

  const { isInCart, addToCart, removeFromCart } = useCart()

  const handleClick = (id: string) => {
    return isInCart(id) ? removeFromCart(id) : addToCart(id, 1)
  }

  const { data, loading, error } = useGetProdutoQuery({
    variables: {
      produtoId: productId
    },
    fetchPolicy: 'no-cache'
  })

  let currentProduct = null

  if (error) {
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
    <Base backgroundImg="croche-pink" sizeBg="medium">
      {loading && <SkeletonEffectProductPage />}

      <div className="mb-1">
        {currentProduct && (
          <>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.5fr_1fr] justify-between">
              <div className="flex flex-col">
                {/*  @ts-ignore */}
                <Gallery items={currentProduct?.gallery} key="-1" />
              </div>
              <div className="flex flex-col mt-4 md:mt-0">
                <Heading size="huge" className="mb-2">
                  {currentProduct.name}
                </Heading>

                <p className="font-bold text-lg mb-2">
                  {formatPrice(Number(currentProduct.price))}
                </p>

                <ProductDetails htmlContent={currentProduct.detalhes} />

                <ColorOptions product={currentProduct} />

                <div className="flex items-center mb-2 ml-[-0.35rem]">
                  {/* @ts-ignore */}
                  <WishlistButton id={currentProduct.id} />
                </div>

                <ShareButton product={currentProduct} />

                <PaymentMethods />

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

            <ProductTabs htmlContent={currentProduct.detalhes} />
          </>
        )}
      </div>
    </Base>
  )
}
