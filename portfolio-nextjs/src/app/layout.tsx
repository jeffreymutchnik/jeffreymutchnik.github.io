import type { Metadata } from "next";
import { Toaster } from "sonner";
import { inter, outfit, jetbrainsMono } from "@/lib/fonts";
import { ThemeProvider } from "@/components/providers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jeffreymutchnik.com"),
  title: {
    default: "Jeffrey Mutchnik - Marketing Technology Manager",
    template: "%s | Jeffrey Mutchnik",
  },
  description:
    "Marketing Technology Manager with 8+ years of experience in B2B healthcare technology. Specializing in HubSpot, Salesforce, and marketing automation.",
  keywords: [
    "Marketing Technology",
    "HubSpot",
    "Salesforce",
    "B2B Healthcare",
    "Marketing Automation",
    "Demand Generation",
    "CRM",
  ],
  authors: [{ name: "Jeffrey Mutchnik" }],
  creator: "Jeffrey Mutchnik",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jeffreymutchnik.com",
    siteName: "Jeffrey Mutchnik Portfolio",
    title: "Jeffrey Mutchnik - Marketing Technology Manager",
    description:
      "Marketing Technology Manager with 8+ years of experience in B2B healthcare technology.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Jeffrey Mutchnik - Marketing Technology Manager",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeffrey Mutchnik - Marketing Technology Manager",
    description:
      "Marketing Technology Manager with 8+ years of experience in B2B healthcare technology.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Jeffrey Mutchnik",
  jobTitle: "Marketing Technology Manager",
  url: "https://jeffreymutchnik.com",
  sameAs: ["https://linkedin.com/in/jeffrey-mutchnik"],
  email: "mailto:jmutchnik21@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chicago",
    addressRegion: "IL",
    addressCountry: "US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} font-body antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          {children}
          {/* Wrapped in aria-live region for screen reader announcements */}
          <div role="status" aria-live="polite" aria-atomic="true">
            <Toaster
              position="top-center"
              toastOptions={{
                style: {
                  background: "var(--color-surface-elevated)",
                  border: "1px solid var(--color-neutral-200)",
                  color: "var(--color-primary-900)",
                },
              }}
            />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
