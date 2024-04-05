import Link from 'next/link'
import Image from 'next/image'
import formatPrice from '@/utils/format-price'
import { links, NextRoutes } from '@/utils/constant'
import { Button, buttonVariants } from '@/components/ui/button'
import WishlistButton from '@/components/WishlistButton'
import CartButton from '@/components/CartButton'

export type ProductCardProps = {
  id: string
  slug: string
  name: string
  img: string
  price: number
}

const ProductCard = ({ id, slug, name, img, price }: ProductCardProps) => (
  <div className="bg-product dark:bg-black relative flex flex-col w-full">
    <div className="absolute right-0">
      <WishlistButton id={id} />
    </div>
    <Link
      href={{
        pathname: `${NextRoutes.products}/${slug}`,
        query: { id: id }
      }}
    >
      <Image
        className="aspect-video overflow-hidden object-cover object-center"
        src={img}
        alt={name}
        width={550}
        height={550}
        loading="lazy"
      />
    </Link>
    <CartButton id={id} />
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
    </Button>

    <div className="flex flex-col justify-between m-2">
      <h3 className="text-md mb-2">{name}</h3>
    </div>
    <div className="flex justify-end items-center mt-2">
      <h3 className="text-md mb-2 font-bold">{formatPrice(Number(price))}</h3>
    </div>
  </div>
)

export default ProductCard
