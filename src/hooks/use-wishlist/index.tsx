import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { GET_FAVORITOS, useQueryFavoritos } from '@/graphql/queries/favoritos'
import { useApolloClient, useMutation } from '@apollo/client'
import {
  GetFavoritosQuery,
  ProdutoFragmentFragmentDoc,
  useMutationCreateFavoritoMutation,
  useMutationUpdateFavoritoMutation
} from '@/graphql/types'
import { useSession } from 'next-auth/react'
import { ProdutoEntity } from '@/graphql/types'

// export type UserType = {
//   data: {
//     id: string
//     attributes: {
//       username: string
//     }
//   }
// }
// export type idProduto = Pick<ProdutoEntity, 'id'>
export type idProduto = string

export type WishlistContextData = {
  items: ProdutoEntity[]
  isInWishlist: (id: idProduto) => boolean
  addToWishlist: (id: idProduto) => void
  removeFromWishlist: (id: idProduto) => void
  loading: boolean
}

export const WishlistContextDefaultValues = {
  items: [],
  isInWishlist: () => false,
  addToWishlist: () => null,
  removeFromWishlist: () => null,
  loading: false
}

export const WishlistContext = createContext<WishlistContextData>(
  WishlistContextDefaultValues
)

export type WishlistProviderProps = {
  children: React.ReactNode
}

const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const { data: session } = useSession()

  const [wishlistId, setWishlistId] = useState<string | null>()
  const [wishlistItems, setWishlistItems] = useState<ProdutoEntity[]>([])
  const apolloClient = useApolloClient()

  const [createList, { loading: loadingCreate }] =
    useMutationCreateFavoritoMutation({
      onCompleted: (data) => {
        setWishlistItems(
          // @ts-ignore
          data?.createFavorito?.data?.attributes?.produtos?.data || []
        )
        setWishlistId(data?.createFavorito?.data?.id)
      }
    })

  const [updateList, { loading: loadingUpdateList }] =
    useMutationUpdateFavoritoMutation({
      onCompleted: (data) => {
        if (data) {
          setWishlistItems(
            // @ts-ignore
            data.updateFavorito?.data?.attributes?.produtos?.data || []
          )
        }
      }
    })

  const options = {
    skip: !session?.user?.email,
    // context: { session },
    variables: {
      filters: {
        user: {
          email: {
            contains: session?.user?.email as string
          }
        }
      }
    }
  }

  const { data, loading: loadingQuery } = useQueryFavoritos(options)

  useEffect(() => {
    // @ts-ignore
    setWishlistItems(data?.favoritos?.data[0]?.attributes.produtos?.data ?? [])
    setWishlistId(data?.favoritos?.data[0]?.id ?? null)
  }, [data])

  const wishlistIds = useMemo(
    () => wishlistItems.map((produto) => produto.id),
    [wishlistItems]
  )

  const isInWishlist = (id: idProduto) =>
    wishlistItems.some((produto) => produto.id === id)

  const optimisticGameResponse = (id: idProduto) => {
    const produto = apolloClient.readFragment({
      id: `Produto:${id}`,
      fragment: ProdutoFragmentFragmentDoc
    })
    return (
      produto ?? {
        __typename: 'Produto',
        // id: '1',
        nome: '',
        slug: '',
        descricao: '',
        preco: 0,
        imagem_destaque: {
          data: {
            attributes: {
              url: '/uploads/bolsa_em_croche_croche_azul_01_233c83f32e.jpg'
            }
          }
        },
        galeria: {
          data: [
            {
              id: '',
              attributes: {
                url: '/uploads/bolsa_em_croche_croche_azul_01_a4312ef78f.jpg',
                name: ''
              }
            }
          ]
        }
      }
    )
  }

  const addToWishlist = (id: idProduto) => {
    // se não existir wishlist - cria
    if (!wishlistId) {
      return createList({
        variables: { data: { produtos: [id], user: session?.user?.id } },
        // optimisticResponse: {
        //   createFavorito: {
        //     data: {
        //       id: String(Math.round(Math.random() * -1000000)),
        //       attributes: {
        //         produtos: {
        //           data: [
        //             {
        //               id: id,
        //               attributes: optimisticGameResponse(id)
        //             }
        //           ]
        //         }
        //       }
        //     }
        //   }
        // },
        update: (cache, payload) => {
          const newWishlist =
            payload.data?.createFavorito?.data?.attributes?.produtos?.data

          const existingWishlist = cache.readQuery<GetFavoritosQuery>({
            query: GET_FAVORITOS,
            ...options
          })

          if (existingWishlist && newWishlist) {
            cache.writeQuery({
              query: GET_FAVORITOS,
              data: {
                favorito: {
                  data: {
                    attributes: {
                      produtos: {
                        data: [...newWishlist]
                      }
                    }
                  }
                }
              },
              ...options
            })
          }
        }
      })
    }

    // senão atualiza a wishlist existente
    return updateList({
      variables: {
        id: wishlistId, // Tem que ser o id do favorito
        data: {
          // user: ['2'],
          user: session?.user?.id,
          // @ts-ignore
          produtos: [...wishlistIds, id]
        }
      }
      // optimisticResponse: {
      //   updateFavorito: {
      //     data: {
      //       id: wishlistId,
      //       attributes: {
      //         produtos: {
      //           data: [{ id: id, attributes: {} }]
      //         }
      //       }
      //     }
      //   }
      // }
    })
  }

  const removeFromWishlist = (id: idProduto) => {
    return updateList({
      variables: {
        id: wishlistId || '',
        data: {
          user: session?.user?.id,
          // @ts-ignore
          produtos: [
            // @ts-ignore
            ...wishlistIds.filter((produtoId: idProduto) => produtoId !== id)
          ]
        }
      }
      // optimisticResponse: {
      //   updateFavorito: {
      //     data: {
      //       id: wishlistId,
      //       attributes: {
      //         produtos: {
      //           data: [{ id: id, attributes: {} }]
      //         }
      //       }
      //     }
      //   }
      // }
    })
  }

  return (
    <WishlistContext.Provider
      value={{
        items: wishlistItems,
        isInWishlist,
        addToWishlist,
        removeFromWishlist,
        loading: loadingCreate || loadingQuery || loadingUpdateList
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

const useWishlist = () => useContext(WishlistContext)

export { WishlistProvider, useWishlist }
