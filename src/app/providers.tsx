'use client'

import { PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'
import StyledComponentsRegistry from '@/lib/registry'

import GlobalStyles from '@/styles/global'
import theme from '../styles/theme'
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloProvider
} from '@apollo/client'

export function Providers({ children }: PropsWithChildren) {
  const client = new ApolloClient({
    link: new HttpLink({
      uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`
    }),
    cache: new InMemoryCache()
  })

  return (
    <>
      <ApolloProvider client={client}>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            {children}
            <GlobalStyles />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </ApolloProvider>
    </>
  )
}
