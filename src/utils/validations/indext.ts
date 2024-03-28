// import { UsersPermissionsRegisterInput } from '@/graphql/generated/graphql'
import { z } from 'zod'

export const fieldsValidations = z.object({
  username: z.string().min(2, 'Muito curto').max(50, 'Muito longo'),
  password: z.string().min(4, 'A senha deve ter pelo menos 8 caracteres'),
  email: z.string().email(`E-mail Inválido`),
  sobrenome: z.string().min(2, 'Muito curto').max(50, 'Muito longo')
  // repetirSenha: z.string().refine((value) => value === senha, {
  //   message: 'As senhas precisam ser iguais'
  // })
})

// export const signInValidate = fieldsValidations.omit({ email: true })
export const signInValidate = fieldsValidations.pick({
  username: true,
  password: true
})
