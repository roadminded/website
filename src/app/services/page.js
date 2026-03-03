import Link from "next/link";
import { BarChart3, Server, Layers } from "lucide-react";

export const metadata = {
  title: "Services",
};

const SERVICES = [
  {
    title: "Transport & Tunnel Intelligence Platform",
    icon: BarChart3,
    description:
      `A modular analytics and decision-support platform for tunnel operators,
      highways and traffic control centres. This platform transforms raw traffic
      and infrastructure data into actionable operational intelligence.`,
    bullets: [
      "Real-time and historical Variable Message Sign (VMS) analytics",
      "Incident and post-incident traffic analysis",
      "Standards-based integrations (e.g. DATEX II, JSON, OpenLR)",
      "Cloud-native and scalable deployment",
    ],
    note:
      "",
  },
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
    note:
      "",
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
    name: "ScanwAi - AI-Powered Infrastructure Maintenance",
    logoSrc: "/logos/scanwai-1.png",
    logoAlt: "ScanwAi Logo",
    logoClassName: "h-10 md:h-12",
    website: "https://scanwai.com",
    description:
      "Making infrastructure maintenance smarter, safer, and more efficient through real-time and historical analytics.",
    bullets: [
      "AI-assisted road and airport maintenance – early defect detection & optimized repairs",
      "Real-time & historical infrastructure analytics – dashboards, KPIs & trend analysis",
      "Decision support for maintenance operations – cost reduction & lifecycle extension",
      "Sustainability & efficiency – reduced energy use, waste and CO₂ emissions",
      "Mobile-ready field solutions for infrastructure professionals",
      "Scalable cloud-native platform integrating with smart city & ITS ecosystems",
    ],
  },
  {
    name: "Link V2X – Software-Defined V2X Communication Platform",
    logoSrc: "/logos/digitraffic.png",
    logoAlt: "Digitraffic Logo",
    logoClassName: "h-8 md:h-10",
    website: "https://digitraffic.se",
    description:
      "Enabling real-time C-ITS connectivity between vehicles, infrastructure and authorities to support safer and smarter mobility.",
    bullets: [
      "Real-time digital traffic perception via fused infrastructure & vehicle data",
      "Supports safety & efficiency use cases (hazard warnings, emergency prioritization)",
      "Built on open industry standards for interoperability",
      "Compliant with C-V2X & V2N2X standards",
      "Supports ETSI messaging, V2X security (CCMS) & European specifications",
      "Developer toolkits (Java/.NET) for rapid V2X service deployment",
      "Designed for next-generation connected & automated mobility ecosystems",
    ],
  },
];

export default function Services() {
  return (
    <div className="bg-base-100">

      {/* Hero */}
      <section className="bg-gradient-to-b from-base-200 to-base-100">

        {/* Background network SVG */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
          <svg className="w-full h-full">
            <defs>
              <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.4"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] opacity-60">
              Services
            </p>

            <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
              Software and Technical Services for Intelligent Transport Systems
            </h1>

            <p className="mt-5 text-lg md:text-xl opacity-80">
              We design and deliver standards-based software platforms and technical
              guidance that integrate with existing ITS ecosystems and support safer,
              more efficient and sustainable transport operations.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn btn-primary">
                Talk to us
              </Link>
              <Link href="#services" className="btn btn-ghost">
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-3xl md:text-4xl font-semibold">What we do</h2>
            <p className="hidden md:block max-w-xl opacity-70">
              Modular offerings designed to integrate with existing ITS stacks and open standards.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    {bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>

                  {note && note.length > 0 && (
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
      <section className="py-16 md:py-20 bg-base-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Strategic Partnerships in Asia-Pacific
          </h2>

          <p className="mt-4 max-w-3xl opacity-80">
            In addition to our core transport intelligence software, RoadMinded Systems represents
            selected European technology partners in the Asia-Pacific market, enabling advanced
            AI-based infrastructure maintenance and V2X connectivity solutions.
          </p>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {PARTNERS.map((p) => (
              <div key={p.name} className="card bg-base-100 border border-base-300 shadow-sm">
                <div className="card-body">
                  <div className="flex items-center justify-between gap-6">
                    <img
                      src={p.logoSrc}
                      alt={p.logoAlt}
                      className={`${p.logoClassName} object-contain`}
                    />
                    <div className="text-xs opacity-60 text-right">
                      Represented in Taiwan and Asia-Pacific
                    </div>
                  </div>

                  <h3 className="mt-2 text-xl font-bold">{p.name}</h3>
                  <p className="opacity-80">{p.description}</p>

                  <ul className="mt-3 list-disc pl-5 space-y-2 opacity-80 text-sm">
                    {p.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                  {p.website && (
                    <div className="mt-4">
                      <a
                        href={p.website}
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
                  Looking to modernize your transport infrastructure?
                </h3>
                <p className="mt-2 opacity-80">
                  Tell us about your environment, standards, and data sources—we'll propose a path.
                </p>
              </div>
              <Link href="/contact" className="btn btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}