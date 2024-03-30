import Link from 'next/link'
import Image from 'next/image'
import formatPrice from '@/utils/format-price'
import { links, NextRoutes } from '@/utils/constant'
import { Button, buttonVariants } from '../ui/button'

export type ProductCardProps = {
  id: string
  slug: string
  name: string
  img?: string
  price?: number
}

const ProductCard = ({ id, slug, name, img, price }: ProductCardProps) => (
  <div className="bg-product dark:bg-black relative flex flex-col w-full">
    <Link
      href={{
        pathname: `${NextRoutes.products}/${slug}`,
        query: { id: id }
      }}
    >
      {img !== 'undefined' ? (
        // className="object-contain object-center w-full h-full md:max-w-[18rem] min-h-[18rem] max-h-[18rem]"
        <Image
          className="aspect-video overflow-hidden object-cover object-center"
          src={`${process.env.NEXT_PUBLIC_API_URL}${img}`}
          alt={name}
          width={550}
          height={550}
          loading="lazy"
        />
      ) : (
        <Image
          alt="Bag placeholder Lory Art Crochê"
          className="aspect-video overflow-hidden object-cover object-center"
          width={550}
          height={550}
          loading="lazy"
          src="img/products/placeholder.svg"
        />
      )}
    </Link>
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
      <h3 className="text-md mb-2 font-bold">{formatPrice(price || 0)}</h3>
    </div>
  </div>
)

export default ProductCard
