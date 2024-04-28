'use client'

import dynamic from 'next/dynamic'
// const Tabs = dynamic(() => import('@/components/Tabs'), { ssr: false })
const ProductTabs = dynamic(() => import('./_components/ProductTabs'), {
  ssr: false
})
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

export default function Page() {
  const productId = useSearchParams().get('id')

  const { isInCart, addToCart, removeFromCart } = useCart()

  const handleClick = (id: string) => {
    return isInCart(id) ? removeFromCart(id) : addToCart(id, 1)
  }

  const { data, loading, error } = useGetProdutoQuery({
    variables: {
      documentId: productId || ''
    },
    fetchPolicy: 'no-cache'
  })

  let currentProduct = null

  if (loading) {
    return <SkeletonEffectProductPage />
    // return <Loader />
  }

  if (error) {
    throw error
  }

  if (data) {
    currentProduct = data?.produto
    // console.log(data)
  }

  return (
    <Base backgroundImg="croche-pink" sizeBg="medium">
      <div className="mb-1">
        {currentProduct && (
          <>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.5fr_1fr] justify-between">
              <div className="flex flex-col">
                {/* @ts-ignore */}
                <Gallery galeria={currentProduct.galeria} key="-1" />
              </div>
              <div className="flex flex-col mt-4 md:mt-0">
                <Heading size="huge" className="mb-2">
                  {currentProduct.nome}
                </Heading>

                <p className="font-bold text-lg mb-2">
                  {formatPrice(Number(currentProduct.preco))}
                </p>

                <ProductDetails htmlContent={currentProduct.descricao} />

                {/* @ts-ignore */}
                <ColorOptions product={currentProduct} />

                <div className="flex items-center mb-2 ml-[-0.35rem]">
                  <WishlistButton id={currentProduct.documentId} />
                </div>

                {/* @ts-ignore */}
                <ShareButton product={currentProduct} />

                <PaymentMethods />

                <Button
                  onClick={() => handleClick(currentProduct.documentId)}
                  className="mt-4 uppercase font-bold"
                  size="lg"
                >
                  {isInCart(currentProduct.documentId)
                    ? 'Remover do Carrinho'
                    : 'Adicionar ao Carrinho'}
                </Button>
              </div>
            </div>

            <ProductTabs htmlContent={currentProduct.descricao} />
          </>
        )}
      </div>
    </Base>
  )
}
