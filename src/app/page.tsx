import InstagramSection from '@/components/InstagramSection'
import ProductList from '@/components/ProductList'
import Base from '@/templates/Base'

export default function Home() {
  return (
    <Base>
      <main>
        <h2>
          Beautifully designed bags made with love. Perfect for every occasion.
        </h2>
        <ProductList />
        <InstagramSection />
      </main>
    </Base>
  )
}
