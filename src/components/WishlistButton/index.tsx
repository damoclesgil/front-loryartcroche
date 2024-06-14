import { Button } from '../ui/button'
import { idProduto, useWishlist } from '@/hooks/use-wishlist'
import { Icon } from '@iconify/react'
// import { ProdutoEntity } from '@/graphql/types'
export type theIdProduto = { id: string }

const WishlistButton = ({ id }: theIdProduto) => {
  const {
    isInWishlist,
    addToWishlist,
    removeFromWishlist,
    loading: loadingApollo
  } = useWishlist()

  const handleClick = (e: React.FormEvent<HTMLButtonElement>) => {
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
          <Icon icon="material-symbols:favorite" fontSize={25} />
        ) : (
          <Icon icon="material-symbols:favorite-outline" fontSize={25} />
        ))}
    </Button>
  )
}

export default WishlistButton
