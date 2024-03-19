'use client'

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { useMutation } from '@apollo/client'
import { MutationRegisterDocument } from '@/graphql/generated/graphql'
import { toast } from '@/components/ui/use-toast'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
// import { signIn } from '@/services/auth'
// import { signIn } from 'next-auth'

export function AuthForm() {
  const form = useForm()
  const [isLoginPage, setLoginPage] = useState(true)
  const { push } = useRouter()
  const [mutate] = useMutation(MutationRegisterDocument)

  const handleSubmit = form.handleSubmit(async (data) => {
    // console.log(data)
    // console.log(isLoginPage)
    try {
      if (isLoginPage) {
        // signIn()
        // await signIn('credentials', { entries: {} })
        const result = await signIn('credentials', {
          identifier: data.identifier,
          password: data.password,
          redirect: false,
          callbackUrl: '/client-example'
        })
        console.log(result)
        if (result?.url) {
          return push(result.url)
        }
      }
      if (!isLoginPage) {
        await mutate({
          variables: {
            input: {
              email: data.email,
              password: data.password,
              username: data.username
            }
          }
        })
      }
      toast({
        variant: 'default',
        title: 'Login efetuado com success!',
        description: '...'
      })
    } catch (error) {
      console.log(error)
      toast({
        variant: 'destructive',
        title: 'OOps Errado!',
        description: 'Login Deu errado'
      })
    }
  })

  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      {/* <button onClick={() => setLoginPage(!!true)}> Change </button> */}
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Sign in to your account</CardTitle>
          <CardDescription className="text-center">
            Enter your email to get started
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {isLoginPage ? (
              <>
                <Label htmlFor="username">username</Label>
                <Input
                  autoComplete="username"
                  id="username"
                  placeholder="username"
                  required
                  type="username"
                  {...form.register('identifier')}
                />
              </>
            ) : (
              <>
                <Label htmlFor="email">Email</Label>
                <Input
                  autoComplete="email"
                  id="email"
                  placeholder="john@example.com"
                  required
                  type="email"
                  {...form.register('email')}
                />
                <Label htmlFor="username">username</Label>
                <Input
                  autoComplete="username"
                  id="username"
                  placeholder="username"
                  required
                  type="username"
                  {...form.register('username')}
                />
              </>
            )}
            <Label htmlFor="password">password</Label>
            <Input
              autoComplete="password"
              id="password"
              placeholder="password"
              required
              type="password"
              {...form.register('password')}
            />
            <Button className="w-full" type="submit">
              Send Magic Link
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
