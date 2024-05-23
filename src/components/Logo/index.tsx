import Image from 'next/image'

export type LogoProps = {
  size?: 'small' | 'normal' | 'medium'
}

const Logo = ({ size = 'normal' }: LogoProps) => {
  return (
    <div className="relative flex place-items-center">
      {size === 'small' && (
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/img/logo/logo_LoryArtCrocheColorida.png"
          alt="Lory Art Crochê Logo"
          width={70}
          height={70}
          priority={false}
          style={{ width: '100%', height: 'auto' }}
        />
        // style={{ width: 'auto', height: '70px' }}
      )}
      {size === 'medium' && (
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert object-contain"
          src="/img/logo/logo_LoryArtCrocheColorida.png"
          alt="Lory Art Crochê Logo"
          width={112}
          height={112}
          priority={false}
          style={{ width: '100%', height: 'auto' }}
        />
      )}
      {size === 'normal' && (
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert object-contain"
          src="/img/logo/logo_LoryArtCrocheColorida.png"
          alt="Lory Art Crochê Logo"
          priority={false}
          width={160}
          loading="lazy"
          height={160}
          style={{ width: '100%', height: 'auto' }}
        />
        // style={{ width: '160px', height: '160px' }}
      )}
    </div>
  )
}
export default Logo
