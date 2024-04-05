// import { UsersPermissionsRegisterInput } from '@/graphql/types'
import { z } from 'zod'

export const fieldsValidations = z.object({
  username: z
    .string()
    .min(3, 'O nome deve ter pelo menos 3 caracteres')
    .max(50, 'O nome não pode ser tão grande.'),
  email: z.string().email(`E-mail Inválido`),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
  confirm_password: z
    .string()
    .refine((value) => value === password.value /* HTMLInputElement */, {
      message: 'As senhas precisam ser iguais'
      // path: 'confirm_password'
    })
})

// export const signInValidate = fieldsValidations.omit({ email: true })
export const signInValidate = fieldsValidations.pick({
  username: true,
  password: true
})
export const signUpValidate = fieldsValidations.pick({
  username: true,
  password: true,
  email: true
})
export const forgotPasswordValidate = fieldsValidations.pick({
  email: true
})
export const resetPasswordValidate = fieldsValidations.pick({
  password: true,
  confirm_password: true
})
export const profileValidate = fieldsValidations.pick({
  username: true,
  email: true
})

// export const resetPasswordValidate = z.object({
//     password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
//     confirmPassword: z.string(),
//   })
//   .refine((data) => data.password === data.confirm_password, {
//     message: 'As senhas precisam ser iguais',
//     path: ['confirm_password'] // path of error
//   })
