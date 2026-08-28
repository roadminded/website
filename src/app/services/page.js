import Link from "next/link";
import Image from "next/image";
import { BarChart3, Server, Layers } from "lucide-react";

export const metadata = {
  title: "Services",
  description:
    "RoadMinded Systems provides ITS software products, transport software engineering and technical advisory services.",
};

const PRODUCT = {
  title: "TunnelMaster",
  subtitle: "Tunnel Operations Intelligence",
  icon: BarChart3,
  description:
    "Operational intelligence for tunnel operators, traffic management centres and road authorities, combining real-time and historical traffic management data in one analytical view.",
  bullets: [
    "Real-time and historical Variable Message Sign (VMS) monitoring",
    "Incident-focused operational analysis",
    "Operational timelines and historical review",
    "Traffic management reporting and statistics",
  ],
};

const SERVICES = [
  {
    title: "Transport Software Engineering",
    icon: Server,
    description:
      `Design and development of interoperable, standards-based transport
      software components and applications. We support operators and
      technology providers in building maintainable and scalable ITS backend systems.`,
    bullets: [
      "Backend platform and API development",
      "Open-data-driven applications",
      "Transport data pipelines and modelling",
      "Integration into existing ITS stacks",
      "Cloud-native and hybrid architectures",
    ],
  },
  {
    title: "ITS Architecture & Technical Advisory",
    icon: Layers,
    description:
      `Technical guidance for modern ITS and digital infrastructure
      systems. We help clarify requirements, define integration strategies and
      design interoperable system architectures.`,
    bullets: [
      "System architecture and integration design",
      "C-ITS and V2X ecosystem planning",
      "Road and street network digitalisation strategy",
      "Open standards and interoperability strategy",
    ],
    note:
      "Advisory engagements may be delivered independently or in collaboration with selected partners.",
  },
];

const PARTNERS = [
  {
    name: "ScanwAi – AI-Powered Infrastructure Intelligence",
    logoSrc: "/logos/scanwai-1.png",
    logoAlt: "ScanwAi Logo",
    logoClassName: "h-10 md:h-12",
    website: "https://scanwai.com",
    description:
      "AI-powered infrastructure intelligence for road and airport maintenance, condition monitoring and data-driven decision support.",
    bullets: [
      "AI-assisted road and infrastructure condition monitoring",
      "Early defect detection and maintenance prioritisation",
      "Real-time and historical infrastructure analytics",
      "Mobile field data collection and asset inventory",
      "Decision support for safer and more efficient maintenance",
    ],
  },
  {
    name: "Digitraffic – Connected Mobility & V2X",
    logoSrc: "/logos/digitraffic.png",
    logoAlt: "Digitraffic Logo",
    logoClassName: "h-8 md:h-10",
    website: "https://digitraffic.se",
    description:
      "Standards-based software and expertise for connected and cooperative mobility, linking vehicles, road infrastructure, authorities and smart cities.",
    bullets: [
      "C-ITS and connected mobility software and expertise",
      "Real-time digital traffic perception and data exchange",
      "Link V2X software-defined V2X communication platform",
      "Open standards, interoperability and C-ITS security",
      "Developer tools for connected and automated mobility services",
    ],
  },
];

