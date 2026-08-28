import Link from "next/link";
import Image from "next/image";
import { BarChart3, Server, Layers } from "lucide-react";


export const metadata = {
  description:
    "RoadMinded Systems develops standards-based ITS software, TunnelMaster traffic operations intelligence and technical solutions for Europe and Asia-Pacific.",
};


const SERVICE_SUMMARY = [
  {
    title: "Transport & Tunnel Intelligence",
    icon: BarChart3,
    description:
      "Analytics and decision-support for tunnel and highway operators as well as traffic management centres.",
    bullets: [
      "Real-time and historical Variable Message Sign (VMS) analytics",
      "Incident and post-incident analysis",
      "Standards-based integrations (e.g. JSON, DATEX II, OpenLR)",
      "Cloud-native and scalable architecture",
    ],
  },
  {
    title: "Transport Software Engineering",
    icon: Server,
    description:
      "Design and development of interoperable, standards-based transport software components and applications.",
    bullets: [
      "Backend platforms and API development",
      "Open-data-driven applications",
      "Integration with existing ITS ecosystems",
      "Data modelling and quality frameworks",
      "Cloud-native and hybrid deployments",
    ],
  },
  {
    title: "ITS Architecture & Technical Advisory",
    icon: Layers,
    description:
      "Technical guidance for modern ITS and digital infrastructure systems, delivered independently or in collaboration with selected partners.",
    bullets: [
      "System architecture and integration design",
      "C-ITS and V2X ecosystem planning",
      "Road and street network digitalisation strategy",
      "Open standards and interoperability frameworks",
    ],
  },
];

const PARTNERS = [
  {
    name: "ScanwAi",
    logoSrc: "/logos/scanwai-1.png",
    logoAlt: "ScanwAi",
  },
  {
    name: "Digitraffic / Link V2X",
    logoSrc: "/logos/digitraffic.png",
    logoAlt: "Digitraffic / Link V2X",
  },
];

