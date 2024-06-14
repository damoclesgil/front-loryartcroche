import { Button } from '../ui/button'
import { useCart } from '@/hooks/use-cart'
import { toast } from '@/components/ui/use-toast'
import { Icon } from '@iconify/react'

type CartProps = {
  id: string
}

const CartButton = ({ id }: CartProps) => {
  const { isInCart, addToCart, removeFromCart } = useCart()

  const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    toast({
      variant: 'default',
      title: isInCart(id)
        ? 'Removido do carrinho com sucesso!'
        : 'Adicionado ao carrinho com sucesso!',
      description: isInCart(id)
        ? 'Este produto foi removido do carrinho.'
        : 'Este produto foi adicionado ao carrinho.'
    })
    return isInCart(id) ? removeFromCart(id) : addToCart(id, 1)
  }

  return (
    <Button
      variant="link"
      size="icon"
      title={isInCart(id) ? 'remover do carrinho' : 'adicionar ao carrinho'}
      className="hover:no-underline bg-white rounded-full mr-2 mt-2"
      onClick={handleClick}
    >
      {isInCart(id) ? (
        <Icon
          icon="material-symbols:shopping-cart-off-outline-rounded"
          fontSize={25}
        />
      ) : (
        <Icon icon="material-symbols:add-shopping-cart-rounded" fontSize={25} />
      )}
    </Button>
  )
}

export default CartButton
