import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect admin routes (except login and auth API)
  if (pathname.startsWith("/admin") && 
      !pathname.startsWith("/admin/login") && 
      !pathname.startsWith("/api/admin/auth")) {
    
    const authCookie = request.cookies.get("admin-auth");
    
    if (!authCookie || authCookie.value !== "authenticated") {
      // Redirect to login
      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
