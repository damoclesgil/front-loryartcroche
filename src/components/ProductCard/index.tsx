import Link from 'next/link'
import Image from 'next/image'
import formatPrice from '@/utils/format-price'
import { links, NextRoutes } from '@/utils/constant'
import { Button, buttonVariants } from '@/components/ui/button'
import WishlistButton from '@/components/WishlistButton'
import CartButton from '@/components/CartButton'
import { useSession } from 'next-auth/react'
import './style.css'
import { ProdutoFragmentFragment } from '@/graphql/types'
import { AspectRatio } from '@/components/ui/aspect-ratio'

export type ProductCardProps = {
  id: string
  slug: string
  name: string
  img: {
    src: string
    width: number
    height: number
    alt: string
  }
  price: number
}

const ProductCard = ({ id, slug, name, img, price }: ProductCardProps) => {
  const { status } = useSession()

  return (
    <Link
      className="product-card w-full h-auto px-0 block m-auto relative rounded-md"
      href={{
        pathname: `${NextRoutes.products}/${slug}`,
        query: { id: id }
      }}
    >
      <div className="flex flex-col relative">
        {status === 'authenticated' && (
          <div className="absolute right-0 wishlist-btn opacity-100 transition-opacity duration-150 z-10">
            <WishlistButton id={id} />
          </div>
        )}

        <div className="w-full h-auto">
          {/* width={img.width} height={img.height} {16 / 9}  */}
          {/* https://demo-kalles-4-3.myshopify.com/collections/jewelry */}
          <AspectRatio ratio={12 / 12} className="bg-muted z-0">
            <Image
              className="object-cover object-center m-auto rounded-t-md img-below opacity-100"
              src={img.src}
              alt={img.alt ? img.alt : name}
              loading="lazy"
              fill
            />
            <Image
              className="object-cover object-center m-auto rounded-t-md img-above opacity-0"
              src="img/placeholder.svg"
              alt={img.alt ? img.alt : name}
              loading="lazy"
              fill
            />
          </AspectRatio>
        </div>

        <div className="absolute bottom-14 right-0 opacity-0 cart-btn transition-opacity duration-150">
          <CartButton id={id} />
        </div>

        <div className="flex flex-col justify-start items-start m-2">
          <h3 className="text-md product-name transition-colors duration-150 hover:underline">
            {name}
          </h3>
          <h3 className="text-md font-bold">{formatPrice(Number(price))}</h3>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
