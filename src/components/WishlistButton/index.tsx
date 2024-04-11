import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'
import { Button } from '../ui/button'
import { useWishlist } from '@/hooks/use-wishlist'

type WishlistButtonProps = {
  id: string
}

const WishlistButton = ({ id }: WishlistButtonProps) => {
  const {
    isInWishlist,
    addToWishlist,
    removeFromWishlist,
    loading: loadingApollo
  } = useWishlist()

  const handleClick = () => {
    return isInWishlist(id) ? removeFromWishlist(id) : addToWishlist(id)
  }

  return (
    <Button
      variant="link"
      size="icon"
      className="hover:no-underline bg-white rounded-full mr-2 mt-2"
      onClick={handleClick}
      loading={loadingApollo}
      disabled={loadingApollo}
    >
      {isInWishlist(id) ? <Favorite size={25} /> : <FavoriteBorder size={25} />}
    </Button>
  )
}

export default WishlistButton
