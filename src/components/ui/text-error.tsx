'use client'
import * as React from 'react'

import { cn } from '@/lib/utils'

const TextError = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('pl-0.5 text-sm text-red-500', className)}
    {...props}
  />
))
TextError.displayName = 'TextError'

export { TextError }
