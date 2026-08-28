import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "TunnelMaster",
    description:
        "TunnelMaster provides traffic and tunnel operations intelligence through real-time and historical operational data analysis.",
};

export default function TunnelMaster() {
    return (
        <div className="bg-base-100">
            {/* Hero */}
            <section className="relative bg-gradient-to-b from-base-200 to-base-100 border-b border-base-200">
                <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                        <div>
                            <p className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-60">
                                Product
                            </p>

                            <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                                TunnelMaster
                            </h1>

                            <p className="mt-3 text-xl md:text-2xl font-medium opacity-80">
                                Tunnel Operations Intelligence
                            </p>

                            <p className="mt-5 text-lg opacity-80 leading-relaxed">
                                TunnelMaster brings real-time and historical traffic management
                                data into one analytical view, helping tunnel operators, traffic
                                management centres and road authorities understand operational
                                events, traffic control actions and changing conditions over time.
                            </p>

                            <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                <Link href="/contact" className="btn btn-primary">
                                    Request a demonstration
                                </Link>

                                <a
                                    href="https://tunnelimestari.roadminded.com"
                                    className="btn btn-ghost"
                                >
                                    Login
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
                            Operational challenge
                        </p>

                        <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
                            Understand what happened — and why
                        </h2>

                        <p className="mt-4 max-w-2xl opacity-80 leading-relaxed">
                            Traffic management environments generate large amounts of
                            operational data, but understanding how signs, traffic conditions
                            and events developed over time can be difficult.
                        </p>

                        <p className="mt-4 max-w-2xl opacity-80 leading-relaxed">
                            TunnelMaster brings this information together to support
                            retrospective analysis, operational review and continuous
                            improvement.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl border border-base-300 bg-base-200">
                        <h3 className="text-lg font-semibold">
                            From live situation to historical context
                        </h3>

                        <p className="mt-3 opacity-80">
                            Instead of viewing only the current operational state,
                            TunnelMaster makes it possible to review how traffic management
                            actions and conditions changed over time — for example, by
                            examining VMS states before, during and after an incident.
                        </p>
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="py-16 md:py-20 bg-base-200 border-y border-base-200">
                <div className="max-w-6xl mx-auto px-6">
                    <p className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-60">
                        Capabilities
                    </p>

                    <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
                        Operational insight from traffic management data
                    </h2>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 rounded-2xl bg-base-100 border border-base-300">
                            <h3 className="text-xl font-semibold">
                                Real-time and historical VMS monitoring
                            </h3>
                            <p className="mt-3 opacity-80">
                                Review current and historical Variable Message Sign states across
                                the selected road or tunnel environment.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-base-100 border border-base-300">
                            <h3 className="text-xl font-semibold">
                                Incident-focused operational analysis
                            </h3>
                            <p className="mt-3 opacity-80">
                                Analyse operational information around incidents and unusual
                                situations to support retrospective review.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-base-100 border border-base-300">
                            <h3 className="text-xl font-semibold">
                                Operational timelines
                            </h3>
                            <p className="mt-3 opacity-80">
                                Examine how traffic management actions and system states changed
                                before, during and after selected events.
                            </p>
                        </div>

                        <div className="p-6 rounded-2xl bg-base-100 border border-base-300">
                            <h3 className="text-xl font-semibold">
                                Reporting and statistics
                            </h3>
                            <p className="mt-3 opacity-80">
                                Use historical operational data to support reporting, recurring
                                analysis and longer-term development of traffic management
                                practices.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Users */}
            <section className="py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <p className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-60">
                        Designed for
                    </p>

                    <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
                        Road and tunnel operations
                    </h2>

                    <p className="mt-4 max-w-3xl opacity-80">
                        TunnelMaster is designed for organisations responsible for operating,
                        monitoring and analysing road and tunnel environments.
                    </p>

                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-sm">
                        {[
                            "Tunnel operators",
                            "Traffic management centres",
                            "Road authorities",
                            "Operations & maintenance teams",
                        ].map((item) => (
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
                            Data and integration
                        </p>

                        <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
                            Built around existing transport data
                        </h2>

                        <div className="mt-6 flex flex-wrap gap-2 text-sm">
                            <span className="rounded-full border border-base-300 px-3 py-1 opacity-80">
                                REST APIs
                            </span>
                            <span className="rounded-full border border-base-300 px-3 py-1 opacity-80">
                                JSON
                            </span>
                            <span className="rounded-full border border-base-300 px-3 py-1 opacity-80">
                                DATEX II
                            </span>
                            <span className="rounded-full border border-base-300 px-3 py-1 opacity-80">
                                Open transport data
                            </span>
                        </div>

                        <p className="mt-4 opacity-80 leading-relaxed">
                            TunnelMaster is designed to work with existing traffic management
                            and transport data sources rather than creating another isolated
                            operational system.
                        </p>

                        <p className="mt-4 opacity-80 leading-relaxed">
                            Data can be integrated through APIs and standards-based interfaces,
                            enabling information from different sources to be analysed within
                            a common operational context.
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
                                    Interested in TunnelMaster?
                                </h2>

                                <p className="mt-2 max-w-2xl opacity-80">
                                    Contact RoadMinded Systems to discuss your operational
                                    environment, available data sources or a potential
                                    demonstration.
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