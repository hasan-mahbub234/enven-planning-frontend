import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { LogoMarquee } from "@/components/logo-marquee";
import { Pricing } from "@/components/pricing";
import { AppverseFooter } from "@/components/appverse-footer";
import Script from "next/script";
import TwoColumnStickySection from "@/components/rightSide";
import { Suspense } from "react";
import { VerticalLogoMarquee } from "@/components/verticalLogoMarquee";

// ✅ Force static generation for low TTFB
export const dynamic = "force-static";

export default function Page() {
  // Structured data for pricing
  const pricingStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPageElement",
    "@id": "https://theskitbit.com/#pricing",
    name: "Pricing Plans",
    description:
      "3D Animation pricing plans - Startup, Pro, and Premium packages for all business needs",
    url: "https://theskitbit.com/#pricing",
    mainEntity: {
      "@type": "PriceSpecification",
      name: "3D Animation Services",
      description:
        "Professional 3D animation services with three pricing tiers",
      offers: [
        {
          "@type": "Offer",
          name: "Startup Plan",
          price: "299",
          priceCurrency: "USD",
          description: "Up to 15s 3D Animation with 2 revisions",
        },
        {
          "@type": "Offer",
          name: "Pro Plan",
          price: "699",
          priceCurrency: "USD",
          description: "Up to 25s 3D Animation with 4 revisions",
        },
        {
          "@type": "Offer",
          name: "Premium Plan",
          price: "2049",
          priceCurrency: "USD",
          description: "40-60s 3D Animation with unlimited revisions",
        },
      ],
    },
  };

  // Structured data for main page
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://theskitbit.com/",
    name: "Skitbit | 3D Animation Made Simple, Reliable & Scalable",
    description:
      "From product launches to full-scale campaigns, Skitbit delivers 3D animation that's fast, consistent, and built to wow your audience.",
    url: "https://theskitbit.com/",
    mainEntity: {
      "@type": "Organization",
      name: "Skitbit",
      url: "https://theskitbit.com",
      sameAs: [
        "https://twitter.com/theskitbit",
        "https://www.youtube.com/@skitbitinternational",
        "https://instagram.com/theskitbit",
        "https://threads.com/theskitbit",
      ],
    },
    hasPart: [
      {
        "@type": "WebPageElement",
        "@id": "https://theskitbit.com/#pricing",
        name: "Pricing Section",
        url: "https://theskitbit.com/#pricing",
      },
    ],
  };

  return (
    <>
      <main className="min-h-[100dvh] text-white">
        <SiteHeader />
        {/* Suspense boundaries for heavy components */}
        <Suspense fallback={<HeroSkeleton />}>
          <VerticalLogoMarquee />
        </Suspense>
        <TwoColumnStickySection />
        <Features />
        {/* <Suspense fallback={<LogoSkeleton />}>
          <LogoMarquee />
        </Suspense> */}
        <Pricing />
        <Suspense fallback={<FooterSkeleton />}>
          <AppverseFooter />
        </Suspense>
      </main>
      {/* JSON-LD structured data */}
      <Script
        id="pricing-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingStructuredData),
        }}
      />

      <Script
        id="page-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pageStructuredData),
        }}
      />
    </>
  );
}

// Skeleton loaders
function HeroSkeleton() {
  return (
    <section className="relative isolate overflow-hidden py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="h-12 w-3/4 animate-pulse rounded-lg bg-white/10"></div>
          <div className="mt-4 h-8 w-1/2 animate-pulse rounded-lg bg-white/10"></div>
        </div>
      </div>
    </section>
  );
}

function LogoSkeleton() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="h-12 w-64 animate-pulse rounded-lg bg-white/10"></div>
      </div>
    </section>
  );
}

function FooterSkeleton() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="h-64 animate-pulse rounded-lg bg-white/10"></div>
      </div>
    </section>
  );
}
