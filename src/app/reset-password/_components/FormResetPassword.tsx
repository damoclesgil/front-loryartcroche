'use client'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { NextRoutes } from '@/utils/constant'
import Link from 'next/link'
import { resetPasswordValidate } from '@/utils/validations/indext'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { TextError } from '@/components/ui/text-error'
import { toast } from '@/components/ui/use-toast'
import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'
import { ErrorOutline } from '@styled-icons/material-outlined'

export function FormResetPassword() {
  const {
    handleSubmit,
    register,
    setError,
    getValues,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(resetPasswordValidate)
  })

  const code = useSearchParams().get('code')

  const onSubmit = handleSubmit(async (values) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/reset-password`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          password: values.password,
          passwordConfirmation: values.confirm_password,
          code: code
        })
      }
    )

    const data = await response.json()

    if (data.error) {
      setError('root', {
        type: 'manual',
        message: data.error.message
      })
    } else {
      toast({
        variant: 'default',
        title: 'Senha Alterada com sucesso!',
        description: 'A sua senha foi redefinida.'
      })
      signIn('credentials', {
        identifier: data.user.username,
        password: values.password,
        redirect: true,
        callbackUrl: NextRoutes.home
      })
    }
  })

  return (
    <div className="mx-auto max-w-sm space-y-6">
      <CardHeader className="space-y-2 text-center">
        <CardTitle className="text-center text-3xl font-bold">
          Redefinir Senha.
        </CardTitle>
        <CardDescription className="text-gray-500 dark:text-gray-400">
          Insira a sua nova senha.
        </CardDescription>
      </CardHeader>

      {errors.root && (
        <TextError className="text-left mb-2">
          <ErrorOutline className="mr-1 w-4 h-4" />
          {errors.root?.message?.toString()}
        </TextError>
      )}
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            placeholder="senha"
            required
            {...register('password')}
          />
          {errors.password && (
            <TextError>{errors.password?.message?.toString()}</TextError>
          )}
          <Label htmlFor="confirm_password">Confirmar Senha</Label>
          <Input
            id="confirm_password"
            placeholder="Confirmar Senha"
            required
            {...register('confirm_password')}
          />
          {errors.password && (
            <TextError>
              {errors.confirm_password?.message?.toString()}
            </TextError>
          )}
        </div>
        <Button className="w-full" type="submit" onClick={onSubmit}>
          Alterar Senha
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
