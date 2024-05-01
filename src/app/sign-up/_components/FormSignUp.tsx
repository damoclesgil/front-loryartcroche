'use client'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'
import { useForm } from 'react-hook-form'
import {
  useMutationRegisterMutation,
  UsersPermissionsRegisterInput
} from '@/graphql/types'
import { signIn } from 'next-auth/react'
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { NextRoutes } from '@/utils/constant'
import { TextError } from '@/components/ui/text-error'
import { ErrorOutline } from '@styled-icons/material-outlined'
import { signUpValidate } from '@/utils/validations/indext'
import { zodResolver } from '@hookform/resolvers/zod'

export function FormSignUp() {
  const {
    handleSubmit,
    register,
    setError,
    getValues,
    formState: { errors, isSubmitting }
  } = useForm<UsersPermissionsRegisterInput>({
    resolver: zodResolver(signUpValidate)
  })
  // const { push } = useRouter()

  const [mutationRegisterMutation, { data, loading, error }] =
    useMutationRegisterMutation({
      onCompleted(data) {
        console.log('data', data)
        if (data) {
          let formValues = getValues()
          toast({
            variant: 'default',
            title: 'Conta Criada com sucesso!',
            description: 'Estamos redirecionado você para a nossa loja 😊'
          })
          signIn('credentials', {
            identifier: formValues.username,
            password: formValues.password
            // redirect: true,
            // callbackUrl: NextRoutes.home
          })
        }
      },
      onError(error) {
        if (
          error.graphQLErrors[0].message ===
          'Email or Username are already taken'
        ) {
          setError('root', {
            type: 'manual',
            message: `Já existe um usuário com o nome: ${getValues().username}, por favor tente cadastrar com outro nome`
          })
          toast({
            variant: 'destructive',
            title: 'Já existe um usuário com esse nome!',
            description: 'Por favor tente cadastrar um usuário com outro nome.',
            duration: 6000
          })
        } else {
          setError('root', {
            type: 'manual',
            message: 'Nome de usuário, senha ou e-mail é inválido!'
          })
          toast({
            variant: 'destructive',
            title: 'OOps 😮!',
            description: 'Algo de errado, tente novamente em alguns minutos.'
          })
        }
      },
      errorPolicy: 'all'
    })

  const onSubmit = handleSubmit(async (values) => {
    try {
      await mutationRegisterMutation({
        variables: {
          input: {
            email: values.email,
            password: values.password,
            username: values.username
          }
        }
      })
      if (loading) {
        console.log('loading', loading)
      }
      if (data) {
        console.log('data', data)
      }
      if (error) {
        console.log('error', error)
      }
    } catch (error) {
      console.log(error)
    }
  })

  return (
    <div className="mx-auto max-w-sm space-y-6">
      <CardHeader className="space-y-2 text-center">
        <CardTitle className="text-center text-3xl font-bold">
          Cadastrar
        </CardTitle>
        <CardDescription className="text-gray-500 dark:text-gray-400">
          Insira suas informações para criar uma conta
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
          <Label htmlFor="name">Nome</Label>
          <Input id="name" required {...register('username')} />
          {errors.username && (
            <TextError>{errors.username?.message?.toString()}</TextError>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="seuemail@examplo.com"
            {...register('email')}
            required
          />
          {errors.email && (
            <TextError>{errors.email?.message?.toString()}</TextError>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
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
        {/* <div className="space-y-2">
          <Label htmlFor="confirm-password">Confirm password</Label>
          <Input id="confirm-password" required type="password" />
        </div> */}
        <div className="text-sm flex items-center h-4">
          <Checkbox id="terms" className="mr-1.5" />
          <Label className="select-none m-0 block" htmlFor="terms">
            Eu aceito os
            <Link className="underline ml-1" href="#">
              termos e condições
            </Link>
          </Label>
        </div>
        <Button
          className="w-full"
          type="submit"
          onClick={onSubmit}
          disabled={isSubmitting}
          loading={isSubmitting}
        >
          Cadastrar
        </Button>
      </form>
      <div className="mt-4 text-center text-sm">
        Já possui conta?
        <Link className="underline ml-2" href={NextRoutes.signIn}>
          Entrar
        </Link>
      </div>
    </div>
  )
}
