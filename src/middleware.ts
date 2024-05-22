import { NextRequest, NextResponse } from 'next/server'
import { getUrl } from './utils/get-url'
import { NextRoutes, privateRoutes } from './utils/constant'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('authjs.session-token')
  const pathname = request.nextUrl.pathname

  // console.log('Token', token?.value)

  if (
    (pathname === NextRoutes.signIn || pathname === NextRoutes.signUp) &&
    token?.value
  ) {
    // console.log('AUTHENTICATED?')
    return NextResponse.redirect(new URL(getUrl(NextRoutes.home)))
  }
  // pathname === privateRoutes.profile
  // pathname === privateRoutes.favorites ||
  if (
    (pathname === privateRoutes.cart || pathname === privateRoutes.profile) &&
    token === undefined
  ) {
    // console.log('NOT AUTHENTICATED', token)
    return NextResponse.redirect(new URL(getUrl(NextRoutes.signIn)))
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
