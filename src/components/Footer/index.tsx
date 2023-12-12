'use client'

import Link from 'next/link'

import Heading from '@/components/Heading'
import Logo from '@/components/Logo'
import * as S from './styles'
import Button from '../Button'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading
          color="black"
          size="small"
          lineBottom={true}
          lineColor="secondary"
        >
          Entre em Contato
        </Heading>

        <a href="mailto:loryartcroche@gmail">loryartcroche@gmail.com</a>
      </S.Column>

      <S.Column aria-labelledby="social-media">
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Siga-nos
        </Heading>

        <nav id="social-media">
          <a
            href="https://www.instagram.com/loryartcroche"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com/loryartcroche"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.youtube.com/loryartcroche"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Youtube
          </a>
          <a
            href="https://www.facebook.com/loryartcroche"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="resources">
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Links
        </Heading>

        <nav id="resources">
          <Link href="/" legacyBehavior>
            <a>Início</a>
          </Link>
          <Link href="/produtos" legacyBehavior>
            <a>Produtos</a>
          </Link>
          <Link href="/search" legacyBehavior>
            <a>Buscar</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column aria-label="contact">
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Localização
        </Heading>
        <Button>tESTE</Button>
      </S.Column>
    </S.Content>

    <S.Copyright>
      Lory Art Crochê {currentYear} © Todos os direitos reservados.
    </S.Copyright>
  </S.Wrapper>
)

export default Footer
