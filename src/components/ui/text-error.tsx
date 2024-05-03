'use client'
import * as React from 'react'

import { cn } from '@/utils/utils'

const TextError = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('pl-0.5 text-xs text-red-500', className)}
    {...props}
  />
))
TextError.displayName = 'TextError'

export { TextError }
