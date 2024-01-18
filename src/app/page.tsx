import InstagramSection from '@/components/InstagramSection'
import ProductList from '@/components/ProductList'
import Base from '@/templates/Base'

export default function Home() {
  return (
    <Base>
      <main>
        <code className="font-mono font-bold">src/app/page.tsx</code>
        <ProductList />
        <InstagramSection />
      </main>
    </Base>
  )
}
