'use client'

import { QUERY_PRODUTOS } from '@/graphql/queries/produtos'
import * as S from './styles'
import Link from 'next/link'
import { useQuery } from '@apollo/client'

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
        {data &&
          data.produtos?.data.map((produto, index) => (
            <S.Product key={index}>
              {produto.attributes && (
                <Link href={`produtos/${produto.attributes.slug}`}>
                  <span>{produto.attributes.nome}</span>
                </Link>
              )}
            </S.Product>
          ))}
      </S.Wrapper>
    )
  }
}