export default function Home() {
  return (
    <div className="bg-base-100">

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-base-200 to-base-100">

        {/*Static SVG Background inside Hero Section */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
          <svg
            className="w-full h-full"
            viewBox="0 0 800 600"
            preserveAspectRatio="xMidYMid slice"
          >
            <g stroke="currentColor" strokeWidth="1" fill="none">
              <line x1="100" y1="100" x2="300" y2="200" />
              <line x1="300" y1="200" x2="500" y2="120" />
              <line x1="500" y1="120" x2="650" y2="300" />
              <line x1="300" y1="200" x2="200" y2="350" />
              <line x1="200" y1="350" x2="450" y2="450" />
              <circle cx="100" cy="100" r="4" fill="currentColor" />
              <circle cx="300" cy="200" r="4" fill="currentColor" />
              <circle cx="500" cy="120" r="4" fill="currentColor" />
              <circle cx="650" cy="300" r="4" fill="currentColor" />
              <circle cx="200" cy="350" r="4" fill="currentColor" />
              <circle cx="450" cy="450" r="4" fill="currentColor" />
            </g>
          </svg>
        </div>

        { /* Hero content */}
        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-12 md:pt-28 md:pb-16">

          <div className="max-w-3xl">
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] opacity-60">
              Standards-Based ITS Software • Europe & Asia-Pacific
            </p>

            <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
              Building Software for Intelligent Transport Systems
            </h1>

            <p className="mt-5 text-lg md:text-xl opacity-80">
              RoadMinded Systems supports operators, authorities and technology
              providers in transforming transport and infrastructure data into
              safer, more efficient and sustainable operations.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn btn-primary">
                Talk to us
              </Link>
              <Link href="/services" className="btn btn-ghost">
                Explore services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured product: TunnelMaster */}
      <section className="pt-10 pb-16 md:pt-12 md:pb-20 bg-base-100 border-y border-base-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

            {/* Text */}
            <div>
              <p className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-60">
                Featured product
              </p>

              <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
                TunnelMaster
              </h2>

              <p className="mt-2 text-lg font-medium opacity-80">
                Tunnel Operations Intelligence
              </p>

              <p className="mt-5 max-w-xl opacity-80 leading-relaxed">
                TunnelMaster brings real-time and historical traffic management
                data into one analytical view, helping operators understand traffic
                control actions, incidents and changing conditions across road and
                tunnel environments.
              </p>

              <ul className="mt-6 space-y-2 text-sm md:text-base opacity-80">
                <li>• Real-time and historical VMS monitoring</li>
                <li>• Incident-focused operational analysis</li>
                <li>• Operational timelines and historical review</li>
                <li>• Traffic management reporting and statistics</li>
              </ul>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Link href="/tunnelmaster" className="btn btn-primary">
                  Explore TunnelMaster
                </Link>

                <a
                  href="https://tunnelimestari.roadminded.com"
                  className="btn btn-ghost"
                >
                  Login
                </a>
              </div>
            </div>

            {/* Tunnel Master dashboard */}
            <div className="rounded-2xl border border-base-300 bg-base-100 p-2 shadow-sm overflow-hidden">
              <Image
                src="/images/tunnelmaster-dashboard.png"
                alt="TunnelMaster traffic and tunnel operations dashboard"
                width={1200}
                height={750}
                className="w-full h-auto rounded-xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold">
                What we deliver
              </h2>
              <p className="mt-3 max-w-2xl opacity-80">
                Standards-based software and advisory services designed to
                integrate with existing Intelligent Transport Systems and
                infrastructure platforms.
              </p>
            </div>
            <Link
              href="/services"
              className="hidden md:inline-flex btn btn-ghost btn-sm"
            >
              View all services
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICE_SUMMARY.map(({ icon: Icon, title, description, bullets }) => (
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

                  <ul className="mt-3 list-disc pl-5 space-y-2 opacity-80 text-sm">
                    {bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>

                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 md:hidden">
            <Link href="/services" className="btn btn-ghost btn-sm w-full">
              View all services
            </Link>
          </div>
        </div>
      </section>

      {/* Technology partners */}
      <section className="py-10 md:py-12 border-y border-base-200 bg-base-100">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] opacity-60">
            Technology partners represented in Asia-Pacific
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-10">
            {PARTNERS.map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-3 opacity-80"
              >
                <Image
                  src={p.logoSrc}
                  alt={p.logoAlt}
                  width={140}
                  height={40}
                  className="h-8 md:h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why RoadMinded */}
      <section className="py-16 md:py-20 bg-base-200">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Why RoadMinded Systems
          </h2>
          <p className="mt-3 max-w-3xl opacity-80">
            We combine practical Intelligent Transport Systems expertise with modern
            software engineering and open, interoperable standards.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div className="p-5 rounded-xl bg-base-100 border border-base-300">
              <h3 className="font-semibold">ITS domain expertise</h3>
              <p className="mt-2 opacity-80">
                Practical experience across highways, tunnels, traffic management
                centres and smart city ecosystems.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-base-100 border border-base-300">
              <h3 className="font-semibold">Standards-first</h3>
              <p className="mt-2 opacity-80">
                International ITS standards — including DATEX II, OpenLR and
                C-ITS specifications — form the foundation of our system design.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-base-100 border border-base-300">
              <h3 className="font-semibold">Architecture & delivery</h3>
              <p className="mt-2 opacity-80">
                From concept and system architecture to implementation support
                and integration within existing ITS environments.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-base-100 border border-base-300">
              <h3 className="font-semibold">Asia-Pacific focus</h3>
              <p className="mt-2 opacity-80">

                European foundations with active engagement in Taiwan and the
                wider Asia-Pacific region, supporting cross-border deployment
                and collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-base-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="p-8 md:p-10 rounded-2xl border border-base-300 bg-base-100 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold">
                  Planning your next transport or infrastructure project?
                </h2>
                <p className="mt-2 opacity-80">
                  Share your current systems, standards and goals. We&apos;ll
                  help you define a practical path from concept to deployment.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <Link href="/contact" className="btn btn-primary flex-1">
                  Contact us
                </Link>
                <Link href="/services" className="btn btn-ghost flex-1">
                  View services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}