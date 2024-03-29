import Image from 'next/image'
// import LogoLoryArtCroche from 'img/logo/logo_LoryArtCrocheColorida.png'

export type LogoProps = {
  size?: 'small' | 'normal'
}

const Logo = ({ size = 'normal' }: LogoProps) => {
  return (
    <div className="relative flex place-items-center">
      {size === 'small' && (
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert w-full h-[4.2rem]"
          src="/img/logo/logo_LoryArtCrocheColorida.png"
          alt="Lory Art Crochê Logo"
          width={70}
          height={70}
          priority
        />
      )}
      {size === 'normal' && (
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert h-40 object-contain"
          src="/img/logo/logo_LoryArtCrocheColorida.png"
          alt="Lory Art Crochê Logo"
          width={160}
          height={160}
          priority
        />
      )}
    </div>
  )
}
export default Logo
