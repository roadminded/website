import Link from "next/link";
import Image from "next/image";


export const metadata = {
    title: "About",
    description:
        "Learn about RoadMinded Systems, a Finnish ITS software company combining transport expertise, modern software engineering and open standards across Europe and Asia-Pacific.",
};

export default function About() {
    return (
        <div className="bg-base-100">
            {/* Hero / Intro */}
            <section className="bg-gradient-to-b from-base-200 to-base-100">
                <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
                    <div className="max-w-3xl">
                        <p className="text-xs md:text-sm uppercase tracking-[0.25em] opacity-60">
                            About
                        </p>
                        <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                            Independent Software and Technical Advisory for
                            Intelligent Transport Systems
                        </h1>
                        <p className="mt-5 text-lg md:text-xl opacity-80">
                            RoadMinded Systems bridges transport domain expertise
                            with modern software engineering and open standards.
                            We support operators, authorities and technology providers
                            in designing, building and improving systems that support
                            safer, more efficient and sustainable transport operations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Who we are */}
            <section className="py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-[2fr,1.5fr] items-start">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-semibold">Who we are</h2>
                        <p className="mt-4 opacity-80">
                            RoadMinded Systems is a software-led company operating at the
                            intersection of Intelligent Transport Systems (ITS) and modern
                            digital infrastructure.
                        </p>
                        <ul className="mt-4 list-disc pl-5 space-y-2 opacity-80">
                            <li>
                                Experience within public authorities, highway operators and
                                traffic management centres
                            </li>
                            <li>
                                Cloud-native software engineering for transport environments
                            </li>
                            <li>
                                Open standards and interoperability as core architectural principles
                            </li>
                        </ul>
                        <p className="mt-4 opacity-80">
                            We work with operators and technology providers to design resilient,
                            standards-based systems that integrate seamlessly into existing
                            transport ecosystems.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl border border-base-300 bg-base-100 shadow-sm text-sm">
                        <h3 className="text-lg font-semibold">
                            Focused on Europe and Asia-Pacific
                        </h3>
                        <p className="mt-3 opacity-80">
                            RoadMinded Systems is incorporated in Finland and operates actively
                            in Taiwan and the wider Asia-Pacific region.
                        </p>
                        <p className="mt-3 opacity-80">
                            We combine European ITS standards and governance frameworks with
                            practical insight into local deployment environments, enabling
                            cross-border collaboration and resilient system design.
                        </p>
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="py-12 md:py-16 bg-base-100">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-2xl md:text-3xl font-semibold">Leadership</h2>

                    <div className="mt-6 flex flex-col md:flex-row items-start gap-8">
                        {/* Image, fixed width so text lines up nicely */}
                        <div className="shrink-0">
                            <Image
                                src="/images/ilkka-picture.jpg"
                                alt="Ilkka Kotilainen"
                                width={144}
                                height={144}
                                className="h-32 w-32 md:h-36 md:w-36 rounded-full object-cover border border-base-300 shadow-sm"
                            />
                        </div>

                        {/* Intro + bio */}
                        <div className="space-y-3 text-sm md:text-base max-w-2xl">
                            <h3 className="text-xl font-semibold">
                                Ilkka (家安迪) Kotilainen — Founder
                            </h3>

                            <p className="opacity-80">
                                Ilkka Kotilainen is a software engineer and transport systems
                                specialist focused on Intelligent Transport Systems (ITS),
                                transport data engineering and standards-based software design.
                            </p>

                            <p className="opacity-80">
                                His experience spans public authorities, highway operators and industry,
                                working directly with traffic management centres and tunnel operations
                                teams on system pilots, studies and the development of interoperable,
                                standards-compliant software solutions.
                            </p>

                            <p className="opacity-80">
                                His work emphasizes cloud-native architecture, open standards and
                                long-term maintainability to support resilient and future-proof
                                transport systems.
                            </p>

                            <div className="pt-1">
                                <a
                                    href="mailto:info@roadminded.com"
                                    className="btn btn-ghost btn-md text-lg"
                                >
                                    Email me
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
                        How we work
                    </h2>
                    <p className="mt-3 max-w-3xl opacity-80">
                        We take a practical, problem-solving approach to transport and
                        infrastructure software challenges, focusing on clarity,
                        technical soundness and maintainable solutions.
                    </p>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                        <div className="p-5 rounded-xl bg-base-100 border border-base-300">
                            <h3 className="font-semibold">1. Understand & clarify</h3>
                            <p className="mt-2 opacity-80">
                                We analyse your existing systems, data and operational context
                                to define clear technical objectives, constraints and
                                integration requirements.
                            </p>
                        </div>
                        <div className="p-5 rounded-xl bg-base-100 border border-base-300">
                            <h3 className="font-semibold">2. Architect & design</h3>
                            <p className="mt-2 opacity-80">
                                We design system architectures, data models and integration
                                patterns aligned with open standards, interoperability and
                                security principles.
                            </p>
                        </div>
                        <div className="p-5 rounded-xl bg-base-100 border border-base-300">
                            <h3 className="font-semibold">3. Develop & iterate</h3>
                            <p className="mt-2 opacity-80">
                                We develop targeted software solutions or analytical tools
                                to address identified needs, refining them through testing and
                                feedback to ensure reliable integration within existing
                                ITS environments.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values / principles */}
            <section className="py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Principles
                    </h2>
                    <p className="mt-3 max-w-3xl opacity-80">
                        These principles guide how we design, develop and integrate transport systems.
                    </p>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
                        <div className="p-5 rounded-xl bg-base-200 border border-base-300">
                            <h3 className="font-semibold">Standards-driven</h3>
                            <p className="mt-2 opacity-80">
                                We prioritise open, well-defined standards to reduce vendor
                                lock-in and ensure interoperability across systems and stakeholders.
                            </p>
                        </div>
                        <div className="p-5 rounded-xl bg-base-200 border border-base-300">
                            <h3 className="font-semibold">Pragmatic</h3>
                            <p className="mt-2 opacity-80">
                                We focus on solutions that can be realistically implemented
                                and operated within your technical and organisational context.
                            </p>
                        </div>
                        <div className="p-5 rounded-xl bg-base-200 border border-base-300">
                            <h3 className="font-semibold">Transparent</h3>
                            <p className="mt-2 opacity-80">
                                We communicate assumptions, trade-offs and risks clearly,
                                enabling informed technical and strategic decisions.
                            </p>
                        </div>
                        <div className="p-5 rounded-xl bg-base-200 border border-base-300">
                            <h3 className="font-semibold">Long-term</h3>
                            <p className="mt-2 opacity-80">
                                We design for lifecycle sustainability, maintainability and
                                future evolution — not only initial deployment.
                            </p>
                        </div>
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
                                    Let's discuss your next project.
                                </h2>
                                <p className="mt-2 opacity-80">
                                    Whether you are analysing data, planning system improvements or
                                    developing tailored software solutions, we would be glad to explore
                                    how we can support your objectives.
                                </p>
                            </div>
                            <Link href="/contact" className="btn btn-primary">
                                Contact us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}