import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Middleware for registered route
 */
export function middleware(request: NextRequest) {
  const csrfCookie = request.cookies.get("csrf_cookie");

  if (!csrfCookie) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/home/:path*"],
};
