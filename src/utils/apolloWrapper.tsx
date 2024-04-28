'use client'

import { ApolloLink, from, HttpLink, InMemoryCache } from '@apollo/client'
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
// import { removeTypenameFromVariables } from '@apollo/client/link/remove-typename'
// const removeTypenameLink = removeTypenameFromVariables()

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

  const authorization = session ? `Bearer ${session.jwt}` : ``
  return {
    headers: {
      ...headers,
      authorization
    }
  }
})

// const theLink = from([removeTypenameLink, authLink.concat(httpLink)])
const theLink = authLink.concat(httpLink)

function makeClient() {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache({
      addTypename: false,
      typePolicies: {
        Query: {
          fields: {
            produtos: concatPagination()
            // produtos: {
            //   keyArgs: false,
            //   // // https://stackoverflow.com/questions/65127544/apolloclient-v3-fetchmore-with-nested-query-results
            //   // merge(existing, incoming) {
            //   //   if (!incoming) return existing
            //   //   if (!existing) return incoming
            //   //   const { data, ...rest } = incoming
            //   //   let result = rest
            //   //   result.data = [...existing.data, ...data]
            //   //   return result
            //   // }
            // }
          }
        }
      }
    }),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true
            }),
            authLink
          ])
        : theLink
  })
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  )
}
