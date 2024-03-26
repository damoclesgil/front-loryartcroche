'use client'

// import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
// import Link from 'next/link'
import { FormSignUp } from './FormSignUp'
import { FormSignIn } from './FormSignIn'
import Auth from '@/templates/Auth'

export function AuthForm() {
  const [isLoginPage, setLoginPage] = useState(true)

  const loginOrSignUp = () => {
    if (isLoginPage) {
      setLoginPage(false)
    } else {
      setLoginPage(true)
    }
  }

  return (
    <Auth>
      {isLoginPage ? <FormSignIn /> : <FormSignUp />}

      <Button
        variant="link"
        className="pt-2 block m-auto pl-2"
        onClick={() => loginOrSignUp()}
      >
        {isLoginPage ? 'Não possui conta?' : 'Já possui conta?'}
      </Button>
    </Auth>
  )
}
