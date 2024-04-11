import InstagramSection from '@/components/InstagramSection'
import ProductList from '@/components/ProductList'
import Base from '@/templates/Base'

export default function Home() {
  return (
    <Base>
      <main>
        <h2 className="text-3xl mb-12 font-semibold text-center">
          Bolsas lindamente desenhadas feitas com amor.
          <br />
          Perfeito para todas as ocasiões.
        </h2>
        <ProductList />
        <InstagramSection />
      </main>
    </Base>
  )
}
