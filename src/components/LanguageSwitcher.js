"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
    const pathname = usePathname();

    const isFinnish = pathname === "/fi" || pathname.startsWith("/fi/");

    const englishPath = isFinnish
        ? pathname.replace(/^\/fi/, "") || "/"
        : pathname;

    const finnishPath = isFinnish
        ? pathname
        : pathname === "/"
            ? "/fi"
            : `/fi${pathname}`;

    return (
        <div className="flex items-center gap-1 text-sm">
            <Link
                href={englishPath}
                className={`btn btn-ghost btn-xs ${!isFinnish ? "font-semibold" : "opacity-60"
                    }`}
            >
                EN
            </Link>

            <span className="opacity-30">|</span>

            <Link
                href={finnishPath}
                className={`btn btn-ghost btn-xs ${isFinnish ? "font-semibold" : "opacity-60"
                    }`}
            >
                FI
            </Link>
        </div>
    );
}