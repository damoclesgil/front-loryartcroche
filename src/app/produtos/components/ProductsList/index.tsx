'use client'

import { QUERY_PRODUTOS } from '@/graphql/queries/produtos'
import * as S from './styles'
import { useQuery } from '@apollo/client'
import ProductCard from '@/components/ProductCard'
import { getImageUrl } from '@/utils/getImageUrl'

export default function ProductsList() {
  const { data, error, loading } = useQuery(QUERY_PRODUTOS)

  if (error) {
    throw error
  }

  if (loading) {
    return (
      <>
        <p>Apenas Carregando será?</p>
      </>
    )
  }

  if (data) {
    return (
      <S.Wrapper>
        {data?.produtos?.data.length ? (
          <>
            <S.Grid>
              {data?.produtos?.data.map((produto, index) => (
                <ProductCard
                  id={produto?.id}
                  key={index}
                  slug={
                    produto.attributes?.slug
                      ? produto.attributes?.slug
                      : 'bolsa'
                  }
                  name={
                    produto.attributes?.nome
                      ? produto.attributes?.nome
                      : 'Sem Nome por Enquanto'
                  }
                  price={29}
                  img={
                    produto.attributes?.imagem_destaque?.data?.attributes!.url
                      ? `${getImageUrl(
                          produto.attributes?.imagem_destaque?.data?.attributes!
                            .url
                        )}`
                      : ''
                  }
                />
              ))}
            </S.Grid>
          </>
        ) : (
          <p>Nenhum Produto</p>
        )}
      </S.Wrapper>
    )
  }
}
