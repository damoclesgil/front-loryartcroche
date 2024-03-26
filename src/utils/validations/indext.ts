import { z } from 'zod'

export const schema = z.object({
  nome: z.string().min(2, 'Muito curto').max(50, 'Muito longo'),
  sobrenome: z.string().min(2, 'Muito curto').max(50, 'Muito longo'),
  senha: z.string().min(8, 'A senha deve ter pelo menos 8 caracteres'),
  repetirSenha: z.string().refine((value) => value === senha, {
    message: 'As senhas precisam ser iguais'
  })
})
