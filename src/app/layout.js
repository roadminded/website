import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "RoadMinded Systems",
    template: "%s | RoadMinded Systems",
  },
  description:
   "RoadMinded Systems develops intelligent transport software and " +
   "provides ITS expertise for road, tunnel and connected mobility applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* Navbar */}
        <nav className="navbar bg-base-100/90 backdrop-blur border-b border-base-200 px-6 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto w-full flex items-center">

            {/* Left: Brand */}
            <div className="flex-1">
              <Link href="/" className="inline-flex items-center gap-3">
                <Image
                  src="/logos/roadminded-v1.svg"
                  alt="RoadMinded Systems"
                  width={180}
                  height={40}
                  priority
                />
              </Link>
            </div>

            {/* Mobile menu */}
            <div className="flex-none lg:hidden">
              <div className="dropdown dropdown-end">
                <button className="btn btn-ghost btn-sm" aria-label="Open menu">
                  ☰
                </button>
                <ul className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border border-base-200">
                  <li>
                    <Link href="/services">Services</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li>
                    <a href="https://tunnelimestari.roadminded.com">
                      Login
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-2">
              <Link href="/services" className="btn btn-ghost btn-sm text-base">
                Services
              </Link>
              <Link href="/about" className="btn btn-ghost btn-sm text-base">
                About
              </Link>
              <Link href="/contact" className="btn btn-ghost btn-sm text-base">
                Contact
              </Link>
              <a
                href="https://tunnelimestari.roadminded.com"
                className="btn btn-primary btn-sm text-base"
              >
                Login
              </a>
            </div>
          </div>
        </nav>


        {/* Main content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <footer className="bg-base-200 border-t border-base-300">
          <div className="max-w-6xl mx-auto w-full px-6 py-10">
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
              <div className="opacity-80 text-sm">
                © {new Date().getFullYear()} RoadMinded Systems
              </div>

              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/services" className="link link-hover">
                  Services
                </Link>
                <Link href="/about" className="link link-hover">
                  About
                </Link>
                <Link href="/contact" className="link link-hover">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}