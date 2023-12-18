import { ButtonHTMLAttributes, forwardRef } from 'react'

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium'
  fullWidth?: boolean
  as?: React.ElementType
  href?: string
} & ButtonTypes

const Button = ({
  children,
  size = 'medium',
  fullWidth = false,
  as = 'button',
  href
}: ButtonProps) => (
  <>
    {as === 'a' ? (
      <a
        href={href}
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
