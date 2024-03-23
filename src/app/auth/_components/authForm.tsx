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
import Link from 'next/link'

export function AuthForm() {
  const form = useForm()
  const [isLoginPage, setLoginPage] = useState(true)
  const { push } = useRouter()
  const [mutate] = useMutation(MutationRegisterDocument)

  // const signInWithGoogle = async () => {
  //   await signIn('google', {
  //     redirect: false,
  //     callbackUrl: '/client-example'
  //   })
  // }

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      if (isLoginPage) {
        const result = await signIn('credentials', {
          identifier: data.identifier,
          password: data.password,
          redirect: false,
          callbackUrl: '/client-example'
        })
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
        <Link href="/client-example" className="mb-2 pt-2 block pl-2">
          Teste Session
        </Link>
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
          {/* <div className="mt-6">
            <Button onClick={() => signInWithGoogle()}>
              Login with google
            </Button>
          </div> */}
        </CardContent>
      </Card>
    </div>
  )
}
