'use client'

import { useSession } from 'next-auth/react'
import ProductList from '@/components/ProductList'
import { useQueryFavoritos } from '@/graphql/queries/favoritos'
import { normalize } from '@/utils/mappers'
import Link from 'next/link'
import { NextRoutes } from '@/utils/constant'
import { buttonVariants } from '@/components/ui/button'

const WishList = () => {
  const { data: session } = useSession()

  // const { data, loading, error } = await useFavoritosAction()

  const {
    data,
    loading: loadingFavoritos,
    error
  } = useQueryFavoritos({
    context: { session },
    variables: {
      filters: {
        user: {
          email: {
            contains: session?.user?.email as string
          }
        }
      }
    }
  })

  if (!session?.user?.email) {
    return (
      <>
        <div className="text-center mt-4">
          <p>
            Efetue o Login ou Cadastre-se para conseguir ver os seus favoritos.
          </p>
          {/* <Button asChild variant="link" size="sm"> */}
          <Link
            className={buttonVariants({
              variant: 'link',
              className: 'w-full font-bold',
              size: 'default'
            })}
            href={NextRoutes.signIn}
          >
            Entrar
          </Link>
          {/* </Button> */}
        </div>
      </>
    )
  }

  // if (error) {
  //   if ((error.graphQLErrors[0].message = 'Forbidden access')) {
  //     return (
  //       <>
  //         <div className="text-center mt-4">
  //           <p>
  //             Efetue o Login ou Cadastre-se para conseguir ver os seus
  //             favoritos.
  //           </p>
  //           {/* <Button asChild variant="link" size="sm"> */}
  //           <Link
  //             className={buttonVariants({
  //               variant: 'link',
  //               className: 'w-full font-bold',
  //               size: 'default'
  //             })}
  //             href={NextRoutes.signIn}
  //           >
  //             Entrar
  //           </Link>
  //           {/* </Button> */}
  //         </div>
  //       </>
  //     )
  //   }
  //   return <p>Ocorreu algo, tente novamente dentro de alguns minutos. 🥲</p>
  // }

  // if (data) {
  let produtos = data?.favoritos?.data[0]?.attributes?.produtos?.data.map(
    (produto) => {
      return {
        documentId: produto?.id,
        cor: produto.attributes?.cor,
        nome: produto.attributes?.nome,
        descricao: produto.attributes?.descricao,
        nomeCor: produto.attributes?.nomeCor,
        preco: produto.attributes?.preco,
        slug: produto.attributes?.slug,
        produtosReferentes: normalize(produto.attributes?.produtosReferentes),
        galeria: produto.attributes?.galeria,
        imagem_destaque: produto.attributes?.imagem_destaque?.data?.attributes
      }
    }
  )

  let pagination = data?.favoritos?.meta?.pagination

  return (
    <>
      <ProductList
        // @ts-ignore
        produtos={produtos}
        loading={loadingFavoritos}
        page="favoritos"
        error={error}
        loadMore={() => {}}
        // @ts-ignore
        pagination={pagination}
      />
    </>
  )
  // }
}

export default WishList
