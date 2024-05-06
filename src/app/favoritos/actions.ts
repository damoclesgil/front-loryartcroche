'use server'

import { GetFavoritosDocument } from '@/graphql/types'
import { auth } from '@/services/auth'
import { getClient } from '@/utils/apollo/apollo'
import { normalize } from '@/utils/mappers'

export async function useFavoritosAction() {
  let session = await auth()

  const { data, error, loading } = await getClient().query({
    query: GetFavoritosDocument,
    context: {
      headers: {
        authorization: session ? `Bearer ${session.jwt}` : ``
      }
    },
    variables: {
      filters: {
        user: {
          email: {
            contains: session?.user?.email as string
          }
        }
      }
    },
    fetchPolicy: 'no-cache'
  })

  return {
    data: normalize(data),
    loading,
    error
  }
}
