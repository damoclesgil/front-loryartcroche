import InstagramSection from '@/components/InstagramSection'
import Base from '@/templates/Base'
import ProductsList from './produtos/_components/ProductList'

export default function Home() {
  return (
    <Base>
      <main>
        <code className="font-mono font-bold">src/app/page.tsx</code>
        <ProductsList />
        <InstagramSection />
      </main>
    </Base>
  )
}
