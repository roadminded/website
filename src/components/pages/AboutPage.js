import Link from "next/link";
import Image from "next/image";

export default function AboutPage({
    content,
    localePrefix = "",
}) {
    const localPath = (path) => `${localePrefix}${path}`;

    return (
        <div className="bg-base-100">
            {/* Hero */}
            <section className="bg-gradient-to-b from-base-200 to-base-100">
                <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
                    <div className="max-w-3xl">
                        <p className="text-xs md:text-sm uppercase tracking-[0.25em] opacity-60">
                            {content.hero.eyebrow}
                        </p>

                        <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                            {content.hero.title}
                        </h1>

                        <p className="mt-5 text-lg md:text-xl opacity-80">
                            {content.hero.description}
                        </p>
                    </div>
                </div>
            </section>

            {/* Who we are */}
            <section className="py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-[2fr,1.5fr] items-start">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold">
                            {content.who.title}
                        </h2>

                        <p className="mt-4 opacity-80">
                            {content.who.description}
                        </p>

                        <ul className="mt-4 list-disc pl-5 space-y-2 opacity-80">
                            {content.who.bullets.map((bullet) => (
                                <li key={bullet}>{bullet}</li>
                            ))}
                        </ul>

                        <p className="mt-4 opacity-80">
                            {content.who.closing}
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl border border-base-300 bg-base-100 shadow-sm text-sm">
                        <h3 className="text-lg font-semibold">
                            {content.region.title}
                        </h3>

                        <p className="mt-3 opacity-80">
                            {content.region.paragraph1}
                        </p>

                        <p className="mt-3 opacity-80">
                            {content.region.paragraph2}
                        </p>
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="py-12 md:py-16 bg-base-100">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        {content.leadership.title}
                    </h2>

                    <div className="mt-6 flex flex-col md:flex-row items-start gap-8">
                        <div className="shrink-0">
                            <Image
                                src="/images/ilkka-picture.jpg"
                                alt="Ilkka Kotilainen"
                                width={144}
                                height={144}
                                className="h-32 w-32 md:h-36 md:w-36 rounded-full object-cover border border-base-300 shadow-sm"
                            />
                        </div>

                        <div className="space-y-3 text-sm md:text-base max-w-2xl">
                            <h3 className="text-xl font-semibold">
                                {content.leadership.name}
                            </h3>

                            {content.leadership.paragraphs.map((paragraph) => (
                                <p key={paragraph} className="opacity-80">
                                    {paragraph}
                                </p>
                            ))}

                            <div className="pt-1">
                                <a
                                    href="mailto:info@roadminded.com"
                                    className="btn btn-ghost btn-md text-lg"
                                >
                                    {content.leadership.emailButton}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How we work */}
            <section className="py-16 md:py-20 bg-base-200">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        {content.process.title}
                    </h2>

                    <p className="mt-3 max-w-3xl opacity-80">
                        {content.process.description}
                    </p>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                        {content.process.items.map((item) => (
                            <div
                                key={item.title}
                                className="p-5 rounded-xl bg-base-100 border border-base-300"
                            >
                                <h3 className="font-semibold">
                                    {item.title}
                                </h3>

                                <p className="mt-2 opacity-80">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Principles */}
            <section className="py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        {content.principles.title}
                    </h2>

                    <p className="mt-3 max-w-3xl opacity-80">
                        {content.principles.description}
                    </p>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
                        {content.principles.items.map((item) => (
                            <div
                                key={item.title}
                                className="p-5 rounded-xl bg-base-200 border border-base-300"
                            >
                                <h3 className="font-semibold">
                                    {item.title}
                                </h3>

                                <p className="mt-2 opacity-80">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
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