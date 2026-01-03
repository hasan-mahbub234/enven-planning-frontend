"use client";

import { Button } from "@/components/ui/button";
import LazyVideo from "./lazy-video";
import Link from "next/link";
import {
  VIDEO_LISA_1,
  VIDEO_LISA_2,
  VIDEO_LISA_4,
  CLOUD_NAME,
} from "../cloudinaryVideos";
import { useState, useEffect } from "react";

export function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const getVideoUrl = (videoId: string): string => {
    return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/f_mp4,q_auto,w_480/${videoId}`;
  };

  return (
    <section className="relative isolate overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center py-14 sm:py-20">
          {/* Phone grid - Show all 5 videos */}
          <div className="mt-10 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            {phoneData.map((item, index) => {
              const visibilityClass = getVisibilityClass(index, isMobile);

              return (
                <div key={index} className={visibilityClass}>
                  <PhoneCard
                    title={item.title}
                    sub={item.sub}
                    tone={item.tone}
                    videoUrl={
                      item.videoId ? getVideoUrl(item.videoId) : undefined
                    }
                    index={index}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper function for visibility classes
function getVisibilityClass(index: number, isMobile: boolean): string {
  if (isMobile) {
    // On mobile, show first 3 cards
    return index < 3 ? "block" : "hidden";
  }

  // On desktop: show all with responsive grid
  if (index <= 2) return "block"; // First 3 always visible
  if (index === 3) return "hidden md:block"; // Fourth on medium+
  if (index === 4) return "hidden xl:block"; // Fifth on large+
  return "hidden";
}

type PhoneCardProps = {
  title?: string;
  sub?: string;
  tone?: string;
  videoUrl?: string;
  index?: number;
};

function PhoneCard({
  title = "Your Day",
  sub = "Every detail thoughtfully planned and beautifully executed.",
  tone = "calm",
  videoUrl,
  index = 0,
}: PhoneCardProps) {
  const defaultVideoUrl = `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/f_mp4,q_auto,w_480/${VIDEO_LISA_1}`;

  // Generate poster image from video
  const getPosterUrl = (videoId?: string) => {
    if (!videoId) return undefined;
    const id = videoId.split("/").pop();
    return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/so_0/f_jpg,q_auto,w_300/${id}`;
  };

  return (
    <div className="relative rounded-[28px] bg-neutral-900 p-2 glass-border">
      <div className="relative aspect-[9/19] w-full overflow-hidden rounded-2xl bg-black">
        {/* Background video - ALL videos autoplay */}
        <LazyVideo
          src={videoUrl || defaultVideoUrl}
          poster={getPosterUrl(videoUrl)}
          className="absolute inset-0 h-full w-full object-cover pointer-events-none"
          autoPlay={true} // Changed: All videos autoplay
          loop={true} // Changed: All videos loop
          muted={true} // Changed: All videos muted
          playsInline
          controls={false}
          disablePictureInPicture
          preload="metadata"
          loading="lazy"
          aria-hidden="true"
        />

        {/* UI overlay */}
        <div className="relative z-10 p-3">
          <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-white/20" />

          <div className="space-y-1 px-1">
            <div className="text-3xl font-bold leading-snug text-white/90">
              {title}
            </div>

            <p className="text-xs text-white/70">{sub}</p>

            <div className="mt-3 inline-flex items-center rounded-full bg-black/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-lime-300">
              {tone === "calm" ? "wedding planning" : tone}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const phoneData = [
  {
    title: "Full Planning",
    sub: "From concept to celebration, we manage every detail.",
    tone: "planning",
    videoId: VIDEO_LISA_2,
  },
  {
    title: "On-Time Execution",
    sub: "Flawless coordination so your day flows effortlessly.",
    tone: "coordination",
    videoId: undefined,
  },
  {
    title: "Design & Décor",
    sub: "Elegant styling that reflects your love story.",
    tone: "design",
    videoId: VIDEO_LISA_4,
  },
  {
    title: "Trusted Vendors",
    sub: "Handpicked professionals for a stress-free experience.",
    tone: "vendors",
    videoId: undefined,
  },
  {
    title: "Unforgettable Moments",
    sub: "So you can relax, celebrate, and enjoy every second.",
    tone: "experience",
    videoId: undefined,
  },
];
