import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

// export type LineColors = 'primary' | 'secondary'

const headingVariants = cva('font-semibold', {
  variants: {
    size: {
      small: 'text-xs',
      medium: 'text-lg ',
      huge: 'text-xl lg:text-2xl'
    }
  }
})

export type HeadingProps = {
  children: React.ReactNode
  size?: 'small' | 'medium' | 'huge'
  className?: string | undefined
}

const Heading = ({
  children,
  size = 'huge',
  className,
  ...props
}: HeadingProps) => {
  const Comp = size === 'small' ? 'h2' : 'h1'
  return (
    <Comp className={cn(headingVariants({ size }), className)} {...props}>
      {children}
    </Comp>
  )
}

export default Heading
