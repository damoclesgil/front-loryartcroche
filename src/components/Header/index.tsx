import Link from 'next/link'
import * as S from './styles'

const Header = () => (
  <S.Wrapper>
    <Link href="/">Inicio</Link>|<Link href="/produtos">Produtos</Link>
  </S.Wrapper>
)

export default Header
