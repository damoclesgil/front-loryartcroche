export const links = {
  WhatsApp:
    'https://wa.me/5562996725529?text=Ol%C3%A1%2C+estou+dando+uma+olhada+aqui+no+site',
  Instagram: 'https://www.instagram.com/loryartcroche/',
  Facebook: 'https://www.facebook.com/loryartcroche/',
  Email: 'loryartcroche@gmail.com',
  Phone: '+55 62 99672-5529'
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
  profile: '/minha-conta'
}

export const NextRoutes = {
  ...publicRoutes,
  ...privateRoutes
}
