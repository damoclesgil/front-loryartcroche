'use client'

import Empty from '@/components/Empty'
import Loader from '@/components/Loader'
import { useOrdensDePagamentosQuery } from '@/graphql/types'
import { ordensComprasMapper } from '@/utils/mappers'
import Image from 'next/image'
// { fetchPolicy: 'network-only' }
export default function OrdensDeCompras() {
  const {
    data: dataOrdensPagamento,
    error,
    loading
  } = useOrdensDePagamentosQuery({ fetchPolicy: 'no-cache' })

  if (error) {
    return (
      <>
        <Empty
          title=""
          description="
            Não conseguimos trazer nenhuma Bolsa 🥲, por favor tente novamente dentro de alguns minutos.
            "
        />
      </>
    )
    // throw error
  }

  if (loading) {
    return (
      <div className="mt-10 lg:mt-0">
        <Loader />
      </div>
    )
  }

  if (dataOrdensPagamento) {
    // 4242 4242 4242 4242

    const mappedOrdensDeCompras = ordensComprasMapper(dataOrdensPagamento)
    // console.log(mappedOrdensDeCompras)
    // console.log(data.ordens?.data)
    // console.log(mappedOrdensDeCompras)
    return (
      <>
        <h3 className="text-2xl mt-5 lg:mt-0 text-center font-bold">
          Histórico de Compras
        </h3>

        {mappedOrdensDeCompras?.length ? (
          mappedOrdensDeCompras.map((ordemCompra) => (
            <div
              className="border-b-2 border-gray-600 flex flex-col lg:flex-row lg:items-end justify-between w-full mb-2 pb-2"
              key={ordemCompra.id}
            >
              <div>
                <h4 className="font-semibold text-center lg:text-left mb-2">
                  Produtos Comprados:
                </h4>
                {ordemCompra.produtos?.length &&
                  ordemCompra.produtos.map((produto) => (
                    <div
                      className="flex flex-col lg:flex-row items-center justify-center lg:items-start mb-2"
                      key={produto.id}
                    >
                      <Image
                        className="h-auto"
                        src={produto.img}
                        width={150}
                        height={150}
                        alt={produto.nome ? produto.nome : ''}
                      />
                      <div>
                        <h2 className="text-lg font-semibold ml-4 capitalize">
                          {produto.nome}
                        </h2>
                        <h2 className="ml-4 mt-2">
                          <span className="text-md bg-primary font-bold text-white w-auto py-1 px-2 rounded-md">
                            {produto.preco}
                          </span>
                        </h2>
                      </div>
                    </div>
                  ))}
              </div>

              <div>
                {ordemCompra.img && (
                  <>
                    <div className="flex mt-4 lg:mt-0 mb-2 lg:mb-1">
                      <p className="mr-2">Cartão de Crédito: </p>
                      <Image
                        src={ordemCompra.img}
                        width={40}
                        height={40}
                        alt={
                          ordemCompra.bandeiraCartaoCredito
                            ? ordemCompra.bandeiraCartaoCredito
                            : ''
                        }
                      />
                    </div>
                  </>
                )}
                <p>{ordemCompra.dataCompra}</p>
              </div>
            </div>
          ))
        ) : (
          <>
            <Empty
              title="Nenhuma Ordem de compra registrada"
              description="Visite a página de produtos e veja se existe alguma bolsa que encaixe perfeitamente com você 😉"
            />
          </>
        )}
      </>
    )
  }
}
