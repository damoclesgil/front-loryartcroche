'use client'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { NextRoutes } from '@/utils/constant'
import Link from 'next/link'
import { forgotPasswordValidate } from '@/utils/validations/indext'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { TextError } from '@/components/ui/text-error'
import {
  CheckCircleOutline,
  ErrorOutline
} from '@styled-icons/material-outlined'
import { toast } from '@/components/ui/use-toast'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'

export function FormForgotPassword() {
  const [success, setSuccess] = useState(false)

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: zodResolver(forgotPasswordValidate)
  })

  const emailParam = useSearchParams().get('email')

  const onSubmit = handleSubmit(async (values) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/forgot-password`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: values.email })
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
        title: 'Email enviado sucesso!',
        description: 'Enviamos um e-mail para você redefinir sua senha 😊'
      })
      setSuccess(true)
    }
  })

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
      {errors.root && (
        <TextError className="text-left mb-2">
          <ErrorOutline className="mr-1 w-4 h-4" />
          {errors.root?.message?.toString()}
        </TextError>
      )}

      {success ? (
        <div className="flex items-center">
          <CheckCircleOutline size={20} className="text-green-500 mr-2" />
          <p>Você acabou de receber um e-mail!</p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="jane@example.com"
              type="text"
              required
              defaultValue={emailParam ?? ''}
              {...register('email')}
            />
            {errors.email && (
              <TextError>{errors.email?.message?.toString()}</TextError>
            )}
          </div>
          <Button
            className="w-full"
            type="submit"
            onClick={onSubmit}
            disabled={isSubmitting}
            loading={isSubmitting}
          >
            Enviar E-mail
          </Button>
        </form>
      )}

      <div className="mt-4 text-center text-sm">
        <Link className="underline ml-2" href={NextRoutes.signIn}>
          Voltar para o Login
        </Link>
      </div>
    </div>
  )
}