export default function Services() {
  const ProductIcon = PRODUCT.icon;

  return (
    <div className="bg-base-100">

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-base-200 to-base-100 overflow-hidden">

        {/* Background grid */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
          <svg className="w-full h-full">
            <defs>
              <pattern
                id="grid"
                width="32"
                height="32"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 32 0 L 0 0 0 32"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.4"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] opacity-60">
              Services
            </p>

            <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
              Software Products and Technical Services for Intelligent Transport Systems
            </h1>

            <p className="mt-5 text-lg md:text-xl opacity-80">
              We develop standards-based transport software and provide technical
              services that integrate with existing ITS ecosystems and support safer,
              more efficient and sustainable transport operations.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn btn-primary">
                Talk to us
              </Link>

              <Link href="#services" className="btn btn-ghost">
                Explore our offering
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product */}
      <section id="services" className="pt-10 pb-16 md:pt-12 md:pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-60">
            Product
          </p>

          <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
            Our transport intelligence platform
          </h2>

          <div className="mt-10 card bg-base-100 border border-base-300 shadow-sm">
            <div className="card-body md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-[1fr,1.2fr] gap-8 lg:gap-12">

                <div>
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <ProductIcon className="h-5 w-5" />
                  </div>

                  <h3 className="text-2xl font-semibold">
                    {PRODUCT.title}
                  </h3>

                  <p className="mt-1 font-medium opacity-70">
                    {PRODUCT.subtitle}
                  </p>

                  <p className="mt-4 opacity-80">
                    {PRODUCT.description}
                  </p>

                  <div className="mt-6">
                    <Link
                      href="/tunnelmaster"
                      className="btn btn-primary btn-sm"
                    >
                      Explore TunnelMaster
                    </Link>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-medium uppercase tracking-wide opacity-60">
                    Capabilities
                  </p>

                  <ul className="mt-3 list-disc pl-5 space-y-2 opacity-80 text-sm">
                    {PRODUCT.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical services */}
      <section className="py-16 md:py-20 bg-base-200 border-y border-base-200">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-60">
            Technical services
          </p>

          <div className="mt-4 flex items-end justify-between gap-6">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Software engineering and technical advisory
            </h2>

            <p className="hidden md:block max-w-xl opacity-70">
              Practical technical services designed around existing ITS
              environments, open standards and long-term maintainability.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map(({ icon: Icon, title, description, bullets, note }) => (
              <div
                key={title}
                className="card bg-base-100 border border-base-300 shadow-sm"
              >
                <div className="card-body">
                  {Icon && (
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                  )}

                  <h3 className="card-title text-xl">{title}</h3>

                  <p className="opacity-80">{description}</p>

                  <p className="mt-3 text-sm font-medium uppercase tracking-wide opacity-60">
                    Capabilities
                  </p>

                  <ul className="mt-1 list-disc pl-5 space-y-2 opacity-80 text-sm">
                    {bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>

                  {note && (
                    <p className="mt-3 text-xs opacity-60">
                      {note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-16 md:py-20 bg-base-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Strategic Partnerships in Asia-Pacific
          </h2>

          <p className="mt-4 max-w-3xl opacity-80">
            In addition to our own software and technical services, RoadMinded Systems
            represents selected European technology partners in the Asia-Pacific
            market, enabling advanced AI-based infrastructure maintenance and
            V2X connectivity solutions.
          </p>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {PARTNERS.map((partner) => (
              <div
                key={partner.name}
                className="card bg-base-100 border border-base-300 shadow-sm"
              >
                <div className="card-body">
                  <div className="flex items-center justify-between gap-6">
                    <Image
                      src={partner.logoSrc}
                      alt={partner.logoAlt}
                      width={180}
                      height={60}
                      className={`${partner.logoClassName} w-auto object-contain`}
                    />

                    <div className="text-xs opacity-60 text-right">
                      Represented in Taiwan and Asia-Pacific
                    </div>
                  </div>

                  <h3 className="mt-2 text-xl font-bold">
                    {partner.name}
                  </h3>

                  <p className="opacity-80">
                    {partner.description}
                  </p>

                  <ul className="mt-3 list-disc pl-5 space-y-2 opacity-80 text-sm">
                    {partner.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>

                  {partner.website && (
                    <div className="mt-4">
                      <a
                        href={partner.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-sm"
                      >
                        Visit website
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 md:p-10 rounded-2xl border border-base-300 bg-base-100">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-semibold">
                  Looking to develop or modernise your transport systems?
                </h3>

                <p className="mt-2 opacity-80">
                  Tell us about your operational environment, systems and
                  objectives, and we can explore a practical way forward.
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