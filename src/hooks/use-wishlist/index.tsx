import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { GET_FAVORITOS, useQueryFavoritos } from '@/graphql/queries/favoritos'
import { useApolloClient, useMutation } from '@apollo/client'
import {
  Favorito,
  GetFavoritosQuery,
  Maybe,
  MutationCreateFavoritoMutation,
  MutationCreateFavoritoMutationResult,
  ProdutoFragmentFragment,
  ProdutoFragmentFragmentDoc,
  useMutationCreateFavoritoMutation,
  useUpdateFavoritoMutation
} from '@/graphql/types'
import { useSession } from 'next-auth/react'

import { Produto } from '@/graphql/types'

export type idProduto = Produto['documentId']

export type WishlistContextData = {
  items: Produto[]
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
  const [wishlistItems, setWishlistItems] = useState<Array<Maybe<Produto>>>([])
  const apolloClient = useApolloClient()

  // wishlistItems[0].createFavorito?.produtos

  const [createList, { loading: loadingCreate }] =
    useMutationCreateFavoritoMutation({
      onCompleted: (resultCreateFavorito) => {
        // @ts-ignore
        setWishlistItems(resultCreateFavorito.createFavorito.produtos || [])
        setWishlistId(resultCreateFavorito?.createFavorito?.documentId)
      }
    })

  const [updateList, { loading: loadingUpdateList }] =
    useUpdateFavoritoMutation({
      onCompleted: (data) => {
        if (data) {
          // @ts-ignore
          setWishlistItems(data.updateFavorito?.produtos || [])
        }
      }
    })

  // const [createList, { loading: loadingCreate }] = useMutation(
  //   MUTATION_CREATE_FAVORITO,
  //   {
  //     onCompleted: (data) => {
  //       setWishlistItems(data?.createFavorito?.produtos || [])
  //       setWishlistId(data?.createFavorito?.documentId)
  //     }
  //   }
  // )

  // const [updateList, { loading: loadingUpdateList }] = useMutation(
  //   MUTATION_UPDATE_FAVORITO,
  //   {
  //     onCompleted: (data) => {
  //       if (data) {
  //         setWishlistItems(data.updateFavorito?.produtos?.data || [])
  //       }
  //     }
  //   }
  // )

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
    setWishlistItems(data?.favoritos[0]?.produtos ?? [])
    setWishlistId(data?.favoritos[0]?.documentId ?? null)
  }, [data])

  const wishlistIds = useMemo(
    () => wishlistItems.map((produto) => produto?.documentId),
    [wishlistItems]
  )

  const isInWishlist = (id: idProduto) =>
    wishlistItems.some((produto) => produto?.documentId === id)

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
          const newWishlist = payload.data?.createFavorito?.produtos

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
    console.log('removeFromWishlist')
    return updateList({
      variables: {
        documentId: wishlistId || '',
        // @ts-ignore
        user: session?.user?.id,
        produtos: [
          // @ts-ignore
          ...wishlistIds.filter((produtoId: idProduto) => produtoId !== id)
        ]
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
        // @ts-ignore
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
