import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);
const GATE_COOKIE = "tasami_preview";

function isOpenPath(pathname: string) {
  return pathname === "/coming-soon" || pathname.startsWith("/api/gate");
}

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (process.env.GATE_DISABLED === "1" || isOpenPath(pathname)) {
    if (isOpenPath(pathname)) return NextResponse.next();
    return intlMiddleware(request);
  }

  const unlocked = request.cookies.get(GATE_COOKIE)?.value === "open";
  if (!unlocked) {
    const url = request.nextUrl.clone();
    url.pathname = "/coming-soon";
    url.search = "";
    return NextResponse.redirect(url);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/", "/(ar|en)/:path*", "/coming-soon", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
