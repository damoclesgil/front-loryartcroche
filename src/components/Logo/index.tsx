import Image from 'next/image'
import * as S from './styles'

export type LogoProps = {
  color?: 'white' | 'black'
  size?: 'normal' | 'large'
  hideOnMobile?: boolean
  id?: string
}

const Logo = ({
  id = 'logo',
  color = 'white',
  size = 'normal',
  hideOnMobile = false
}: LogoProps) => (
  <S.Wrapper color={color} size={size} hideOnMobile={hideOnMobile}>
    <Image
      width={215}
      height={60}
      alt="Logo Lory Art e Crochê"
      id={id}
      src="/img/logo_LoryArtCrocheColorida.png"
    />
  </S.Wrapper>
)

export default Logo
