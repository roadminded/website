"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";


export default function SiteNavigation() {
    const pathname = usePathname();

    const locale =
        pathname === "/fi" || pathname.startsWith("/fi/")
            ? "fi"
            : pathname === "/zh-tw" || pathname.startsWith("/zh-tw/")
                ? "zh-tw"
                : "en";

    const prefix =
        locale === "fi"
            ? "/fi"
            : locale === "zh-tw"
                ? "/zh-tw"
                : "";

    const localPath = (path) => `${prefix}${path}`;

    const pathWithoutLocale =
        locale === "fi"
            ? pathname.replace(/^\/fi/, "") || "/"
            : locale === "zh-tw"
                ? pathname.replace(/^\/zh-tw/, "") || "/"
                : pathname;

    const languagePath = (targetLocale) => {
        if (targetLocale === "en") {
            return pathWithoutLocale;
        }

        if (pathWithoutLocale === "/") {
            return `/${targetLocale}`;
        }

        return `/${targetLocale}${pathWithoutLocale}`;
    };

    const labels = {
        en: {
            product: "TunnelMaster",
            services: "Services",
            about: "About",
            contact: "Contact",
            login: "Login",
            menu: "Open menu",
        },
        fi: {
            product: "Tunnelimestari",
            services: "Palvelut",
            about: "Meistä",
            contact: "Yhteystiedot",
            login: "Kirjaudu",
            menu: "Avaa valikko",
        },
        "zh-tw": {
            product: "TunnelMaster",
            services: "服務",
            about: "關於我們",
            contact: "聯絡我們",
            login: "登入",
            menu: "開啟選單",
        },
    }[locale];


    return (
        <nav className="navbar bg-base-100/90 backdrop-blur border-b border-base-200 px-6 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto w-full flex items-center">

                {/* Brand */}
                <div className="flex-1">
                    <Link
                        href={prefix || "/"}
                        className="inline-flex items-center gap-3"
                    >
                        <Image
                            src="/logos/roadminded-v1.svg"
                            alt="RoadMinded Systems"
                            width={180}
                            height={40}
                            priority
                        />
                    </Link>
                </div>

                {/* Mobile menu */}
                <div className="flex-none lg:hidden">
                    <div className="dropdown dropdown-end">
                        <button
                            className="btn btn-ghost btn-sm"
                            aria-label={labels.menu}
                        >
                            ☰
                        </button>

                        <ul className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-56 border border-base-200">
                            <li>
                                <Link href={localPath("/tunnelmaster")}>
                                    {labels.product}
                                </Link>
                            </li>

                            <li>
                                <Link href={localPath("/services")}>
                                    {labels.services}
                                </Link>
                            </li>

                            <li>
                                <Link href={localPath("/about")}>
                                    {labels.about}
                                </Link>
                            </li>

                            <li>
                                <Link href={localPath("/contact")}>
                                    {labels.contact}
                                </Link>
                            </li>

                            <li>
                                <a href="https://tunnelimestari.roadminded.com">
                                    {labels.login}
                                </a>
                            </li>

                            <li className="mt-2 border-t border-base-200 pt-2">
                                <div className="flex items-center gap-2">
                                    <Link
                                        href={languagePath("en")}
                                        className={locale === "en" ? "font-semibold" : "opacity-60"}
                                    >
                                        EN
                                    </Link>

                                    <span className="opacity-30">|</span>

                                    <Link
                                        href={languagePath("fi")}
                                        className={locale === "fi" ? "font-semibold" : "opacity-60"}
                                    >
                                        FI
                                    </Link>

                                    <span className="opacity-30">|</span>

                                    <Link
                                        href={languagePath("zh-tw")}
                                        className={locale === "zh-tw" ? "font-semibold" : "opacity-60"}
                                    >
                                        繁中
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Desktop */}
                <div className="hidden lg:flex items-center gap-2">
                    <Link
                        href={localPath("/tunnelmaster")}
                        className="btn btn-ghost btn-sm text-base"
                    >
                        {labels.product}
                    </Link>

                    <Link
                        href={localPath("/services")}
                        className="btn btn-ghost btn-sm text-base"
                    >
                        {labels.services}
                    </Link>

                    <Link
                        href={localPath("/about")}
                        className="btn btn-ghost btn-sm text-base"
                    >
                        {labels.about}
                    </Link>

                    <Link
                        href={localPath("/contact")}
                        className="btn btn-ghost btn-sm text-base"
                    >
                        {labels.contact}
                    </Link>

                    <div className="flex items-center gap-1 mx-1 text-sm">
                        <Link
                            href={languagePath("en")}
                            className={`btn btn-ghost btn-xs ${locale === "en" ? "font-semibold" : "opacity-60"
                                }`}
                        >
                            EN
                        </Link>

                        <span className="opacity-30">|</span>

                        <Link
                            href={languagePath("fi")}
                            className={`btn btn-ghost btn-xs ${locale === "fi" ? "font-semibold" : "opacity-60"
                                }`}
                        >
                            FI
                        </Link>

                        <span className="opacity-30">|</span>

                        <Link
                            href={languagePath("zh-tw")}
                            className={`btn btn-ghost btn-xs ${locale === "zh-tw" ? "font-semibold" : "opacity-60"
                                }`}
                        >
                            繁中
                        </Link>
                    </div>

                    <a
                        href="https://tunnelimestari.roadminded.com"
                        className="btn btn-primary btn-sm text-base"
                    >
                        {labels.login}
                    </a>
                </div>
            </div>
        </nav>
    );
}