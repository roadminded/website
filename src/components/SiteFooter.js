"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteFooter() {
    const pathname = usePathname();

    const isFinnish =
        pathname === "/fi" || pathname.startsWith("/fi/");

    const prefix = isFinnish ? "/fi" : "";

    const localPath = (path) => `${prefix}${path}`;

    const labels = isFinnish
        ? {
            product: "Tunnelimestari",
            services: "Palvelut",
            about: "Meistä",
            contact: "Yhteystiedot",
            privacy: "Tietosuoja",
            businessId: "Y-tunnus",
        }
        : {
            product: "TunnelMaster",
            services: "Services",
            about: "About",
            contact: "Contact",
            privacy: "Privacy",
            businessId: "Business ID",
        };

    return (
        <footer className="bg-base-200 border-t border-base-300">
            <div className="max-w-6xl mx-auto w-full px-6 py-10">
                <div className="flex flex-col md:flex-row gap-8 items-start justify-between">

                    <div className="text-sm">
                        <div className="font-semibold">
                            RoadMinded Systems Oy
                        </div>

                        <div className="mt-2 opacity-70 space-y-1">
                            <div>Helsinki, Finland</div>

                            <div>
                                {labels.businessId}: 3608959-6
                            </div>

                            <div>
                                <a
                                    href="mailto:info@roadminded.com"
                                    className="link link-hover"
                                >
                                    info@roadminded.com
                                </a>
                            </div>
                        </div>

                        <div className="mt-4 opacity-60">
                            © {new Date().getFullYear()} RoadMinded Systems
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
                        <Link
                            href={localPath("/tunnelmaster")}
                            className="link link-hover"
                        >
                            {labels.product}
                        </Link>

                        <Link
                            href={localPath("/services")}
                            className="link link-hover"
                        >
                            {labels.services}
                        </Link>

                        <Link
                            href={localPath("/about")}
                            className="link link-hover"
                        >
                            {labels.about}
                        </Link>

                        <Link
                            href={localPath("/contact")}
                            className="link link-hover"
                        >
                            {labels.contact}
                        </Link>

                        <Link
                            href={localPath("/privacy")}
                            className="link link-hover"
                        >
                            {labels.privacy}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}