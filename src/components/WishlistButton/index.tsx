import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'
import { Button } from '../ui/button'
import { useWishlist } from '@/hooks/use-wishlist'

type WishlistButtonProps = {
  id: string
}

const WishlistButton = ({ id }: WishlistButtonProps) => {
  //   const [session] = useSession()

  const {
    isInWishlist,
    addToWishlist,
    removeFromWishlist,
    loading: loadingApollo
  } = useWishlist()

  const handleClick = () => {
    console.log(id, 'prevent')
    return isInWishlist(id) ? removeFromWishlist(id) : addToWishlist(id)
  }

  //   const ButtonText = isInWishlist(id)
  //     ? 'Remove from Wishlist'
  //     : 'Add to Wishlist'

  //   if (!session) return null

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
