import Link from 'next/link'
import Image from 'next/image'
import formatPrice from '@/utils/format-price'

export type ProductCardProps = {
  id: string
  slug: string
  name: string
  img?: string
  price: number
}

const ProductCard = ({ id, slug, name, img, price }: ProductCardProps) => (
  <div className="bg-product dark:bg-black relative flex flex-col w-100 h-100">
    <Link
      href={{
        pathname: `produtos/${slug}`,
        query: { id: id }
      }}
    >
      <div className="w-100 h-100">
        <Image
          className="object-contain object-center w-full h-full max-w-72 min-h-72 max-h-72"
          src={`/img/products/${img}`}
          alt={name}
          width={550}
          height={550}
          loading="lazy"
        />
      </div>
    </Link>
    <div className="flex flex-col justify-between m-2">
      <h3 className="text-md mb-2">{name}</h3>
    </div>
    <div className="flex justify-end items-center mt-2">
      <h3 className="text-md mb-2 font-bold">{formatPrice(price)}</h3>
    </div>
  </div>
)

export default ProductCard
