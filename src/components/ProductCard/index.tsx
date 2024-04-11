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
    <div className="product-card relative flex flex-col w-full h-full">
      {status === 'authenticated' && (
        <div className="absolute right-0 wishlist-btn opacity-0 transition-opacity duration-150">
          <WishlistButton id={id} />
        </div>
      )}

      <Link
        href={{
          pathname: `${NextRoutes.products}/${slug}`,
          query: { id: id }
        }}
      >
        <Image
          className="object-contain object-center h-auto block m-auto mt-3.5"
          src={img}
          alt={name}
          width={270}
          height={270}
          loading="lazy"
        />
      </Link>

      {/* <CartButton id={id} />

      <Button asChild>
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
      </Button> */}

      <div className="flex flex-col justify-center items-center m-2">
        <h3 className="text-md product-name transition-colors duration-150">
          {name}
        </h3>
        <h3 className="text-md font-bold">{formatPrice(Number(price))}</h3>
      </div>
    </div>
  )
}

export default ProductCard
