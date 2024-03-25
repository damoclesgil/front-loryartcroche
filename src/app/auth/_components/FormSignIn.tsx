'use client'

import {
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { toast } from '@/components/ui/use-toast'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export function FormSignIn() {
  const form = useForm()
  const { push } = useRouter()

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      const result = await signIn('credentials', {
        identifier: data.identifier,
        password: data.password,
        redirect: false,
        callbackUrl: '/'
      })
      if (result?.url) {
        return push(result.url)
      }

      toast({
        variant: 'default',
        title: 'Login efetuado com success!',
        description: '...'
      })
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'OOps Errado!',
        description: 'Login Deu errado'
      })
    }
  })

  return (
    <div className="mx-auto max-w-sm space-y-6">
      <CardHeader className="space-y-2 text-center">
        <CardTitle className="text-center text-3xl font-bold">
          Entre na sua conta!
        </CardTitle>
        <CardDescription className="text-gray-500 dark:text-gray-400">
          Insira suas informações para entrar na sua conta
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              autoComplete="username"
              id="username"
              placeholder="username"
              required
              type="username"
              {...form.register('identifier')}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              autoComplete="password"
              id="password"
              placeholder="password"
              required
              type="password"
              {...form.register('password')}
            />
          </div>
          <Button className="w-full" type="submit">
            Entrar
          </Button>
        </form>
        {/* <div className="mt-6">
            <Button onClick={() => signInWithGoogle()}>
              Login with google
            </Button>
          </div> */}
      </CardContent>
    </div>
  )
}
