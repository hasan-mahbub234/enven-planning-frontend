"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Instagram, Twitter, Youtube, MessageCircle } from "lucide-react";
import LazyVideo from "./lazy-video";
import Image from "next/image";
import { VIDEO_4, CLOUD_NAME } from "../cloudinaryVideos";

interface FooterContent {
  tagline: string;
  copyright: string;
}

const defaultContent: FooterContent = {
  tagline:
    "Crafting timeless celebrations with meticulous planning and artistic vision. From intimate weddings to grand affairs.",
  copyright: "© 2025 — Love Celebration by Lisa",
};

export function AppverseFooter() {
  const [content, setContent] = useState<FooterContent>(defaultContent);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check device type
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Load content from localStorage
    const savedContent = localStorage.getItem("skitbit-content");
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent);
        if (parsed.footer) {
          setContent(parsed.footer);
        }
      } catch (error) {
        console.error("Error parsing saved content:", error);
      }
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Optimize video quality based on device
  const getVideoUrl = () => {
    const quality = isMobile ? "q_auto:low" : "q_auto";
    const width = isMobile ? "w_480" : "w_720";
    return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/f_mp4,${quality},${width}/${VIDEO_4}`;
  };

  // Generate poster image
  const getPosterUrl = () => {
    return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/so_0/f_jpg,q_auto,w_400/${VIDEO_4}`;
  };

  return (
    <section className="text-white">
      {/* Download the app */}
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <Card className="relative overflow-hidden rounded-3xl liquid-glass p-6 sm:p-10">
          <div className="relative grid items-center gap-8 md:grid-cols-2">
            {/* Left copy */}
            <div>
              <p className="mb-2 text-[11px] tracking-widest text-lime-300">
                STREAMLINE YOUR LAUNCHES
              </p>
              <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                Preview &amp; approve high-end 3D visuals from anywhere
              </h3>
              <p className="mt-2 max-w-prose text-sm text-neutral-400">
                Review renders, leave timestamped comments, and approve scenes
                from anywhere. Using our revision &amp; collaboration tools
              </p>
            </div>

            {/* Right mockup */}
            <div className="mx-auto w-full max-w-[320px]">
              <div className="relative rounded-[28px] liquid-glass p-2 shadow-2xl">
                <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl bg-black">
                  {/* Optimized lazy-loaded video */}
                  <LazyVideo
                    src={getVideoUrl()}
                    poster={getPosterUrl()}
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                    preload="metadata"
                    aria-label="Skitbit app preview - approvals made easy"
                  />
                  {/* On-screen content */}
                  <div className="relative p-3">
                    <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />
                    <div className="space-y-1 px-1">
                      <p className="mb-2 text-[11px] tracking-widest text-amber-300">
                        BEGIN YOUR JOURNEY
                      </p>
                      <h3 className="text-2xl font-serif font-bold leading-tight text-white sm:text-3xl">
                        Let's create your dream wedding together
                      </h3>
                      <p className="mt-2 max-w-prose text-sm text-neutral-300">
                        Schedule a consultation to discuss your vision,
                        preferences, and how we can bring your dream wedding to
                        life with our expertise.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 pb-20 md:pb-10">
        <div className="container mx-auto px-4 py-10">
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
            {/* Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-1.5">
                <Image
                  src="/icons/white.png"
                  alt="Skitbit logo"
                  width={160}
                  height={40}
                  className="h-10 w-40"
                  priority={false}
                  loading="lazy"
                />
                <span className="text-xl font-semibold text-white">
                  by Lisa
                </span>
              </div>
              <p className="max-w-sm text-sm text-neutral-400">
                {content.tagline}
              </p>
            </div>

            {/* Navigation */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-2">
              <div>
                <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">
                  Navigation
                </h5>
                <ul className="space-y-2 text-sm text-neutral-300">
                  {[
                    "Home",
                    "Features",
                    "Testimonials",
                    "Pricing",
                    "Blog",
                    "Download",
                  ].map((item) => (
                    <li key={item}>
                      <Link
                        href={`#${item.toLowerCase()}`}
                        className="hover:text-lime-300 transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="mb-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">
                  Social media
                </h5>
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li className="flex items-center gap-2">
                    <Twitter className="h-4 w-4 text-neutral-400" />
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-300 transition-colors"
                      aria-label="Follow skitbit on Twitter"
                    >
                      X/Twitter
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Youtube className="h-4 w-4 text-neutral-400" />
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-300 transition-colors"
                      aria-label="Subscribe to skitbit on YouTube"
                    >
                      YouTube
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Instagram className="h-4 w-4 text-neutral-400" />
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-300 transition-colors"
                      aria-label="Follow skitbit on Instagram"
                    >
                      Instagram
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-neutral-400" />
                    <a
                      href="/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-lime-300 transition-colors"
                      aria-label="Follow skitbit on Threads"
                    >
                      Threads
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row">
            <p>{content.copyright}</p>
            <div className="flex items-center gap-6">
              <Link
                href="/revisions"
                className="hover:text-lime-300 transition-colors"
              >
                Revision Policy
              </Link>
              <Link
                href="/t&c"
                className="hover:text-lime-300 transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
