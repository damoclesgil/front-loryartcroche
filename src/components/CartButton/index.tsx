import {
  AddShoppingCart,
  RemoveShoppingCart
} from '@styled-icons/material-outlined'
import { Button } from '../ui/button'
import { useWishlist } from '@/hooks/use-wishlist'

type CartnProps = {
  id: string
}

const CartButton = ({ id }: CartnProps) => {
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

  return (
    <Button
      variant="link"
      size="icon"
      className="hover:no-underline bg-white rounded-full mr-2 mt-2"
      onClick={handleClick}
      loading={loadingApollo}
    >
      {isInWishlist(id) ? (
        <RemoveShoppingCart size={25} />
      ) : (
        <AddShoppingCart size={25} />
      )}
    </Button>
  )
}

export default CartButton
