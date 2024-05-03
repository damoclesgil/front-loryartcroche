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
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { signInValidate } from '@/utils/validations/indext'
import { NextRoutes } from '@/utils/constant'
import { TextError } from '@/components/ui/text-error'
import { ErrorOutline } from '@styled-icons/material-outlined'

export function FormSignIn() {
  const { push } = useRouter()

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(signInValidate)
  })

  const submitFormSigIn = handleSubmit(async (data) => {
    const result = await signIn('credentials', {
      identifier: data.username,
      password: data.password,
      redirect: false,
      callbackUrl: NextRoutes.home
    })
    if (result?.url) {
      return push(NextRoutes.home)
    } else {
      setError('manual', {
        type: 'custom',
        message: 'Nome de usuário ou Senha é inválido!'
      })
    }
  })

  return (
    <div className="mx-auto w-full max-w-sm space-y-6">
      <CardHeader className="space-y-2 text-center p-1">
        <CardTitle className="text-center text-3xl font-bold">
          Entre na sua conta!
        </CardTitle>
        <CardDescription className="text-sm text-gray-500 dark:text-gray-400">
          Insira suas informações para entrar na sua conta
        </CardDescription>
      </CardHeader>
      <CardContent>
        {errors.manual && (
          <TextError className="text-left mb-2">
            <ErrorOutline className="mr-1 w-4 h-4" />
            {errors.manual?.message?.toString()}
          </TextError>
        )}
        <form onSubmit={submitFormSigIn} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="username">Nome de usuário</Label>
            <Input
              autoComplete="username"
              id="username"
              placeholder="Nome de usuário"
              required
              type="username"
              {...register('username')}
            />
            {errors.username && (
              <TextError>{errors.username?.message?.toString()}</TextError>
            )}
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="password">Senha</Label>
              <Link
                className="ml-auto inline-block text-sm underline"
                href="/forgot-password"
              >
                Esqueceu sua senha?
              </Link>
            </div>
            <Input
              id="password"
              required
              type="password"
              {...register('password')}
            />
            {errors.password && (
              <TextError>{errors.password?.message?.toString()}</TextError>
            )}
          </div>

          <Button className="w-full" type="submit" loading={isSubmitting}>
            Entrar
          </Button>
          {/* <Button className="w-full" variant="outline">
            Entrar com Google
          </Button> */}
        </form>
        <div className="mt-4 text-center text-sm">
          Não possui uma conta?
          <Link className="underline ml-2" href={NextRoutes.signUp}>
            Cadastrar
          </Link>
        </div>
      </CardContent>
    </div>
  )
}
