import { NextRequest, NextResponse } from 'next/server'
import { getUrl } from './lib/get-url'
import { NextRoutes } from './utils/constant'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('authjs.session-token')
  const pathname = request.nextUrl.pathname

  if (
    (pathname === NextRoutes.signIn || pathname === NextRoutes.signUp) &&
    token
  ) {
    return NextResponse.redirect(new URL(getUrl(NextRoutes.home)))
  }

  // PRIVATE ROUTES
  if (
    (pathname === NextRoutes.cart || pathname === NextRoutes.profile) &&
    !token
  ) {
    return NextResponse.redirect(new URL(getUrl(NextRoutes.signIn)))
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
