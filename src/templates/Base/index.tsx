import Menu from '@/components/Menu'
import Footer from '@/components/Footer'
import { SessionProvider } from 'next-auth/react'
import { ApolloWrapper } from '@/utils/apolloWrapper'

const Base = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ApolloWrapper>
        <SessionProvider>
          <Menu />
          <div className="w-full max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 md:px-0">
            <div className="mt-10 flex-auto w-full">{children}</div>
            <Footer />
          </div>
        </SessionProvider>
      </ApolloWrapper>
    </>
  )
}

export default Base
