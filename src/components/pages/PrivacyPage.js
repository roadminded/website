export default function PrivacyPage({ content }) {
    return (
        <div className="bg-base-100">
            {/* Hero */}
            <section className="bg-gradient-to-b from-base-200 to-base-100 border-b border-base-200">
                <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
                    <p className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-60">
                        {content.hero.eyebrow}
                    </p>

                    <h1 className="mt-4 text-4xl md:text-5xl font-bold">
                        {content.hero.title}
                    </h1>

                    <p className="mt-5 text-lg opacity-80 max-w-3xl">
                        {content.hero.description}
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-16 md:py-20">
                <div className="max-w-4xl mx-auto px-6 space-y-10">

                    <section>
                        <h2 className="text-2xl font-semibold">
                            {content.controller.title}
                        </h2>

                        <div className="mt-4 opacity-80 space-y-1">
                            <p>RoadMinded Systems Oy</p>
                            <p>Business ID: 3608959-6</p>
                            <p>Helsinki, Finland</p>
                            <p>
                                {content.controller.emailLabel}:{" "}
                                <a
                                    href="mailto:info@roadminded.com"
                                    className="link link-hover"
                                >
                                    info@roadminded.com
                                </a>
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold">
                            {content.data.title}
                        </h2>

                        {content.data.paragraphs.map((paragraph) => (
                            <p key={paragraph} className="mt-4 opacity-80">
                                {paragraph}
                            </p>
                        ))}
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold">
                            {content.purpose.title}
                        </h2>

                        {content.purpose.paragraphs.map((paragraph) => (
                            <p key={paragraph} className="mt-4 opacity-80">
                                {paragraph}
                            </p>
                        ))}
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold">
                            {content.retention.title}
                        </h2>

                        {content.retention.paragraphs.map((paragraph) => (
                            <p key={paragraph} className="mt-4 opacity-80">
                                {paragraph}
                            </p>
                        ))}
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold">
                            {content.cookies.title}
                        </h2>

                        <p className="mt-4 opacity-80">
                            {content.cookies.description}
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold">
                            {content.rights.title}
                        </h2>

                        {content.rights.paragraphs.map((paragraph) => (
                            <p key={paragraph} className="mt-4 opacity-80">
                                {paragraph}
                            </p>
                        ))}

                        <p className="mt-4 opacity-80">
                            {content.rights.contactText}{" "}
                            <a
                                href="mailto:info@roadminded.com"
                                className="link link-hover"
                            >
                                info@roadminded.com
                            </a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold">
                            {content.tunnelmaster.title}
                        </h2>

                        <p className="mt-4 opacity-80">
                            {content.tunnelmaster.description}
                        </p>
                    </section>

                    <section className="pt-4 border-t border-base-300">
                        <p className="text-sm opacity-60">
                            {content.updated}
                        </p>
                    </section>

                </div>
            </section>
        </div>
    );
}