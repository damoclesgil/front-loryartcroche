// import { getClient } from '@/utils/apollo/apollo'
// import { AllProducts } from './AllProducts'
// import { ApolloWrapper } from '@/utils/apollo/apolloWrapper'
// import { GetProdutosDocument } from '@/graphql/types'
// import { normalize } from '@/utils/mappers'
import { getProdutos, serverSideFunction } from '@/utils/server-utils'

export const dynamic = 'force-dynamic'

export default async function ServerSidePage() {
  console.log('serverSideRender')
  const result = serverSideFunction()
  // Tem que ser usando esse getClient para server side
  // const { data } = await getClient().query({
  //   query: GetProdutosDocument,
  //   variables: {}
  // })

  const tomale = await getProdutos()

  // we are using Apollo Wrapper here too so we can use
  // useMutation in the Poll component
  return (
    <>
      {tomale && JSON.stringify(tomale)}
      <p>
        No caso do Server Side se quiser usar os componentes que só funciona
        cliente side eu preciso criar um separado desse arquivo, e importalos
        com a diretiva client side.
      </p>
      <p>
        No caso do server side parece que não é possível acessar o localstorage
        e agora?
      </p>
      <p>
        Para ver melhor o que está retornando veja o terminal em que está
        rondando o projeto
      </p>
      <p>
        Se eu quiser usar um server component dentro de um client component e so
        usar o `children` esse children suporta o cliente `server side`
        tranquilo do react
      </p>
      {/* <p>existe o metodos revalidatePath('/produtos') caso queira atualizar os dados da tela </p> */}
      {/* <ApolloWrapper> */}
      {result}
      {/* <AllProducts products={data.data.produtos?.data} /> */}
      {/* <AllProducts products={data.data.produtos?.data} /> */}
      {/* </ApolloWrapper> */}
    </>
  )
}
