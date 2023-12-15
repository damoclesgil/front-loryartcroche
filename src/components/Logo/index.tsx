import Image from 'next/image'
import LogoLoryArtCroche from './logo_LoryArtCrocheColorida.png'

export type LogoProps = {
  size?: 'small' | 'normal'
}

const Logo = ({ size = 'normal' }: LogoProps) => {
  return (
    <div className="relative flex place-items-center">
      {size === 'small' && (
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert w-full h-[4.2rem]"
          src={LogoLoryArtCroche}
          alt="Lory Art Crochê Logo"
          priority
        />
      )}
      {size === 'normal' && (
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert h-40"
          src={LogoLoryArtCroche}
          alt="Lory Art Crochê Logo"
          priority
        />
      )}
    </div>
  )
}
export default Logo
