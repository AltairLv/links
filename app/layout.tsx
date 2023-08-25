import "./globals.css";
import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import { profile, links } from "@/data/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import clsx from "clsx";

const Spacemono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
});

const ogLinkDesc =
  links
    .map((link) => link.title)
    .slice(0, 3)
    .join(" · ") + " ...";

export const metadata: Metadata = {
  metadataBase: new URL(profile.website),
  title: `${profile.username} | Links`,
  description: profile.description,
  openGraph: {
    title: profile.username,
    description: `${profile.username} | ${ogLinkDesc}`,
    url: profile.website,
    siteName: profile.username,
    type: "website",
    locale: "en-US",
    images: [
      {
        url: `${profile.avatar}`,
        width: 500,
        height: 500,
      },
    ],
  },
  twitter: {
    title: profile.username,
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx(
        "",
        Spacemono.className,
        profile.themeDark
          ? "text-white bg-black bg-gradient-to-b to-[#17171F] from-black"
          : "text-black bg-[#F5F5F5]"
      )}
    >
      <body className="antialiased flex-auto py-16">
        <Navbar />
        <main className="relative flex-auto max-w-2xl mx-auto px-5 sm:px-10  justify-center items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
