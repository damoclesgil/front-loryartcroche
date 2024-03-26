'use client'

import { GetProfileDocument } from '@/graphql/generated/graphql'
import { useQuery } from '@apollo/client'
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function FormProfile() {
  const { data, error, loading } = useQuery(GetProfileDocument)

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
      <div className="flex flex-col items-center justify-center mx-2">
        {data.me?.email}
        {data.me?.id}
        {data.me?.username}
        <Card className="w-full max-w-3xl">
          <CardHeader>
            <CardTitle>Perfil de Usuário</CardTitle>
            <CardDescription>
              Atualize suas informações de perfil.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" placeholder="E-mail" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Username" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" placeholder="Senha" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button size="lg">Salvar</Button>
          </CardFooter>
        </Card>
      </div>
    )
  }
}
