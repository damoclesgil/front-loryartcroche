import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium'
  fullWidth?: boolean
  as?: React.ElementType
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<ButtonProps> = (
  { children, size = 'medium', fullWidth = false, ...props },
  ref
) => (
  <button
    className={`inline-flex items-center justify-center bg-primary hover:bg-primary-darker transition-colors duration-150 border-0 cursor-pointer  no-underline px-4 ${
      size === 'medium' && 'h-8 text-md'
    } ${fullWidth === false && 'rounded-md'}`}
    {...props}
  >
    {children}
  </button>
)

export default forwardRef(Button)

// const Button: React.ForwardRefRenderFunction<ButtonProps> = (
//   { children, size = 'medium', fullWidth = false, ...props },
//   ref
// ) => (
//   <button
//     className={`inline-flex items-center justify-center bg-primary hover:bg-primary-darker transition-colors duration-150 border-0 cursor-pointer  no-underline px-4 ${
//       size === 'medium' && 'h-8 text-md'
//     } ${fullWidth === false && 'rounded-md'}`}
//     {...props}
//   >
//     {children}
//   </button>
// )

// export default forwardRef(Button)
