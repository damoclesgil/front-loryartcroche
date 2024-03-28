'use client'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { NextRoutes } from '@/utils/constant'
import Link from 'next/link'

export function FormForgotPassword() {
  const onSubmit = () => {}
  return (
    <div className="mx-auto max-w-sm space-y-6">
      <CardHeader className="space-y-2 text-center">
        <CardTitle className="text-center text-3xl font-bold">
          Esqueceu sua Senha?
        </CardTitle>
        <CardDescription className="text-gray-500 dark:text-gray-400">
          Insira o seu e-mail
        </CardDescription>
      </CardHeader>

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="jane@example.com" required />
          {/* {...register('email')} */}
        </div>
        <Button className="w-full" type="submit" onClick={onSubmit}>
          Enviar E-mail
        </Button>
      </form>
      <div className="mt-4 text-center text-sm">
        <Link className="underline ml-2" href={NextRoutes.signIn}>
          Voltar para o Login
        </Link>
      </div>
    </div>
  )
}
