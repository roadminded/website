/**
 * This component updates the `lang` attribute of the HTML document
 * based on the current pathname. 
 */
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function HtmlLangUpdater() {
    const pathname = usePathname();

    useEffect(() => {
        const lang =
            pathname === "/fi" || pathname.startsWith("/fi/")
                ? "fi"
                : pathname === "/zh-tw" || pathname.startsWith("/zh-tw/")
                    ? "zh-TW"
                    : "en";

        document.documentElement.lang = lang;
    }, [pathname]);

    return null;
}