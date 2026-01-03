"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";

type Feature = { text: string; muted?: boolean };

// Wedding Theme Colors
const GOLD_ACCENT = "#D4AF37";
const GOLD_GRADIENT = "linear-gradient(135deg, #D4AF37 0%, #F7E7CE 100%)";

function FeatureItem({ text, muted = false }: Feature) {
  return (
    <li className="flex items-start gap-3">
      <div className="mt-0.5 rounded-full border border-amber-500/30 bg-amber-500/10 p-0.5">
        <Check className="h-3 w-3 text-amber-400" />
      </div>
      <span
        className={`text-sm leading-relaxed ${
          muted ? "text-neutral-400" : "text-neutral-200"
        }`}
      >
        {text}
      </span>
    </li>
  );
}

export function Pricing() {
  // Fixed prices in dollars
  const prices = {
    silver: "$5,000",
    gold: "$18,000",
    platinum: "$50,000+",
  };

  return (
    <section id="pricing" className="relative text-white py-20">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-[#050505] to-[#050505] pointer-events-none" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center mb-16">
          <div
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-amber-200"
            style={{
              backgroundColor: "rgba(212, 175, 55, 0.1)",
              border: `1px solid ${GOLD_ACCENT}`,
            }}
          >
            <Sparkles className="h-3 w-3" />
            Wedding Packages
          </div>

          <h2 className="text-4xl font-serif font-medium tracking-tight sm:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-amber-100 to-amber-600/80">
            Curated Celebrations.
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-400 font-light">
            From intimate gatherings to royal affairs. We capture and craft
            every moment of your forever.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
          {/* SILVER PACKAGE */}
          <Card className="relative flex flex-col border-neutral-800 bg-neutral-900/40 backdrop-blur-md transition-all duration-500 hover:border-neutral-600 hover:bg-neutral-900/60 min-h-[500px] w-full">
            <CardHeader className="pb-4">
              <div className="text-lg font-serif text-neutral-200">
                The Intimate
              </div>
              <div className="text-3xl font-bold text-white font-serif">
                {prices.silver}
              </div>
              <p className="text-xs text-neutral-400 font-light tracking-wide uppercase">
                Ideal for 50-100 Guests
              </p>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-4">
                {[
                  "Day-of Coordination",
                  "Standard Decor & Florals",
                  "Candid Photography (1 Day)",
                  "Bridal Makeup Assistance",
                  "Sound & Light Setup",
                  "Standard Highlight Reel (3 mins)",
                ].map((f, i) => (
                  <FeatureItem key={i} text={f} />
                ))}
              </ul>
            </CardContent>
            <CardFooter className="pt-4">
              <Button
                asChild
                className="w-full bg-neutral-800 text-neutral-200 hover:bg-neutral-700 border border-neutral-700"
              >
                <Link href="https://wa.link/placeholder" target="_blank">
                  Enquire Now
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* GOLD PACKAGE (Highlighted) */}
          <Card className="relative flex flex-col border-amber-500/30 bg-neutral-900/60 shadow-[0_0_40px_rgba(212,175,55,0.1)] lg:scale-105 z-10 min-h-[500px] w-full">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-200 to-amber-500 px-4 py-1 text-xs font-bold text-black shadow-lg">
              MOST POPULAR
            </div>
            <CardHeader className="pb-4 pt-8">
              <div className="text-lg font-serif text-amber-200">
                The Classic Gold
              </div>
              <div className="text-4xl font-bold text-white font-serif">
                {prices.gold}
              </div>
              <p className="text-xs text-amber-200/60 font-light tracking-wide uppercase">
                Ideal for 200-500 Guests
              </p>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-4">
                {[
                  "Full Event Planning (A-Z)",
                  "Premium Theme Decor & Staging",
                  "Cinematography + Drone Shots",
                  "Pre-wedding Shoot Included",
                  "Sangeet Choreography (5 Songs)",
                  "Same-Day Edit Teaser",
                ].map((f, i) => (
                  <FeatureItem key={i} text={f} />
                ))}
              </ul>
            </CardContent>
            <CardFooter className="pt-4">
              <Button
                asChild
                className="w-full text-black font-semibold hover:opacity-90 transition-opacity"
                style={{ background: GOLD_GRADIENT }}
              >
                <Link href="https://wa.link/placeholder" target="_blank">
                  Enquire Now
                </Link>
              </Button>
            </CardFooter>
          </Card>

          {/* PLATINUM PACKAGE */}
          <Card className="relative flex flex-col border-neutral-800 bg-neutral-900/40 backdrop-blur-md transition-all duration-500 hover:border-neutral-600 hover:bg-neutral-900/60 min-h-[500px] w-full">
            <div className="absolute top-4 right-4 text-[10px] text-neutral-500 border border-neutral-800 rounded px-2 py-1">
              BESPOKE
            </div>
            <CardHeader className="pb-4">
              <div className="text-lg font-serif text-neutral-200">
                The Royal
              </div>
              <div className="text-3xl font-bold text-white font-serif">
                {prices.platinum}
              </div>
              <p className="text-xs text-neutral-400 font-light tracking-wide uppercase">
                Destination / 500+ Guests
              </p>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-4">
                {[
                  "Destination Wedding Logistics",
                  "Celebrity Makeup Artists",
                  "Designer Set Production",
                  "Documentary Style Series (30 mins)",
                  "Live Entertainment/Band Arrangement",
                  "Helicopter/Vintage Car Entry",
                  "Dedicated Concierge Team",
                ].map((f, i) => (
                  <FeatureItem key={i} text={f} />
                ))}
              </ul>
            </CardContent>
            <CardFooter className="pt-4">
              <Button
                asChild
                className="w-full bg-neutral-800 text-neutral-200 hover:bg-neutral-700 border border-neutral-700"
              >
                <Link href="https://wa.link/placeholder" target="_blank">
                  Enquire Now
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
