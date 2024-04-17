'use client'

import { ApolloLink, HttpLink } from '@apollo/client'
import {
  NextSSRApolloClient,
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  SSRMultipartLink
} from '@apollo/experimental-nextjs-app-support/ssr'
import { loadErrorMessages, loadDevMessages } from '@apollo/client/dev'
import { setVerbosity } from 'ts-invariant'
import { setContext } from '@apollo/client/link/context'
import { getSession } from 'next-auth/react'
import { concatPagination } from '@apollo/client/utilities'

if (process.env.NODE_ENV === 'development') {
  setVerbosity('debug')
  loadDevMessages()
  loadErrorMessages()
}

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`
})

const authLink = setContext(async (_, { headers }) => {
  let session = await getSession()

  // const token = request.cookies.get('authjs.session-token')

  const authorization = session ? `Bearer ${session.jwt}` : ``
  return {
    headers: {
      ...headers,
      authorization
    }
  }
})

function makeClient() {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache({
      addTypename: false
      // typePolicies: {
      //   Query: {
      //     fields: {
      //       produtos: concatPagination()
      //     }
      //   }
      // }
    }),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true
            }),
            authLink
          ])
        : authLink.concat(httpLink)
  })
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  )
}
