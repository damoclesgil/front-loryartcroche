import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'
import { Button } from '../ui/button'
import { idProduto, useWishlist } from '@/hooks/use-wishlist'
// import { ProdutoEntity } from '@/graphql/types'
export type theIdProduto = { id: string }

const WishlistButton = ({ id }: theIdProduto) => {
  const {
    isInWishlist,
    addToWishlist,
    removeFromWishlist,
    loading: loadingApollo
  } = useWishlist()

  const handleClick = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    return isInWishlist(id) ? removeFromWishlist(id) : addToWishlist(id)
  }

  return (
    <Button
      variant="link"
      size="icon"
      className="hover:no-underline bg-white rounded-full mr-2 mt-2"
      onClick={handleClick}
      loading={loadingApollo}
      title={isInWishlist(id) ? 'desfavoritar' : 'favoritar'}
      disabled={loadingApollo}
    >
      {!loadingApollo &&
        (isInWishlist(id) ? (
          <Favorite size={25} />
        ) : (
          <FavoriteBorder size={25} />
        ))}
    </Button>
  )
}

export default WishlistButton
