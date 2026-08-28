export default function ContactPage({ content }) {
    const contactEmail = "info@roadminded.com";

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

            {/* Email + info */}
            <section className="py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-[2fr,1.5fr] items-start">
                    <div className="card bg-base-100 border border-base-300 shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">
                                {content.email.title}
                            </h2>

                            <p className="opacity-80 text-sm md:text-base">
                                {content.email.description}
                            </p>

                            <div className="mt-6 space-y-3 text-sm">
                                <div>
                                    <div className="font-medium">
                                        {content.email.addressLabel}
                                    </div>

                                    <div className="mt-1 font-mono break-all">
                                        {contactEmail}
                                    </div>
                                </div>

                                <div>
                                    <div className="font-medium">
                                        {content.email.subjectLabel}
                                    </div>

                                    <div className="mt-1 opacity-80">
                                        “{content.email.subject}”
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4">
                                <a
                                    href={`mailto:${contactEmail}?subject=${encodeURIComponent(
                                        content.email.subject
                                    )}`}
                                    className="btn btn-primary w-full md:w-auto"
                                >
                                    {content.email.button}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6 text-sm">
                        <div className="p-6 rounded-2xl border border-base-300 bg-base-100 shadow-sm">
                            <h2 className="text-lg font-semibold">
                                {content.include.title}
                            </h2>

                            <p className="mt-3 opacity-80">
                                {content.include.description}
                            </p>

                            <ul className="mt-2 list-disc pl-5 space-y-1 opacity-80">
                                {content.include.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="p-6 rounded-2xl border border-base-300 bg-base-100 shadow-sm">
                            <h2 className="text-lg font-semibold">
                                {content.next.title}
                            </h2>

                            <p className="mt-3 opacity-80">
                                {content.next.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}