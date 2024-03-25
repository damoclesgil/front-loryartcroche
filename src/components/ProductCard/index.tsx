import Link from 'next/link'
import Image from 'next/image'
import formatPrice from '@/utils/format-price'
import Button from '@/components/Button'
import { links, NextRoutes } from '@/utils/constant'

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
      <div className="w-full">
        {/* <Image
          className="object-contain object-center w-full h-full md:max-w-[18rem] min-h-[18rem] max-h-[18rem]"
          src={`/img/products/${img}`}
          alt={name}
          width={550}
          height={550}
          loading="lazy"
        /> */}
        <Image
          className="object-contain object-center w-full h-full md:max-w-[18rem] min-h-[18rem] max-h-[18rem]"
          src={`${img}`}
          alt={name}
          width={550}
          height={550}
          loading="lazy"
        />
      </div>
    </Link>
    <Button
      href={links.WhatsApp}
      target="_blank"
      as="a"
      fullWidth
      size="medium"
    >
      Encomendar
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
