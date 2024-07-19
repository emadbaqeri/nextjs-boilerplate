import { auth } from "./auth";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isAuthPage = req.nextUrl.pathname.startsWith("/auth");

  if (isAuthPage) {
    if (isLoggedIn) {
      return Response.redirect(new URL("/", req.url));
    }
    return null;
  }

  if (!isLoggedIn) {
    let from = req.nextUrl.pathname;
    if (req.nextUrl.search) {
      from += req.nextUrl.search;
    }
    return Response.redirect(
      new URL(`/api/auth/signin?from=${encodeURIComponent(from)}`, req.url),
    );
  }
  return null;
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
