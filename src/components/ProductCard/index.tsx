import Link from 'next/link'
import * as S from './styles'
import formatPrice from '@/utils/format-price'
import CartButton from '../CartButton'
// import WishlistButton from '../WishlistButton'
// import Image from 'next/image'
// import { getImageUrl } from '@/utils/getImageUrl'

export type ProductCardProps = {
  id: string
  slug: string
  name: string
  img: string
  price: number
}

const ProductCard = ({ id, slug, name, img, price }: ProductCardProps) => (
  <S.Wrapper>
    <Link href={`produtos/${slug}`} passHref legacyBehavior>
      <S.ImageBox>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img} alt={name} />
      </S.ImageBox>
    </Link>
    <S.Content>
      <Link href={`produtos/${slug}`} passHref legacyBehavior>
        <S.Info>
          <S.Title>{name}</S.Title>
        </S.Info>
      </Link>
      {/* <S.FavButton>
        <WishlistButton id={id} />
      </S.FavButton> */}
      <S.BuyBox>
        {!!price && <S.Price isPromotional>{formatPrice(price)}</S.Price>}
        <S.Price>{formatPrice(price)}</S.Price>
        <CartButton id={id} />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default ProductCard
