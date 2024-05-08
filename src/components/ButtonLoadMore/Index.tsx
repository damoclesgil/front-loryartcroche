'use server'

import { Button } from '@/components/ui/button'

type ButtonLoadMoreProps = {
  loading: false
  loadMore: () => void
}

const ButtonLoadMore = ({ loading, loadMore }: ButtonLoadMoreProps) => {
  return (
    <>
      <Button loading={loading} disabled={loading} onClick={loadMore}>
        Carregar Mais
      </Button>
    </>
  )
}

export default ButtonLoadMore
