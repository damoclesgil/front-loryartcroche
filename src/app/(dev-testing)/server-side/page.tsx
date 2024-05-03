import { getClient } from '@/utils/apollo/apollo'
import { AllProducts } from './AllProducts'
import { ApolloWrapper } from '@/utils/apollo/apolloWrapper'
import { GetProdutosDocument } from '@/graphql/types'

export const dynamic = 'force-dynamic'

export default async function Page() {
  const data = await getClient().query({
    query: GetProdutosDocument,
    variables: {}
  })

  // we are using Apollo Wrapper here too so we can use
  // useMutation in the Poll component
  return (
    <ApolloWrapper>
      <AllProducts products={data.data.produtos?.data} />
    </ApolloWrapper>
  )
}
