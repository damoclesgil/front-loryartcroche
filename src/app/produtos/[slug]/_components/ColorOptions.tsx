import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Produto } from '@/utils/types/Produto.type'

export type colorOptionsProps = {
  product: Produto
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
              query: { id: product.documentId }
            }}
          ></Link>
        )}

        {product?.produtosReferentes &&
          product?.produtosReferentes.map((product, iColor) => (
            <Link
              key={`color_${iColor}`}
              style={{
                backgroundColor: product?.cor ? product?.cor : '#fff'
              }}
              className={`w-8 h-8 rounded-full border-gray-600 focus:border-2 mr-1.5 ${
                pathname === `/produtos/${product.slug}`
                  ? 'border-2 '
                  : 'border'
              }`}
              href={{
                pathname: product?.slug,
                query: { id: product.documentId }
              }}
            ></Link>
          ))}
      </div>
    </>
  )
}

export default ColorOptions
