import Link from 'next/link'
import Image from 'next/image'
import formatPrice from '@/utils/format-price'
import { links, NextRoutes } from '@/utils/constant'
import { Button, buttonVariants } from '@/components/ui/button'
import WishlistButton from '@/components/WishlistButton'
import CartButton from '@/components/CartButton'
import { useSession } from 'next-auth/react'
import './style.css'

export type ProductCardProps = {
  id: string
  slug: string
  name: string
  img: string
  price: number
}

const ProductCard = ({ id, slug, name, img, price }: ProductCardProps) => {
  const { status } = useSession()

  return (
    <Link
      href={{
        pathname: `${NextRoutes.products}/${slug}`,
        query: { id: id }
      }}
    >
      <div className="product-card relative flex flex-col w-full h-full rounded-md">
        {status === 'authenticated' && (
          <div className="absolute right-0 wishlist-btn opacity-100 transition-opacity duration-150">
            <WishlistButton id={id} />
          </div>
        )}

        <Image
          // h-auto w-full min-h-[245px] max-h-[245px]
          className="object-contain object-center block m-auto mt-3.5 "
          src={img}
          alt={name}
          loading="lazy"
          width={270}
          height={270}
        />

        <div className="absolute bottom-14 right-0 opacity-0 cart-btn transition-opacity duration-150">
          <CartButton id={id} />
        </div>

        {/* <Button asChild>
        <a
          target="_blank"
          className={buttonVariants({
            variant: 'default',
            className: 'w-full rounded-none',
            size: 'lg'
          })}
          href={`${links.WhatsApp}`}
        >
          Encomendar
        </a>
      </Button>  */}

        <div className="flex flex-col justify-center items-center m-2">
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
