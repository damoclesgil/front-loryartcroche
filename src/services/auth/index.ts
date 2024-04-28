import NextAuth from 'next-auth'
// import EmailProvider from 'next-auth/providers/email'
import CredentialsProvider from 'next-auth/providers/credentials'
import Google from '@auth/core/providers/google'
import type { NextAuthConfig } from 'next-auth'
import { NextRoutes } from '@/utils/constant'

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
        console.log('data', data)
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
    signIn: NextRoutes.signIn,
    signOut: NextRoutes.signUp,
    error: NextRoutes.signIn,
    verifyRequest: NextRoutes.signIn,
    newUser: NextRoutes.home
  },
  // basePath: '/api/auth',
  callbacks: {
    async session({ session, token }: { session: any; token: any }) {
      session.address = token.sub
      session.user.name = token.name
      session.jwt = token.jwt
      return Promise.resolve(session)
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.username
        token.jwt = user.jwt
      }
      return Promise.resolve(token)
    }
  }
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config)
