'use client'

export type ProductDetailsProps = {
  htmlContent: any
}

const ProductDetails = ({ htmlContent }: ProductDetailsProps) => {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: htmlContent
        }}
      />
      {/* <div className="text-md">{currentProduct.detalhes}</div>
      <p className="text-md">Feito sob encomenda</p>
      <p className="mb-4">12 Dias para produção.</p>
      <div className="flex mt-2 items-center mb-2 text-primary">
        <LocalShipping size={30} />
        <div className="ml-4 text-sm">
          <p>Frete grátis para Goiânia e regiões próximas</p>
          <p>Verificar disponibilidade</p>
        </div>
      </div> */}
    </>
  )
}

export default ProductDetails
