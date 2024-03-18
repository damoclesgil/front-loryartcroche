import NextAuth from 'next-auth'
// import { AdapterSession, AdapterUser } from 'next-auth/adapters'
// import EmailProvider from 'next-auth/providers/email'
import CredentialsProvider from 'next-auth/providers/credentials'

export const {
  handlers: { GET, POST },
  auth
} = NextAuth({
  pages: {
    // signIn: '/sign-in'
    signIn: '/auth'
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {},
      async authorize({ email, password }) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/local`,
          {
            method: 'POST',
            body: new URLSearchParams({ identifier: email, password })
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
})

// const Auth = (req: NextApiRequest, res: NextApiResponse) =>
//   NextAuth(req, res, options)

// export default Auth
