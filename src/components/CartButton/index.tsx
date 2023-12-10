import {
  AddShoppingCart
  // RemoveShoppingCart
} from '@styled-icons/material-outlined'

import Button, { ButtonProps } from '@/components/Button'
// import { useCart } from '@/hooks/use-cart'

type CartButtonProps = {
  id: string
  hasText?: boolean
} & Pick<ButtonProps, 'size'>

const CartButton = ({
  id,
  size = 'small',
  hasText = false
}: CartButtonProps) => {
  // const { isInCart, addToCart, removeFromCart } = useCart()
  // const ButtonText = isInCart(id) ? 'Remove from cart' : 'Add to cart'
  const ButtonText = 'Add to cart'

  return (
    // icon={isInCart(id) ? <RemoveShoppingCart /> : <AddShoppingCart />}
    // onClick={() => (isInCart(id) ? removeFromCart(id) : addToCart(id))}
    <Button
      id={id}
      icon={<AddShoppingCart />}
      size={size}
      aria-label={ButtonText}
    >
      {hasText && ButtonText}
    </Button>
  )
}

export default CartButton
