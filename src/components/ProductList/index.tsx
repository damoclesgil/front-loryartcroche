import ProductCard from '@/components/ProductCard'
import { mockedProducts } from './mockedProducts'

const ProductList = () => {
  const products = mockedProducts

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-4 mx-2">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          slug={product.slug}
          img={product.img}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  )
}

export default ProductList
