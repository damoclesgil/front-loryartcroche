import { Metadata } from 'next'

export const links = {
  WhatsApp: 'https://wa.me/+5562996725529',
  Instagram: 'https://www.instagram.com/loryartcroche/',
  Facebook: 'https://www.facebook.com/loryartcroche/',
  Email: 'loryartcroche@gmail.com',
  Phone: '+55 62 99672-5529',
  websiteUrl: 'https://loryartcroche.com.br'
}

export const publicRoutes = {
  home: '/',
  auth: '/auth',
  signUp: '/sign-up',
  signIn: '/sign-in',
  products: '/produtos',
  about: '/sobre',
  success: '/sucesso',
  forgotPassword: '/forgot-password'
}
export const privateRoutes = {
  favorites: '/favoritos',
  cart: '/carrinho',
  profile: '/minha-conta',
  myOrders: '/minhas-compras'
}

export const NextRoutes = {
  ...publicRoutes,
  ...privateRoutes
}

export const defaultMetadata: Metadata = {
  title: 'Lory Art Crochê',
  description: 'Lorilei, bolsas em crochê modernas e de Luxo'
}
