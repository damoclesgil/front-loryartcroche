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

export function AuthForm() {
  const form = useForm()
  const handleSubmit = form.handleSubmit((data) => {
    console.log(data)
  })

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-center">Sign in to your account</CardTitle>
        <CardDescription className="text-center">
          Enter your email to get started
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Label htmlFor="email">Email</Label>
          <Input
            autoComplete="email"
            id="email"
            placeholder="john@example.com"
            required
            type="email"
            {...form.register('email')}
          />
          <Button className="w-full" type="submit">
            Send Magic Link
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
