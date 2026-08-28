import { Geist, Geist_Mono } from "next/font/google";
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {/* Navbar */}
        <SiteNavigation />


        {/* Main content */}
        <main className="flex-grow">{children}</main>

        {/* Footer */}
        <SiteFooter />

      </body>
    </html>
  );
}