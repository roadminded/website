import Link from "next/link";

export const metadata = {
  title: "Contact",
};

export default function Contact() {
  // TODO: change this to your real contact email
  const contactEmail = "info@roadminded.com";

  return (
    <div className="bg-base-100">
      {/* Hero / Intro */}
      <section className="bg-gradient-to-b from-base-200 to-base-100">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <div className="max-w-3xl">
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] opacity-60">
              Contact RoadMinded Systems
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              Let&apos;s discuss your transport or infrastructure project.
            </h1>
            <p className="mt-5 text-lg md:text-xl opacity-80">
              For now, the easiest way to reach us is by email. Share a bit
              about your context, systems and goals, and we&apos;ll get back to
              you.
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
              <h2 className="card-title text-2xl">Email us</h2>
              <p className="opacity-80 text-sm md:text-base">
                Send us an email with a short description of your organisation,
                project and what you&apos;re looking for.
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
                    “Inquiry – Intelligent transport / smart infrastructure”
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={`mailto:${contactEmail}?subject=${encodeURIComponent(
                    "Inquiry – Intelligent transport / smart infrastructure"
                  )}`}
                  className="btn btn-primary w-full md:w-auto"
                >
                  Open email client
                </a>
              </div>
            </div>
          </div>

          {/* Info / notes */}
          <div className="space-y-6 text-sm">
            <div className="p-6 rounded-2xl border border-base-300 bg-base-100 shadow-sm">
              <h2 className="text-lg font-semibold">What to include</h2>
              <p className="mt-3 opacity-80">
                It&apos;s helpful if you can briefly describe:
              </p>
              <ul className="mt-2 list-disc pl-5 space-y-1 opacity-80">
                <li>Your organisation and role</li>
                <li>The systems or infrastructure you&apos;re working with</li>
                <li>The challenge or opportunity you&apos;d like to discuss</li>
                <li>Any timelines or constraints we should be aware of</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl border border-base-300 bg-base-100 shadow-sm">
              <h2 className="text-lg font-semibold">Next steps</h2>
              <p className="mt-3 opacity-80">
                We use your email only to respond to your enquiry and to prepare
                for a potential conversation. If a deeper discussion is useful,
                we&apos;ll propose a call or meeting.
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