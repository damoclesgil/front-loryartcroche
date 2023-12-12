'use client'

import { notFound, useSearchParams } from 'next/navigation'
import * as S from './styles'

import { QUERY_PRODUTO } from '@/graphql/queries/produtos'
import { useQuery } from '@apollo/client'
import ProductCard from '@/components/ProductCard'
import { getImageUrl } from '@/utils/getImageUrl'

// export async function generateStaticParams(context) {
//   console.log(context)
//   return [
//     { slug: 'bolsa-tal-tal', id: '1' },
//     { slug: 'bolsa-2', id: '2' }
//   ]
// }

export default function Page({ params }: { params: { slug: string } }) {
  const queryParams = useSearchParams()
  const { data } = useQuery(QUERY_PRODUTO, {
    variables: { produtoId: queryParams.get('id') }
  })
  // console.log(queryParams.get('id'))
  // const { id } = router.query
  // if (id) {
  // console.log(id)
  // }
  // const { slug } = params
  if (Number(params) >= 100) {
    notFound()
  }

  const produto = data?.produto?.data
  return (
    <S.Wrapper>
      {/* {params.id} */}
      <ProductCard
        id={produto?.id ? produto.id : ''}
        key={queryParams.get('id')}
        slug={produto?.attributes?.slug ? produto.attributes?.slug : 'bolsa'}
        name={
          produto?.attributes?.nome
            ? produto.attributes?.nome
            : 'Sem Nome por Enquanto'
        }
        price={29}
        img={
          produto?.attributes?.imagem_destaque?.data?.attributes!.url
            ? `${getImageUrl(
                produto.attributes?.imagem_destaque?.data?.attributes!.url
              )}`
            : ''
        }
      />
    </S.Wrapper>
  )
}
