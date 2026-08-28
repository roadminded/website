import Link from "next/link";
import Image from "next/image";
import { BarChart3, Server, Layers } from "lucide-react";

const SERVICE_ICONS = [BarChart3, Server, Layers];

const PARTNERS = [
    {
        name: "ScanwAi",
        logoSrc: "/logos/scanwai-1.png",
        logoAlt: "ScanwAi",
    },
    {
        name: "Digitraffic / Link V2X",
        logoSrc: "/logos/digitraffic.png",
        logoAlt: "Digitraffic / Link V2X",
    },
];

export default function HomePage({ content, localePrefix = "" }) {
    const localPath = (path) => `${localePrefix}${path}`;

    return (
        <div className="bg-base-100">

            {/* Hero */}
            <section className="relative bg-gradient-to-b from-base-200 to-base-100">
                <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
                    <svg
                        className="w-full h-full"
                        viewBox="0 0 800 600"
                        preserveAspectRatio="xMidYMid slice"
                    >
                        <g stroke="currentColor" strokeWidth="1" fill="none">
                            <line x1="100" y1="100" x2="300" y2="200" />
                            <line x1="300" y1="200" x2="500" y2="120" />
                            <line x1="500" y1="120" x2="650" y2="300" />
                            <line x1="300" y1="200" x2="200" y2="350" />
                            <line x1="200" y1="350" x2="450" y2="450" />
                            <circle cx="100" cy="100" r="4" fill="currentColor" />
                            <circle cx="300" cy="200" r="4" fill="currentColor" />
                            <circle cx="500" cy="120" r="4" fill="currentColor" />
                            <circle cx="650" cy="300" r="4" fill="currentColor" />
                            <circle cx="200" cy="350" r="4" fill="currentColor" />
                            <circle cx="450" cy="450" r="4" fill="currentColor" />
                        </g>
                    </svg>
                </div>

                <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-12 md:pt-28 md:pb-16">
                    <div className="max-w-3xl">
                        <p className="text-xs md:text-sm uppercase tracking-[0.25em] opacity-60">
                            {content.hero.eyebrow}
                        </p>

                        <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
                            {content.hero.title}
                        </h1>

                        <p className="mt-5 text-lg md:text-xl opacity-80">
                            {content.hero.description}
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-3">
                            <Link href={localPath("/contact")} className="btn btn-primary">
                                {content.hero.primaryButton}
                            </Link>

                            <Link href={localPath("/services")} className="btn btn-ghost">
                                {content.hero.secondaryButton}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured product */}
            <section className="pt-10 pb-16 md:pt-12 md:pb-20 bg-base-100 border-y border-base-200">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

                        <div>
                            <p className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-60">
                                {content.product.eyebrow}
                            </p>

                            <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
                                {content.product.title}
                            </h2>

                            <p className="mt-2 text-lg font-medium opacity-80">
                                {content.product.subtitle}
                            </p>

                            <p className="mt-5 max-w-xl opacity-80 leading-relaxed">
                                {content.product.description}
                            </p>

                            <ul className="mt-6 space-y-2 text-sm md:text-base opacity-80">
                                {content.product.bullets.map((bullet) => (
                                    <li key={bullet}>• {bullet}</li>
                                ))}
                            </ul>

                            <div className="mt-7 flex flex-col sm:flex-row gap-3">
                                <Link
                                    href={localPath("/tunnelmaster")}
                                    className="btn btn-primary"
                                >
                                    {content.product.primaryButton}
                                </Link>

                                <a
                                    href="https://tunnelimestari.roadminded.com"
                                    className="btn btn-ghost"
                                >
                                    {content.product.loginButton}
                                </a>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-base-300 bg-base-100 p-2 shadow-sm overflow-hidden">
                            <Image
                                src="/images/tunnelmaster-dashboard.png"
                                alt="TunnelMaster traffic and tunnel operations dashboard"
                                width={1200}
                                height={750}
                                className="w-full h-auto rounded-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex items-end justify-between gap-6">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-semibold">
                                {content.services.title}
                            </h2>

                            <p className="mt-3 max-w-2xl opacity-80">
                                {content.services.description}
                            </p>
                        </div>

                        <Link
                            href={localPath("/services")}
                            className="hidden md:inline-flex btn btn-ghost btn-sm"
                        >
                            {content.services.viewAll}
                        </Link>
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {content.services.items.map((service, index) => {
                            const Icon = SERVICE_ICONS[index];

                            return (
                                <div
                                    key={service.title}
                                    className="card bg-base-100 border border-base-300 shadow-sm"
                                >
                                    <div className="card-body">
                                        <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                            <Icon className="h-5 w-5" />
                                        </div>

                                        <h3 className="card-title text-xl">
                                            {service.title}
                                        </h3>

                                        <p className="opacity-80">
                                            {service.description}
                                        </p>

                                        <ul className="mt-3 list-disc pl-5 space-y-2 opacity-80 text-sm">
                                            {service.bullets.map((bullet) => (
                                                <li key={bullet}>{bullet}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-6 md:hidden">
                        <Link
                            href={localPath("/services")}
                            className="btn btn-ghost btn-sm w-full"
                        >
                            {content.services.viewAll}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Technology partners */}
            <section className="py-10 md:py-12 border-y border-base-200 bg-base-100">
                <div className="max-w-6xl mx-auto px-6">
                    <p className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-60">
                        {content.partners.title}
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-10">
                        {PARTNERS.map((partner) => (
                            <div
                                key={partner.name}
                                className="flex items-center gap-3 opacity-80"
                            >
                                <Image
                                    src={partner.logoSrc}
                                    alt={partner.logoAlt}
                                    width={140}
                                    height={40}
                                    className="h-8 md:h-10 w-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why RoadMinded */}
            <section className="py-16 md:py-20 bg-base-200">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-semibold">
                        {content.why.title}
                    </h2>

                    <p className="mt-3 max-w-3xl opacity-80">
                        {content.why.description}
                    </p>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
                        {content.why.items.map((item) => (
                            <div
                                key={item.title}
                                className="p-5 rounded-xl bg-base-100 border border-base-300"
                            >
                                <h3 className="font-semibold">{item.title}</h3>
                                <p className="mt-2 opacity-80">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-16 md:py-20 bg-base-100">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="p-8 md:p-10 rounded-2xl border border-base-300 bg-base-100 shadow-sm">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-semibold">
                                    {content.cta.title}
                                </h2>

                                <p className="mt-2 opacity-80">
                                    {content.cta.description}
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                                <Link
                                    href={localPath("/contact")}
                                    className="btn btn-primary px-6 py-3"
                                >
                                    {content.cta.contactButton}
                                </Link>

                                <Link
                                    href={localPath("/services")}
                                    className="btn btn-ghost flex-1"
                                >
                                    {content.cta.servicesButton}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}