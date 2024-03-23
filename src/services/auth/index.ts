import NextAuth from 'next-auth'
// import { AdapterSession, AdapterUser } from 'next-auth/adapters'
// import EmailProvider from 'next-auth/providers/email'
import CredentialsProvider from 'next-auth/providers/credentials'
// import type { NextAuthOptions } from 'next-auth'
// import { NextApiRequest, NextApiResponse } from 'next-auth/internals/utils'
// import google from 'next-auth/providers/google'
import Google from '@auth/core/providers/google'
import type { NextAuthConfig } from 'next-auth'

declare module 'next-auth' {
  interface User {
    /** The user's postal address. */
    // id: string
    jwt: string
    username: string
  }
  interface Session {
    /** The user's postal address. */
    id: string
    jwt: string
  }
}

export type AuthStrapi = {
  identifier: string
  password: string
}

export const config = {
  theme: {
    logo: 'https://next-auth.js.org/img/logo/logo-sm.png'
  },
  providers: [
    Google({
      name: 'google',
      clientId: process.env.NEXT_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_GOOGLE_CLIENT_SECRET
    }),
    CredentialsProvider({
      name: 'credentials',
      // https://authjs.dev/getting-started/providers/credentials-tutorial
      credentials: {},
      async authorize(credentials: any) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`,
          {
            method: 'POST',

            body: new URLSearchParams({
              identifier: credentials.identifier,
              password: credentials.password
            })
          }
        )
        const data = await response.json()
        if (data.user) {
          return { ...data.user, jwt: data.jwt }
        } else {
          return null
        }
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/auth',
    signOut: '/auth',
    error: '/auth',
    verifyRequest: '/auth',
    newUser: '/'
  },
  // basePath: '/api/auth',
  callbacks: {
    async session({ session, token }: { session: any; token: any }) {
      session.address = token.sub
      session.user.name = token.name
      // session.user.image = 'https://www.fillmurray.com/128/128'
      // console.log('token from callback session', token)
      // console.log('session from callback session', session)
      return session
      // return Promise.resolve(session)
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.username
        token.jwt = user.jwt
      }
      return Promise.resolve(token)
      // if (trigger === 'update') token.name = session.user.name
    }
  }
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config)

// const Auth = (req: any, res: any) => NextAuth(req, res, config)

// export default Auth

// export const { handlers, auth, signIn, signOut } = NextAuth(config)

/* 

  callbacks: {
    // session({ session, user }) {
    //   session.jwt = user.jwt
    //   session.id = user.id
    //   return Promise.resolve(session)
    // },
    session: async (session, user) => {
      session.jwt = user.jwt
      session.id = user.id
      return Promise.resolve(session)
    },
    jwt: async (token, user) => {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.username
        token.jwt = user.jwt
      }
      return Promise.resolve(token)
    }
  }
*/
