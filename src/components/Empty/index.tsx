import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

export type EmptyProps = {
  title: string
  description: string
  hasLink?: boolean
}

const Empty = ({ title, description, hasLink }: EmptyProps) => (
  <div className="text-center flex justify-center items-center flex-col">
    <Image
      src="/img/empty.svg"
      alt="Nenhum Produto Encontrado"
      width={380}
      height={285}
    />

    <h2 className="text-lg">{title}</h2>
    <p className="text-md">{description}</p>

    {hasLink && (
      <Button asChild variant={'link'}>
        <Link href="/">Go back to store</Link>
      </Button>
    )}
  </div>
)

export default Empty
