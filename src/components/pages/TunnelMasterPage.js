import Link from "next/link";
import Image from "next/image";

export default function TunnelMasterPage({
    content,
    localePrefix = "",
}) {
    const localPath = (path) => `${localePrefix}${path}`;

    return (
        <div className="bg-base-100">
            {/* Hero */}
            <section className="relative bg-gradient-to-b from-base-200 to-base-100 border-b border-base-200">
                <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                        <div>
                            <p className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-60">
                                {content.hero.eyebrow}
                            </p>

                            <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                                {content.hero.title}
                            </h1>

                            <p className="mt-3 text-xl md:text-2xl font-medium opacity-80">
                                {content.hero.subtitle}
                            </p>

                            <p className="mt-5 text-lg opacity-80 leading-relaxed">
                                {content.hero.description}
                            </p>

                            <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                <Link
                                    href={localPath("/contact")}
                                    className="btn btn-primary"
                                >
                                    {content.hero.demoButton}
                                </Link>

                                <a
                                    href="https://tunnelimestari.roadminded.com"
                                    className="btn btn-ghost"
                                >
                                    {content.hero.loginButton}
                                </a>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-base-300 bg-base-100 p-2 shadow-sm overflow-hidden">
                            <Image
                                src="/images/tunnelmaster-dashboard.png"
                                alt={content.hero.imageAlt}
                                width={1200}
                                height={750}
                                className="w-full h-auto rounded-xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Challenge */}
            <section className="py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-[1.2fr,1fr]">
                    <div>
                        <p className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-60">
                            {content.challenge.eyebrow}
                        </p>

                        <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
                            {content.challenge.title}
                        </h2>

                        <p className="mt-4 max-w-2xl opacity-80 leading-relaxed">
                            {content.challenge.paragraph1}
                        </p>

                        <p className="mt-4 max-w-2xl opacity-80 leading-relaxed">
                            {content.challenge.paragraph2}
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl border border-base-300 bg-base-200">
                        <h3 className="text-lg font-semibold">
                            {content.challenge.cardTitle}
                        </h3>

                        <p className="mt-3 opacity-80">
                            {content.challenge.cardText}
                        </p>
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="py-16 md:py-20 bg-base-200 border-y border-base-200">
                <div className="max-w-6xl mx-auto px-6">
                    <p className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-60">
                        {content.capabilities.eyebrow}
                    </p>

                    <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
                        {content.capabilities.title}
                    </h2>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {content.capabilities.items.map((item) => (
                            <div
                                key={item.title}
                                className="p-6 rounded-2xl bg-base-100 border border-base-300"
                            >
                                <h3 className="text-xl font-semibold">
                                    {item.title}
                                </h3>

                                <p className="mt-3 opacity-80">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Users */}
            <section className="py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <p className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-60">
                        {content.users.eyebrow}
                    </p>

                    <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
                        {content.users.title}
                    </h2>

                    <p className="mt-4 max-w-3xl opacity-80">
                        {content.users.description}
                    </p>

                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-sm">
                        {content.users.items.map((item) => (
                            <div
                                key={item}
                                className="p-5 rounded-xl border border-base-300 bg-base-100"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integration */}
            <section className="py-16 md:py-20 bg-base-200">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="max-w-3xl">
                        <p className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-60">
                            {content.integration.eyebrow}
                        </p>

                        <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
                            {content.integration.title}
                        </h2>

                        <div className="mt-6 flex flex-wrap gap-2 text-sm">
                            {content.integration.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-base-300 px-3 py-1 opacity-80"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <p className="mt-4 opacity-80 leading-relaxed">
                            {content.integration.paragraph1}
                        </p>

                        <p className="mt-4 opacity-80 leading-relaxed">
                            {content.integration.paragraph2}
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="p-8 md:p-10 rounded-2xl border border-base-300 bg-base-100 shadow-sm">
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-semibold">
                                    {content.cta.title}
                                </h2>

                                <p className="mt-2 max-w-2xl opacity-80">
                                    {content.cta.description}
                                </p>
                            </div>

                            <Link
                                href={localPath("/contact")}
                                className="btn btn-primary"
                            >
                                {content.cta.button}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}