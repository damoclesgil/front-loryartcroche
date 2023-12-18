import { ButtonHTMLAttributes, forwardRef } from 'react'

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium'
  fullWidth?: boolean
  as?: React.ElementType
  href?: string
  target?: '_self' | '_blank'
} & ButtonTypes

const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  as = 'button',
  href,
  target = '_blank'
}: ButtonProps) => (
  <>
    {as === 'a' ? (
      <a
        href={href}
        target={target}
        className={`inline-flex items-center justify-center bg-primary hover:bg-primary-darker transition-colors duration-150 border-0 cursor-pointer  no-underline px-4 ${
          size === 'medium' && 'h-8 text-md'
        } ${fullWidth === false && 'rounded-md'}`}
      >
        {!!children && <span>{children}</span>}
      </a>
    ) : (
      <button
        className={`inline-flex items-center justify-center bg-primary hover:bg-primary-darker transition-colors duration-150 border-0 cursor-pointer  no-underline px-4 ${
          size === 'medium' && 'h-8 text-md'
        } ${fullWidth === false && 'rounded-md'}`}
      >
        {!!children && <span>{children}</span>}
      </button>
    )}
  </>
)

export default forwardRef(Button)
