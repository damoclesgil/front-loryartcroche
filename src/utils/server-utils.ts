import { normalize } from '@/utils/mappers'

import { auth } from '@/services/auth'

export const serverSideFunction = () => {
  console.log('use multiple libraries')
  return 'server result'
}
export const getProdutos = async () => {
  let session = await auth()

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/produtos`,
    {
      method: 'GET',
      headers: {
        Authorization: session ? `Bearer ${session.jwt}` : ``
      }
      // body: new URLSearchParams({
      //   password: credentials.password
      // })
    }
  )
  const data = await response.json()
  if (data) {
    return normalize(data)
  }
}
