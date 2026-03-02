import Link from "next/link";

export const metadata = {
    title: "About",
};

export default function About() {
    return (
        <div className="bg-base-100">
            {/* Hero / Intro */}
            <section className="bg-gradient-to-b from-base-200 to-base-100">
                <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
                    <div className="max-w-3xl">
                        <p className="text-xs md:text-sm uppercase tracking-[0.25em] opacity-60">
                            About RoadMinded Systems
                        </p>
                        <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                            Independent software and advisory for intelligent transport and
                            smart infrastructure.
                        </h1>
                        <p className="mt-5 text-lg md:text-xl opacity-80">
                            RoadMinded Systems bridges the gap between transport domain
                            expertise and modern software engineering. We help operators,
                            authorities and technology providers design, build and operate
                            systems that are safer, more efficient and more sustainable.
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
                            We are a software-focused practice with deep roots in intelligent
                            transport systems (ITS), tunnels, highways and smart
                            infrastructure. Our work combines:
                        </p>
                        <ul className="mt-4 list-disc pl-5 space-y-2 opacity-80">
                            <li>
                                Hands-on experience with control centres, tunnels and field
                                equipment
                            </li>
                            <li>
                                Modern data and software engineering practices in the cloud and
                                on-premise
                            </li>
                            <li>
                                Strong emphasis on open standards, interoperability and long‑term
                                maintainability
                            </li>
                        </ul>
                        <p className="mt-4 opacity-80">
                            We work with public authorities, operators and technology
                            providers to clarify requirements, design architectures and
                            deliver software that integrates cleanly into existing ecosystems.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl border border-base-300 bg-base-100 shadow-sm text-sm">
                        <h3 className="text-lg font-semibold">
                            Focused on Europe and Asia‑Pacific
                        </h3>
                        <p className="mt-3 opacity-80">
                            RoadMinded Systems is based in Europe with a strong focus on
                            projects and partnerships in Taiwan and the wider Asia‑Pacific
                            region. We understand both European standards and local deployment
                            realities.
                        </p>
                        <p className="mt-3 opacity-80">
                            This allows us to act as a bridge between innovative European
                            technologies and ambitious infrastructure programmes in
                            Asia‑Pacific.
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
                            <img
                                src="/images/ilkka-picture.jpg"
                                alt="Ilkka Kotilainen"
                                className="h-32 w-32 md:h-36 md:w-36 rounded-full object-cover border border-base-300 shadow-sm"
                            />
                        </div>

                        {/* Intro + bio */}
                        <div className="space-y-3 text-sm md:text-base max-w-2xl">
                            <h3 className="text-xl font-semibold">
                                Ilkka (家安迪) Kotilainen — Founder
                            </h3>

                            <p className="opacity-80">
                                RoadMinded Systems is founded and led by Ilkka Kotilainen, a software
                                engineer and transport systems specialist focused on Intelligent Transport
                                Systems (ITS), data engineering and standards-based software design.
                            </p>

                            <p className="opacity-80">
                                His experience spans public authorities, highway operators and industry,
                                working directly with traffic management centres and tunnel operations
                                teams on system pilots, studies and the development of interoperable,
                                standards-compliant software solutions.
                            </p>

                            <p className="opacity-80">
                                Ilkka's work emphasizes cloud-native architecture, open standards and
                                long-term maintainability to ensure resilient and future-proof transport systems.
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
                        How we work with our clients
                    </h2>
                    <p className="mt-3 max-w-3xl opacity-80">
                        Our engagements are designed to be practical and collaborative.
                        We aim to reduce risk and uncertainty in complex transport and
                        infrastructure projects.
                    </p>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                        <div className="p-5 rounded-xl bg-base-100 border border-base-300">
                            <h3 className="font-semibold">1. Understand & clarify</h3>
                            <p className="mt-2 opacity-80">
                                We start by understanding your current systems, constraints and
                                objectives—technical, operational and organisational.
                            </p>
                        </div>
                        <div className="p-5 rounded-xl bg-base-100 border border-base-300">
                            <h3 className="font-semibold">2. Architect & design</h3>
                            <p className="mt-2 opacity-80">
                                We define architectures, data flows and integration patterns
                                that respect standards, security and long‑term maintainability.
                            </p>
                        </div>
                        <div className="p-5 rounded-xl bg-base-100 border border-base-300">
                            <h3 className="font-semibold">3. Implement & iterate</h3>
                            <p className="mt-2 opacity-80">
                                We support implementation, testing and optimisation—whether
                                through our own software components or by working with your
                                teams and suppliers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values / principles */}
            <section className="py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-2xl md:text-3xl font-semibold">
                        Principles we work by
                    </h2>
                    <p className="mt-3 max-w-3xl opacity-80">
                        Our principles shape how we design systems and collaborate with
                        partners.
                    </p>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
                        <div className="p-5 rounded-xl bg-base-200 border border-base-300">
                            <h3 className="font-semibold">Standards‑driven</h3>
                            <p className="mt-2 opacity-80">
                                We favour open, well‑defined standards to reduce lock‑in and
                                improve interoperability between systems and vendors.
                            </p>
                        </div>
                        <div className="p-5 rounded-xl bg-base-200 border border-base-300">
                            <h3 className="font-semibold">Pragmatic</h3>
                            <p className="mt-2 opacity-80">
                                We look for solutions that can be implemented and operated
                                reliably within your current context—not just on paper.
                            </p>
                        </div>
                        <div className="p-5 rounded-xl bg-base-200 border border-base-300">
                            <h3 className="font-semibold">Transparent</h3>
                            <p className="mt-2 opacity-80">
                                We communicate clearly about assumptions, trade‑offs and risks
                                so you can make informed decisions.
                            </p>
                        </div>
                        <div className="p-5 rounded-xl bg-base-200 border border-base-300">
                            <h3 className="font-semibold">Long‑term</h3>
                            <p className="mt-2 opacity-80">
                                We design with lifecycle, maintainability and future extensions
                                in mind, not just initial delivery.
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
                                    Let’s discuss your next project.
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