import { NextRequest, NextResponse } from 'next/server'

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // List of allowed paths
  const allowedPaths = ['/', '/gallery']
  // List of Start with paths
  const startWithPaths = ['']

  // If it's in allowed paths, allow it
  if (allowedPaths.includes(pathname)) {
    return NextResponse.next()
  }

  // If it's in start with paths, allow it
  if (startWithPaths.some((path) => pathname.startsWith(path))) {
    return NextResponse.next()
  }
  // Otherwise redirect to /home-22
  return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
}
