'use client'

// import dynamic from 'next/dynamic'
// const Tabs = dynamic(() => import('@/components/Tabs'), { ssr: false })
// const ProductTabs = dynamic(() => import('./_components/ProductTabs'), {
//   ssr: false
// })
// import ProductTabs from './_components/ProductTabs'
import formatPrice from '@/utils/format-price'
import { Button } from '@/components/ui/button'
import Gallery from '@/components/Gallery'
import WishlistButton from '@/components/WishlistButton'
import { useCart } from '@/hooks/use-cart'
import { ShareButton } from './ShareButton'
import { PaymentMethods } from './PaymentMethods'
import ColorOptions from './ColorOptions'
import Heading from '@/components/Heading'
import ProductDetails from './ProductDetails'

type productProps = {
  currentProduct: any
}
// export const dynamic = 'force-dynamic'

const Product = ({ currentProduct }: productProps) => {
  const { isInCart, addToCart, removeFromCart } = useCart()

  const handleClick = (id: string) => {
    return isInCart(id) ? removeFromCart(id) : addToCart(id, 1)
  }

  return (
    <>
      {/* {loading && <SkeletonEffectProductPage />} */}
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

            {/* <ProductTabs htmlContent={currentProduct.detalhes} /> */}
          </>
        )}
      </div>
    </>
  )
}

export default Product
