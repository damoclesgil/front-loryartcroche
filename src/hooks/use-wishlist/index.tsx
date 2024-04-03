import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { GET_FAVORITOS, useQueryFavoritos } from '@/graphql/queries/favoritos'
import { useApolloClient, useMutation } from '@apollo/client'
import {
  GetFavoritosQuery,
  ProdutoFragmentFragmentDoc
} from '@/graphql/generated/graphql'
import { useSession } from 'next-auth/react'
import {
  MUTATION_CREATE_FAVORITO,
  MUTATION_UPDATE_FAVORITO
} from '@/graphql/mutations/favoritos'
import { ProdutoType } from '@/types/produto.type'

// export type UserType = {
//   data: {
//     id: string
//     attributes: {
//       username: string
//     }
//   }
// }

export type WishlistContextData = {
  items: ProdutoType[]
  isInWishlist: (id: string) => boolean
  addToWishlist: (id: string) => void
  removeFromWishlist: (id: string) => void
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
  //                                                <ProdutoEntity[]>
  const [wishlistItems, setWishlistItems] = useState<ProdutoType[]>([])
  const apolloClient = useApolloClient()

  const [createList, { loading: loadingCreate }] = useMutation(
    MUTATION_CREATE_FAVORITO,
    {
      onCompleted: (data) => {
        setWishlistItems(
          data?.createFavorito?.data?.attributes?.produtos?.data || []
        )
        setWishlistId(data?.createFavorito?.data?.id)
      }
    }
  )

  const [updateList, { loading: loadingUpdateList }] = useMutation(
    MUTATION_UPDATE_FAVORITO,
    {
      onCompleted: (data) => {
        if (data) {
          setWishlistItems(
            data.updateFavorito?.data?.attributes?.produtos?.data || []
          )
        }
      }
    }
  )

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
    setWishlistItems(data?.favoritos?.data[0]?.attributes.produtos?.data ?? [])
    setWishlistId(data?.favoritos?.data[0]?.id ?? null)
  }, [data])

  const wishlistIds = useMemo(
    () => wishlistItems.map((produto) => produto.id),
    [wishlistItems]
  )

  const isInWishlist = (id: string) =>
    wishlistItems.some((produto) => produto.id === id)

  const optimisticGameResponse = (id: string) => {
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

  const addToWishlist = (id: string) => {
    // se não existir wishlist - cria
    if (!wishlistId) {
      return createList({
        variables: { data: { produtos: [id] } },
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
          user: session?.user?.id,
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

  const removeFromWishlist = (id: string) => {
    console.log('removeFromWishlist')
    return updateList({
      variables: {
        id: wishlistId || '',
        data: {
          user: session?.user?.id,
          produtos: [
            ...wishlistIds.filter((produtoId: string) => produtoId !== id)
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
