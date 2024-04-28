'use client'

import Image from 'next/image'
import { getImageUrl } from '@/utils/getImageUrl'
import Fancybox from './Fancybox'
import Carousel from './Carousel'
import { Produto } from '@/graphql/types'

const Gallery = ({ galeria }: Pick<Produto, 'galeria'>) => {
  return (
    <>
      <Fancybox
        options={{
          Carousel: {
            infinite: false
          }
        }}
      >
        <Carousel options={{ infinite: false }}>
          {galeria.map((item, index) => (
            <div
              className="f-carousel__slide cursor-pointer"
              data-fancybox="gallery"
              data-src={getImageUrl(item?.url)}
              data-thumb-src={getImageUrl(item?.url)}
              key={'gallery_' + index}
            >
              <Image
                alt={item?.name || ''}
                src={getImageUrl(item?.url)}
                width={item?.width || 200}
                height={item?.height || 200}
              />
            </div>
          ))}
        </Carousel>
      </Fancybox>
    </>
  )
}

export default Gallery
