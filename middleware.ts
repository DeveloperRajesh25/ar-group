import { NextRequest, NextResponse } from 'next/server';

// TEMPORARY: client preview lock — only the homepage is accessible.
// To restore full navigation tomorrow, delete this file.
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname === '/') return NextResponse.next();
  const url = req.nextUrl.clone();
  url.pathname = '/';
  url.search = '';
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    '/((?!api|studio|_next|favicon.ico|robots.txt|sitemap.xml|opengraph-image|.*\\..*).*)',
  ],
};
