import type { Metadata } from "next";
import { Fahkwang, Fredoka, Fustat, Gilda_Display } from "next/font/google";
import { Fahkwang, Fredoka, Fustat, Gilda_Display } from "next/font/google";
import "./globals.css";
// import Navbar from "@/components/navbar";

// highlight font
const fahkwang = Fahkwang({
  variable: "--font-highlight",
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

// serif font
const gilda = Gilda_Display({
  variable: "--font-serif",
  weight: "400",
  subsets: ["latin"],
});

// serif font
const gilda = Gilda_Display({
  variable: "--font-serif",
  weight: "400",
  subsets: ["latin"],
});

// body font
const fredoka = Fredoka({
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

// secondary font
const fustat = Fustat({
  variable: "--font-secondary",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://picominds.com"),

  title: {
    default: "Picominds – Tiny Minds, Big Impact",
    template: "%s | Picominds",
  },

  description:
    "Picominds is a modern software development company specializing in Web Development, Mobile Apps, UI/UX, and AI solutions. Tiny Minds, Big Impact!",

  keywords: [
    "Picominds",
    "software development",
    "web development",
    "mobile app development",
    "UI UX design",
    "AI development",
    "Next.js developers",
    "React developers",
    "Flutter developers",
    "India software company",
  ],

  openGraph: {
    type: "website",
    url: "https://picominds.com",
    title: "Picominds – Tiny Minds, Big Impact",
    description:
      "Web Development, Mobile Apps, UI/UX and AI development powered by small minds creating big impact.",
    siteName: "Picominds",
    images: [
      {
        url: "/og-image.png",
        width: 192,
        height: 192,
        alt: "Picominds Banner",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Picominds – Tiny Minds, Big Impact",
    description:
      "A modern software agency building digital products with Web, Mobile, UI/UX and AI.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://picominds.com",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  authors: [{ name: "Picominds" }],
  creator: "Picominds",

  themeColor: "#4C1D95",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="apple-mobile-web-app-title" content="Picominds" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Picominds",
              url: "https://picominds.com",
              logo: "https://picominds.com/logo.png",
              description:
                "Software development company specializing in Web, Mobile, UI/UX and AI Solutions.",
              sameAs: [
                "https://linkedin.com/company/picominds",
                "https://twitter.com/picominds",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${fahkwang.variable} ${gilda.variable} ${fredoka.variable} ${fustat.variable} antialiased text-indigo-200 font-secondary`}
      >
        {children}
      </body>
    </html>
  );
}
