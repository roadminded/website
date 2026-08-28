export const metadata = {
  title: "Privacy",
  description:
    "Privacy information for the RoadMinded Systems website and business enquiries.",
};

export default function Privacy() {
  return (
    <div className="bg-base-100">

      {/* Hero */}
      <section className="bg-gradient-to-b from-base-200 to-base-100 border-b border-base-200">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-60">
            Privacy
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold">
            Privacy Notice
          </h1>

          <p className="mt-5 text-lg opacity-80 max-w-3xl">
            This notice explains how RoadMinded Systems processes personal data
            in connection with this website and general business enquiries.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-10">

          <section>
            <h2 className="text-2xl font-semibold">
              1. Data controller
            </h2>

            <div className="mt-4 opacity-80 space-y-1">
              <p>RoadMinded Systems Oy</p>
              <p>Business ID: 3608959-6</p>
              <p>Helsinki, Finland</p>
              <p>
                Email:{" "}
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
              2. Personal data we process
            </h2>

            <p className="mt-4 opacity-80">
              We may process personal data you provide when contacting us,
              including your name, email address, organisation, role and message
              content.
            </p>

            <p className="mt-3 opacity-80">
              Technical information such as IP addresses and request logs may
              also be processed by services used to operate and secure the
              website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              3. Why we process personal data
            </h2>

            <p className="mt-4 opacity-80">
              Personal data may be processed to respond to enquiries, evaluate
              potential projects and business relationships, communicate with
              customers and partners, and maintain the security and operation of
              the website.
            </p>

            <p className="mt-3 opacity-80">
              Processing is based on our legitimate interests in conducting and
              developing our business and, where relevant, taking steps prior to
              entering into a contract.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              4. Retention and service providers
            </h2>

            <p className="mt-4 opacity-80">
              Personal data is retained only for as long as necessary for the
              purposes described above and to meet applicable legal,
              contractual and accounting requirements.
            </p>

            <p className="mt-3 opacity-80">
              We may use service providers for website hosting, email,
              communications and other technical services. Where personal data
              is transferred outside the European Economic Area, appropriate
              safeguards are used as required by applicable data protection law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              5. Cookies and analytics
            </h2>

            <p className="mt-4 opacity-80">
              RoadMinded Systems does not currently use advertising or marketing
              cookies on this website. If analytics or other technologies that
              require additional information or consent are introduced later,
              this notice will be updated accordingly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">
              6. Your rights
            </h2>

            <p className="mt-4 opacity-80">
              Depending on the circumstances, you may have the right to access,
              correct or delete your personal data, restrict or object to its
              processing, and request data portability.
            </p>

            <p className="mt-3 opacity-80">
              You also have the right to lodge a complaint with a competent data
              protection supervisory authority.
            </p>

            <p className="mt-3 opacity-80">
              To exercise your rights or ask questions about your personal data,
              contact{" "}
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
              TunnelMaster service
            </h2>

            <p className="mt-4 opacity-80">
              This notice applies to the RoadMinded Systems website and general
              business communications. Personal data processed within
              TunnelMaster may be subject to separate privacy information and
              contractual data-processing arrangements.
            </p>
          </section>

          <section className="pt-4 border-t border-base-300">
            <p className="text-sm opacity-60">
              Last updated: 28 August 2026
            </p>
          </section>

        </div>
      </section>
    </div>

  );
}
