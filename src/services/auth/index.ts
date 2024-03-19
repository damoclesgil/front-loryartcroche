import NextAuth from 'next-auth'
// import { AdapterSession, AdapterUser } from 'next-auth/adapters'
// import EmailProvider from 'next-auth/providers/email'
import CredentialsProvider from 'next-auth/providers/credentials'
import type { NextAuthConfig } from 'next-auth'
import { strategy } from 'sharp'

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
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      // https://authjs.dev/getting-started/providers/credentials-tutorial
      credentials: {
        // email: {
        //   label: 'E-mail',
        //   type: 'text',
        //   placeholder: 'damoclesgil@gmail.com'
        // },
        // password: { label: 'password', type: 'password' }
      },
      async authorize(credentials: any) {
        console.log('credentials', credentials)

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
        // console.log('data', data)
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
  pages: {
    signIn: '/auth',
    signOut: '/auth',
    error: '/auth',
    verifyRequest: '/auth',
    newUser: '/'
  },
  basePath: '/api/auth',
  callbacks: {
    async session({ session, token }: { session: any; token: any }) {
      console.log('token', token)
      console.log('session', session)
      session.address = token.sub
      session.user.name = token.name
      session.user.image = 'https://www.fillmurray.com/128/128'
      return session
    },
    // async session({ session, user }) {
    //   session.jwt = user.jwt
    //   session.id = user.id
    //   console.log('session', session)
    //   console.log('user', user)
    //   return Promise.resolve(session)
    // },

    // session(params) {
    //   console.log('params', params?.session)
    //   return Promise.resolve(params.session)
    // },
    // session: async (session: Session, user: User) => {
    //   console.log(session)
    //   session.jwt = user.jwt
    //   session.id = user.id

    //   return Promise.resolve(session)
    // },
    // authorized({ request, auth }) {
    //   const { pathname } = request.nextUrl
    //   console.log(pathname)
    //   // if (pathname === '/middleware-example') return !!auth
    //   return true
    // },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.username
        token.jwt = user.jwt
      }
      console.log('token jwt', token)
      console.log('user jwt', user)
      // return token
      return Promise.resolve(token)
      // if (trigger === 'update') token.name = session.user.name
    }
  }
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth(config)

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
