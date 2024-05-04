import Link from 'next/link'
import { usePathname } from 'next/navigation'

export type colorOptionsProps = {
  product: any
}

const ColorOptions = ({ product }: colorOptionsProps) => {
  const pathname = usePathname()

  return (
    <>
      {product.nomeCor && (
        <p className="mb-2 text-md">
          Cor: <strong>{product.nomeCor}</strong>
        </p>
      )}
      <div className="flex items-center">
        {product?.cor && (
          <Link
            style={{
              backgroundColor: product?.cor ? product?.cor : '#fff'
            }}
            className={`w-8 h-8 rounded-full border-gray-600 focus:border-2 mr-1.5 ${
              pathname === `/produtos/${product.slug}` ? 'border-2 ' : 'border'
            }`}
            href={{
              pathname: product.slug,
              query: { id: product.id }
            }}
          ></Link>
        )}

        {product.produtoReferentes &&
          product.produtoReferentes.map((product: any, iColor: any) => (
            <Link
              key={`color_${iColor}`}
              style={{
                backgroundColor: product.attributes?.cor
                  ? product.attributes?.cor
                  : '#fff'
              }}
              className={`w-8 h-8 rounded-full border-gray-600 focus:border-2 mr-1.5 ${
                pathname === `/produtos/${product.slug}`
                  ? 'border-2 '
                  : 'border'
              }`}
              href={{
                pathname: product.attributes?.slug,
                query: { id: product.id }
              }}
            ></Link>
          ))}
      </div>
    </>
  )
}

export default ColorOptions
