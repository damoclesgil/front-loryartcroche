import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import { Container } from '@/components/Container'
import StyledComponentsRegistry from '@/lib/registry'
import { Providers } from './providers'
// import Header from '@/components/Header'
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'

// const inter = Inter({ subsets: ['latin'] })
import * as S from './styles'

export const metadata: Metadata = {
  title: 'Lory Art Crochê',
  description: 'Artes de Crochê'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      {/*  className={inter.className} */}
      <body>
        <StyledComponentsRegistry>
          <Providers>
            <Container>
              <Menu username="damoclesgil" loading={false} />
            </Container>
            {/* <Header /> */}

            <S.Content>{children}</S.Content>
            <S.SectionFooter>
              <Container>
                <Footer />
              </Container>
            </S.SectionFooter>
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
