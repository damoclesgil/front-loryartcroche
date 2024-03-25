'use client'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'
import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import { MutationRegisterDocument } from '@/graphql/generated/graphql'
// import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'
import { UsersPermissionsRegisterInput } from '@/graphql/generated/graphql'
import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function FormSignUp() {
  const { handleSubmit, register, getValues } =
    useForm<UsersPermissionsRegisterInput>()
  // const { push } = useRouter()
  const [mutate] = useMutation(MutationRegisterDocument, {
    onCompleted(data, clientOptions) {
      if (data) {
        let formValues = getValues()
        signIn('credentials', {
          email: formValues.email,
          password: formValues.password,
          redirect: false,
          callbackUrl: '/'
        })
      }
    }
  })

  const onSubmit = handleSubmit(async (data) => {
    try {
      await mutate({
        variables: {
          input: {
            email: data.email,
            password: data.password,
            username: data.username
          }
        }
      })
      toast({
        variant: 'default',
        title: 'Conta Criada com successo!',
        description: '...'
      })
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'OOps Errado!',
        description: 'Algo de errado ocorreu 🥲'
      })
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

      <form onSubmit={onSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Nome</Label>
          <Input
            id="name"
            placeholder="Jane Doe"
            required
            {...register('username')}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="jane@example.com"
            {...register('email')}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            required
            type="password"
            {...register('password')}
          />
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
        <Button className="w-full" type="submit" onClick={onSubmit}>
          Cadastrar
        </Button>
      </form>
    </div>
  )
}
