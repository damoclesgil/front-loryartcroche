'use client'

import Loader from '@/components/Loader'
import { useOrdensDePagamentosQuery } from '@/graphql/types'
// { fetchPolicy: 'network-only' }
export default function OrdensDeCompras() {
  const { data, error, loading } = useOrdensDePagamentosQuery()

  if (error) {
    throw error
  }

  if (loading) {
    return (
      <>
        <Loader />
      </>
    )
  }

  if (data) {
    // 4242 4242 4242 4242

    const mappedOrdensDeCompras = data.ordens?.data.map((ordem) => {
      return {
        id: ordem.id,
        bandeiraCartaoCredito: ordem.attributes?.card_brand,
        ultimoDigitosCartaoCredito: ordem.attributes?.card_last4,
        itencaoPagamentoId: ordem.attributes?.payment_intent_id,
        totalEmCentavos: ordem.attributes?.total_in_cents,
        criadoEm: ordem.attributes?.createdAt,
        produtos: ordem.attributes?.produtos?.data
      }
    })
    // console.log(data.ordens?.data)
    // console.log(mappedOrdensDeCompras)
    return (
      <>
        <h3 className="text-lg">Histórico de Compras</h3>

        {mappedOrdensDeCompras?.length &&
          mappedOrdensDeCompras.map((ordemCompra) => (
            <div key={ordemCompra.id}>
              <p>{ordemCompra.bandeiraCartaoCredito}</p>
              <p>{ordemCompra.criadoEm}</p>
            </div>
          ))}
      </>
    )
  }
}
