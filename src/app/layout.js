import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";
import SiteNavigation from "@/components/SiteNavigation";
import SiteFooter from "@/components/SiteFooter";


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

export default async function RootLayout({ children }) {
  const requestHeaders = await headers();
  const language = requestHeaders.get("x-site-language") || "en";

  return (
    <html lang={language}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <SiteNavigation />

        <main className="flex-grow">{children}</main>

        <SiteFooter />
      </body>
    </html>
  );
}