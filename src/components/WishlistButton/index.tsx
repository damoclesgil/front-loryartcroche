// import { useWishlist } from 'hooks/use-wishlist'

import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'
import { Button } from '../ui/button'

type WishlistButtonProps = {
  id: string
}

const WishlistButton = ({ id }: WishlistButtonProps) => {
  //   const [session] = useSession()

  //   const {
  //     isInWishlist,
  //     addToWishlist,
  //     removeFromWishlist,
  //     loading: loadingApollo
  //   } = useWishlist()

  const handleClick = () => {
    console.log(id)
    //   return isInWishlist(id) ? removeFromWishlist(id) : addToWishlist(id)
  }

  //   const ButtonText = isInWishlist(id)
  //     ? 'Remove from Wishlist'
  //     : 'Add to Wishlist'

  //   if (!session) return null

  return (
    <Button variant="link" className="hover:no-underline" onClick={handleClick}>
      <Favorite size={25} />
    </Button>
  )
}

export default WishlistButton
