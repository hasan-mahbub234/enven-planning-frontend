"use client";

import { useEffect, useRef, useState } from "react";

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
}

export default function LazyVideo({
  src,
  poster,
  autoPlay = false,
  muted = true,
  loop = true,
  playsInline = true,
  className = "",
  ...props
}: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el || loaded) return;

    const prefersReducedMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        el.src = src;
        el.load();

        if (autoPlay) {
          el.play().catch(() => {
            // autoplay may be blocked – ignore
          });
        }

        setLoaded(true);
        observer.disconnect();
      },
      {
        rootMargin: "150px",
        threshold: 0.2,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [src, autoPlay, loaded]);

  return (
    <video
      ref={videoRef}
      className={className}
      muted={muted}
      loop={loop}
      playsInline={playsInline}
      preload="none"
      poster={poster}
      disableRemotePlayback
      {...props}
    />
  );
}
