import Link from "next/link";

export const metadata = {
    title: "Contact",
    description:
        "Contact RoadMinded Systems about intelligent transport systems, transport software, TunnelMaster and technical collaboration.",
};

export default function Contact() {

    const contactEmail = "info@roadminded.com";

    return (
        <div className="bg-base-100">

            {/* Hero / Intro */}
            <section className="bg-gradient-to-b from-base-200 to-base-100">
                <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
                    <div className="max-w-3xl">
                        <p className="text-xs md:text-sm uppercase tracking-[0.25em] opacity-60">
                            Contact
                        </p>
                        <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                            Let's discuss your transport systems and objectives.
                        </h1>
                        <p className="mt-5 text-lg md:text-xl opacity-80">
                            The easiest way to reach us is by email. Please share a brief
                            overview of your organisation, systems and objectives, and
                            we will respond promptly.
                        </p>
                    </div>
                </div>
            </section>

            {/* Email + info */}
            <section className="py-16 md:py-20">
                <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-[2fr,1.5fr] items-start">
                    {/* Email card */}
                    <div className="card bg-base-100 border border-base-300 shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">Email</h2>
                            <p className="opacity-80 text-sm md:text-base">
                                Please send a brief introduction outlining your organisation,
                                project context and objectives.
                            </p>

                            <div className="mt-6 space-y-3 text-sm">
                                <div>
                                    <div className="font-medium">Email address</div>
                                    <div className="mt-1 font-mono break-all">
                                        {contactEmail}
                                    </div>
                                </div>

                                <div>
                                    <div className="font-medium">Suggested subject</div>
                                    <div className="mt-1 opacity-80">
                                        “Inquiry - Intelligent Transport Systems”
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4">
                                <a
                                    href={`mailto:${contactEmail}?subject=${encodeURIComponent(
                                        "Inquiry - Intelligent Transport Systems"
                                    )}`}
                                    className="btn btn-primary w-full md:w-auto"
                                >
                                    Send us an email
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Info / notes */}
                    <div className="space-y-6 text-sm">
                        <div className="p-6 rounded-2xl border border-base-300 bg-base-100 shadow-sm">
                            <h2 className="text-lg font-semibold">What to include</h2>
                            <p className="mt-3 opacity-80">
                                To help us understand your context, please describe:
                            </p>
                            <ul className="mt-2 list-disc pl-5 space-y-1 opacity-80">
                                <li>Your organisation and role</li>
                                <li>The systems or infrastructure involved</li>
                                <li>The challenge or opportunity you would like to explore</li>
                                <li>Relevant timelines or constraints</li>
                            </ul>
                        </div>

                        <div className="p-6 rounded-2xl border border-base-300 bg-base-100 shadow-sm">
                            <h2 className="text-lg font-semibold">Next steps</h2>
                            <p className="mt-3 opacity-80">
                                Your message will be used solely to respond to your enquiry and
                                assess potential next steps. If appropriate, we will propose
                                a call or meeting to continue the discussion.
                            </p>
                            <div className="mt-4">
                                <Link href="/" className="link link-hover">
                                    Back to homepage
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}