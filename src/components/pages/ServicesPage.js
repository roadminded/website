import Link from "next/link";
import Image from "next/image";
import { BarChart3, Server, Layers } from "lucide-react";

const SERVICE_ICONS = [Server, Layers];

export default function ServicesPage({
    content,
    localePrefix = "",
}) {
    const localPath = (path) => `${localePrefix}${path}`;
    const ProductIcon = BarChart3;

    return (
        <div className="bg-base-100">

            {/* Hero */}
            <section className="relative bg-gradient-to-b from-base-200 to-base-100 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
                    <svg className="w-full h-full">
                        <defs>
                            <pattern
                                id="grid"
                                width="32"
                                height="32"
                                patternUnits="userSpaceOnUse"
                            >
                                <path
                                    d="M 32 0 L 0 0 0 32"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="0.4"
                                />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
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

                            <Link href="#services" className="btn btn-ghost">
                                {content.hero.secondaryButton}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product */}
            <section id="services" className="pt-10 pb-16 md:pt-12 md:pb-20">
                <div className="max-w-6xl mx-auto px-6">
                    <p className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-60">
                        {content.product.eyebrow}
                    </p>

                    <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
                        {content.product.sectionTitle}
                    </h2>

                    <div className="mt-10 card bg-base-100 border border-base-300 shadow-sm">
                        <div className="card-body md:p-8">
                            <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] gap-8 lg:gap-12">

                                <div>
                                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <ProductIcon className="h-5 w-5" />
                                    </div>

                                    <h3 className="text-2xl font-semibold">
                                        {content.product.title}
                                    </h3>

                                    <p className="mt-1 font-medium opacity-70">
                                        {content.product.subtitle}
                                    </p>

                                    <p className="mt-4 opacity-80">
                                        {content.product.description}
                                    </p>

                                    <div className="mt-6">
                                        <Link
                                            href={localPath("/tunnelmaster")}
                                            className="btn btn-primary btn-sm"
                                        >
                                            {content.product.button}
                                        </Link>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-sm font-medium uppercase tracking-wide opacity-60">
                                        {content.product.capabilitiesLabel}
                                    </p>

                                    <ul className="mt-3 list-disc pl-5 space-y-2 opacity-80 text-sm">
                                        {content.product.bullets.map((bullet) => (
                                            <li key={bullet}>{bullet}</li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technical services */}
            <section className="py-16 md:py-20 bg-base-200 border-y border-base-200">
                <div className="max-w-6xl mx-auto px-6">
                    <p className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-60">
                        {content.services.eyebrow}
                    </p>

                    <div className="mt-4 flex items-end justify-between gap-6">
                        <h2 className="text-3xl md:text-4xl font-semibold">
                            {content.services.title}
                        </h2>

                        <p className="hidden md:block max-w-xl opacity-70">
                            {content.services.description}
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
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

                                        <p className="mt-3 text-sm font-medium uppercase tracking-wide opacity-60">
                                            {content.services.capabilitiesLabel}
                                        </p>

                                        <ul className="mt-1 list-disc pl-5 space-y-2 opacity-80 text-sm">
                                            {service.bullets.map((bullet) => (
                                                <li key={bullet}>{bullet}</li>
                                            ))}
                                        </ul>

                                        {service.note && (
                                            <p className="mt-3 text-xs opacity-60">
                                                {service.note}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Partnerships */}
            <section className="py-16 md:py-20 bg-base-100">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-semibold">
                        {content.partners.title}
                    </h2>

                    <p className="mt-4 max-w-3xl opacity-80">
                        {content.partners.description}
                    </p>

                    <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {content.partners.items.map((partner) => (
                            <div
                                key={partner.name}
                                className="card bg-base-100 border border-base-300 shadow-sm"
                            >
                                <div className="card-body">
                                    <div className="flex items-center justify-between gap-6">
                                        <Image
                                            src={partner.logoSrc}
                                            alt={partner.logoAlt}
                                            width={180}
                                            height={60}
                                            className={`${partner.logoClassName} w-auto object-contain`}
                                        />

                                        <div className="text-xs opacity-60 text-right">
                                            {content.partners.representedLabel}
                                        </div>
                                    </div>

                                    <h3 className="mt-2 text-xl font-bold">
                                        {partner.name}
                                    </h3>

                                    <p className="opacity-80">
                                        {partner.description}
                                    </p>

                                    <ul className="mt-3 list-disc pl-5 space-y-2 opacity-80 text-sm">
                                        {partner.bullets.map((bullet) => (
                                            <li key={bullet}>{bullet}</li>
                                        ))}
                                    </ul>

                                    <div className="mt-4">
                                        <a
                                            href={partner.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-outline btn-sm"
                                        >
                                            {content.partners.websiteButton}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-12 p-8 md:p-10 rounded-2xl border border-base-300 bg-base-100">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                            <div>
                                <h3 className="text-2xl font-semibold">
                                    {content.cta.title}
                                </h3>

                                <p className="mt-2 opacity-80">
                                    {content.cta.description}
                                </p>
                            </div>

                            <Link href={localPath("/contact")} className="btn btn-primary">
                                {content.cta.button}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}