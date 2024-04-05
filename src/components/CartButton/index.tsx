import {
  AddShoppingCart,
  RemoveShoppingCart
} from '@styled-icons/material-outlined'
import { Button } from '../ui/button'
import { useCart } from '@/hooks/use-cart'

type CartProps = {
  id: string
}

const CartButton = ({ id }: CartProps) => {
  const { isInCart, addToCart, removeFromCart } = useCart()

  const handleClick = () => {
    console.log(id, 'prevent')
    return isInCart(id) ? removeFromCart(id) : addToCart(id)
  }

  return (
    <Button
      variant="link"
      size="icon"
      className="hover:no-underline bg-white rounded-full mr-2 mt-2"
      onClick={handleClick}
    >
      {isInCart(id) ? (
        <RemoveShoppingCart size={25} />
      ) : (
        <AddShoppingCart size={25} />
      )}
    </Button>
  )
}

export default CartButton
