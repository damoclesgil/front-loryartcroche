import type { Metadata } from 'next'
import { Montserrat, Playfair_Display } from 'next/font/google'
import './globals.css'
import Providers from './providers'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ApolloWrapper } from '@/utils/apollo/apolloWrapper'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from '@/components/ui/toaster'
import { defaultMetadata, links } from '@/utils/constant'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
})
const playfair_display = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: {
    absolute: '',
    default: defaultMetadata.title || '',
    template: `%s | ${defaultMetadata.title}`
  },
  keywords: ['Lory Art', 'Bolsas', 'Crochê'],
  authors: [
    { name: 'damoclesgil' },
    { name: 'loryartcroche', url: links.websiteUrl }
  ],
  publisher: 'Dâmocles Gil Marçal',
  creator: 'Dâmocles Gil Marçal',
  description: defaultMetadata.description,
  openGraph: {
    title: defaultMetadata.title || '',
    url: links.websiteUrl,
    description: defaultMetadata.description,
    images: [
      {
        url: '/og-image-lory-art-croche.jpg',
        width: 1200,
        height: 630
      }
    ],
    locale: 'pt_BR',
    type: 'website'
  }
}

/* RUN IN A SERVER SIDE */
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.variable} ${playfair_display.variable}`}>
        <SessionProvider>
          <ApolloWrapper>
            <Providers>{children}</Providers>
            <Toaster />
          </ApolloWrapper>
        </SessionProvider>
        <SpeedInsights />
        {/* <script
          src="https://static.elfsight.com/platform/platform.js"
          data-use-service-core
          defer
          async
        ></script> */}

        {/* Api da lightwidget */}
        {/* <script
          src="https://cdn.lightwidget.com/widgets/lightwidget.js"
          async
        ></script> */}
      </body>
    </html>
  )
}
