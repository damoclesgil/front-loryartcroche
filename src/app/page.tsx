import InstagramSection from '@/components/InstagramSection'
import Base from '@/templates/Base'
import ProductsList from './produtos/_components/ProductList'

export default function Home() {
  return (
    <Base>
      <main>
        <h2>
          Beautifully designed bags made with love. Perfect for every occasion.
        </h2>
        <ProductsList />
        <InstagramSection />
      </main>
    </Base>
  )
}
