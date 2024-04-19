'use client'

import Image from 'next/image'
import { getImageUrl } from '@/utils/getImageUrl'
import Fancybox from './Fancybox'
import Carousel from './Carousel'
import {
  Maybe,
  Scalars,
  UploadFile,
  UploadFileEntity,
  UploadFileEntityResponse,
  UploadFileRelationResponseCollection
} from '@/graphql/types'

type GalleryProps = {
  items: {
    id?: Maybe<Scalars['ID']['output']>
    attributes?: Maybe<UploadFile>
  }[]
}
// UploadFileEntity

const Gallery = ({ items }: GalleryProps) => {
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
          {items.map((item, index) => (
            <div
              className="f-carousel__slide cursor-pointer"
              data-fancybox="gallery"
              data-src={getImageUrl(item.attributes?.url)}
              data-thumb-src={getImageUrl(item.attributes?.url)}
              key={'gallery_' + index}
            >
              <Image
                alt={item.attributes?.name || ''}
                src={getImageUrl(item.attributes?.url)}
                width={item.attributes?.width || 200}
                height={item.attributes?.height || 200}
              />
            </div>
          ))}
        </Carousel>
      </Fancybox>
    </>
  )
}

export default Gallery
