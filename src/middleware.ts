import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const secret = process.env.NEXTAUTH_SECRET;

export const middleware = async (req: NextRequest) => {
  const token = await getToken({ req, secret });
  if (req.nextUrl.pathname.startsWith("/login")) {
    if (token) {
      return NextResponse.redirect(new URL('/jobs', req.url))
    }
    return NextResponse.next();
  }
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
