'use client'

import Image from 'next/image'
import { getImageUrl } from '@/utils/getImageUrl'
import Fancybox from './Fancybox'
import Carousel from './Carousel'
import {
  Maybe,
  ProdutoGaleriaArgs,
  UploadFileRelationResponseCollection
} from '@/graphql/types'

type GalleryProps = {
  items: {
    id: string
    attributes: {
      url: string
      name: string
      width: number
      height: number
    }
  }[]
}

const Gallery = ({ items }: GalleryProps) => {
  return (
    // items.map
    <>
      <Fancybox
        options={{
          Carousel: {
            infinite: false
          }
        }}
      >
        <Carousel options={{ infinite: false }}>
          {items.map((item, index) => (
            <div
              className="f-carousel__slide"
              data-fancybox="gallery"
              data-src={getImageUrl(item.attributes.url)}
              data-thumb-src={getImageUrl(item.attributes.url)}
              key={'gallery_' + index}
            >
              <Image
                alt={item.attributes.name}
                src={getImageUrl(item.attributes.url)}
                width={item.attributes.width}
                height={item.attributes.height}
              />
            </div>
          ))}
        </Carousel>
      </Fancybox>
    </>
  )
}

export default Gallery
