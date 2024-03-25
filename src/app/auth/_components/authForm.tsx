'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
// import Link from 'next/link'
import { FormSignUp } from './FormSignUp'
import { FormSignIn } from './FormSignIn'

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
    <div className="flex justify-center items-center w-full h-[100vh]">
      <Card className="w-full max-w-md pb-4">
        {/* <Link href="/client-example" className="mb-2 pt-2 block pl-2">
          Teste Session
        </Link> */}
        {isLoginPage ? <FormSignIn /> : <FormSignUp />}

        <Button
          variant="link"
          className="pt-2 block m-auto pl-2"
          onClick={() => loginOrSignUp()}
        >
          {isLoginPage ? 'Não possui conta?' : 'Já possui conta?'}
        </Button>
      </Card>
    </div>
  )
}
