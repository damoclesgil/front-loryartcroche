'use client'

import { GetProfileDocument } from '@/graphql/generated/graphql'
import { useQuery } from '@apollo/client'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button, buttonVariants } from '@/components/ui/button'
import { profileValidate } from '@/utils/validations/indext'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { TextError } from '@/components/ui/text-error'
import Link from 'next/link'
import { NextRoutes } from '@/utils/constant'

export type ProfileInput = {
  email: string | null
  username: string
}

export default function FormProfile() {
  const { data, error, loading } = useQuery(GetProfileDocument)

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors, isSubmitting }
  } = useForm<ProfileInput>({
    resolver: zodResolver(profileValidate)
    // defaultValues: {
    //   username: '',
    //   email: ''
    // }
  })

  const onSubmit = handleSubmit(async (values) => {
    console.log(values)
  })

  if (error) {
    throw error
  }

  if (loading) {
    return (
      <>
        <p>Obtendo dados do usuário</p>
      </>
    )
  }

  if (data) {
    return (
      <>
        {/* {data.me?.email}
        {data.me?.id}
        {data.me?.username} */}
        <div>
          <h2>Perfil de Usuário</h2>
        </div>
        <form onSubmit={onSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              placeholder="E-mail"
              type="email"
              defaultValue={data.me?.email ?? ''}
              {...register('email')}
            />

            {errors.email && (
              <TextError>{errors.email?.message?.toString()}</TextError>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="username">Nome do Usuário</Label>
            <Input
              id="username"
              defaultValue={data.me?.username ?? ''}
              placeholder="Username"
              {...register('username')}
            />
          </div>
          <div className="mt-5 flex justify-end">
            <Button asChild>
              <Link
                className={buttonVariants({
                  variant: 'outline',
                  className: 'mr-4',
                  size: 'lg'
                })}
                href={`${NextRoutes.forgotPassword}?email=${data.me?.email}`}
              >
                Redefinir Senha
              </Link>
            </Button>

            <Button size="lg" type="submit" loading={isSubmitting}>
              Salvar
            </Button>
          </div>
        </form>
      </>
    )
  }
}
