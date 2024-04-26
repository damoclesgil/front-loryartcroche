import ProductList from '@/components/ProductList'

export const dynamic = 'force-dynamic'

export default function Testando() {
  return (
    <>
      <h2>
        Aqui no caso é um exemplo usando o Apollo Wrapper no arquivo layout.tsx
        para rendereziação do lado do cliente.
      </h2>
      <ProductList />
    </>
  )
}
