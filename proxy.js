/**
 * This middleware is used to set the `x-site-language` header
 * based on the request path.
 */

import { NextResponse } from "next/server";

export function proxy(request) {
    const requestHeaders = new Headers(request.headers);

    const pathname = request.nextUrl.pathname;

    const language =
        pathname === "/fi" || pathname.startsWith("/fi/")
            ? "fi"
            : "en";

    requestHeaders.set("x-site-language", language);

    return NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
}

export const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
};