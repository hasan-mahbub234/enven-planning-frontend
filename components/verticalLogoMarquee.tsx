"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function VerticalLogoMarquee() {
  const [pausedColumn, setPausedColumn] = useState<string | null>(null);

  const column1Logos = [
    { name: "VICTORINOX", image: "/images/event/w18.jpg" },
    { name: "Brand A", image: "/images/event/w1.jfif" },
    { name: "Skitbit", image: "/images/event/w1.jfif" },
    { name: "VK", image: "/images/event/w15.jpg" },
    { name: "TechCrunch", image: "/images/event/w2.jfif" },
    { name: "MailChimp", image: "/images/event/w17.jpg" },
    { name: "ESJ", image: "/images/event/w3.jfif" },
    { name: "Kickstarter", image: "/images/event/w4.jfif" },
    { name: "StumbleUpon", image: "/images/event/w5.jfif" },
    { name: "Microsoft", image: "/images/event/w16.jpg" },
    { name: "CleanMyMac", image: "/images/event/w6.jfif" },
    { name: "Google", image: "/images/event/w7.jfif" },
    { name: "Behance", image: "/images/event/w15.jpg" },
    { name: "Apple", image: "/images/event/w18.jpg" },
    { name: "TransferWise", image: "/images/event/w8.jfif" },
    { name: "Medium", image: "/images/event/w9.jfif" },
  ];

  // Configuration for 15 bubbles with different sizes and colors
  const bubbles = [
    { size: "0.45", left: "60%", top: "10%", color: "#0fb4ff", delay: "-4s" },
    { size: "0.35", left: "10%", top: "40%", color: "#ff4484", delay: "-6s" },
    {
      size: "0.3",
      right: "20%",
      bottom: "10%",
      color: "#ffeb3b",
      delay: "-3s",
    },
    { size: "0.4", left: "40%", top: "30%", color: "#a2d2ff", delay: "-5s" },
    { size: "0.25", left: "30%", top: "5%", color: "#ccff33", delay: "-2s" },
    { size: "0.5", right: "5%", top: "15%", color: "#9d4edd", delay: "-7s" },
    { size: "0.2", left: "5%", bottom: "20%", color: "#00f5d4", delay: "-1s" },
    { size: "0.38", left: "75%", top: "45%", color: "#f72585", delay: "-8s" },
    { size: "0.42", left: "20%", top: "70%", color: "#4cc9f0", delay: "-4.5s" },
    {
      size: "0.28",
      right: "40%",
      top: "50%",
      color: "#fb8500",
      delay: "-2.5s",
    },
    { size: "0.33", left: "55%", bottom: "5%", color: "#fee440", delay: "-9s" },
    {
      size: "0.47",
      right: "15%",
      top: "65%",
      color: "#70e000",
      delay: "-3.5s",
    },
    { size: "0.22", left: "80%", top: "5%", color: "#f15bb5", delay: "-6.5s" },
    { size: "0.31", left: "15%", top: "15%", color: "#00bbf9", delay: "-1.5s" },
    {
      size: "0.36",
      right: "10%",
      bottom: "30%",
      color: "#9b5de5",
      delay: "-5.5s",
    },
  ];

  const LogoCard = ({ logo, columnId }: { logo: any; columnId: string }) => (
    <div
      className="flex-shrink-0 py-1 md:py-3"
      onMouseEnter={() => setPausedColumn(columnId)}
      onMouseLeave={() => setPausedColumn(null)}
    >
      <div className="w-13 h-13 sm:w-24 sm:h-24 lg:w-40 lg:h-40 rounded-[2px] md:rounded-2xl bg-black/40 border border-white/20 backdrop-blur-xl flex items-center justify-center overflow-hidden mx-auto">
        <div className="relative w-full h-full">
          <Image
            src={logo.image || "/placeholder.svg"}
            alt={logo.name}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 112px, (min-width: 640px) 96px, 80px"
          />
        </div>
      </div>
    </div>
  );

  return (
    <section className="text-white py-0 sm:py-16 lg:py-10 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {bubbles.map((b, i) => (
          <div
            key={i}
            className="bubble"
            style={{
              zoom: b.size,
              left: b.left,
              top: b.top,
              right: b.right,
              bottom: b.bottom,
              animationDelay: b.delay,
              // @ts-ignore
              "--bubble-color": b.color,
            }}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        ))}
      </div>
      <div className="container mx-auto px-1 sm:px-2 md:px-4">
        <div className="flex flex-row lg:gap-12">
          {/* Mobile Columns */}
          <div className="lg:hidden w-[50%] z-10">
            <div className="relative flex h-[250px] sm:h-[400px] items-center justify-center overflow-hidden rounded-[2px]">
              <div className="absolute top-0 left-0 right-0 h-5 bg-gradient-to-b from-black via-black/80 to-transparent z-10" />
              <div className="absolute bottom-0 left-0 right-0 h-5 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />

              <div className="w-1/2 relative overflow-hidden">
                <div
                  className="flex flex-col animate-scroll-down"
                  style={{
                    animationPlayState:
                      pausedColumn === "mobile-col1" ? "paused" : "running",
                  }}
                >
                  {[...column1Logos, ...column1Logos].map((logo, index) => (
                    <div
                      key={`mobile-col1-${index}`}
                      onMouseEnter={() => setPausedColumn("mobile-col1")}
                      onMouseLeave={() => setPausedColumn(null)}
                    >
                      <LogoCard logo={logo} columnId="mobile-col1" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-1/2 relative overflow-hidden">
                <div
                  className="flex flex-col animate-scroll-up"
                  style={{
                    animationPlayState:
                      pausedColumn === "mobile-col2" ? "paused" : "running",
                  }}
                >
                  {[...column1Logos, ...column1Logos].map((logo, index) => (
                    <div
                      key={`mobile-col2-${index}`}
                      onMouseEnter={() => setPausedColumn("mobile-col2")}
                      onMouseLeave={() => setPausedColumn(null)}
                    >
                      <LogoCard logo={logo} columnId="mobile-col2" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Columns */}
          <div className="max-sm:hidden w-full lg:w-1/2">
            <div className="hidden lg:flex w-full relative">
              <div className="relative w-full flex justify-center items-center min-h-[600px]">
                <div className="absolute left-[40%] top-1/2 -translate-y-1/2 -translate-x-1/2 w-[25%]">
                  <div className="relative h-[600px] overflow-hidden rounded-2xl transform -rotate-[20deg] origin-center">
                    <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black to-transparent z-10"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black to-transparent z-10"></div>
                    <div
                      className="flex flex-col animate-scroll-down"
                      style={{
                        animationPlayState:
                          pausedColumn === "column1" ? "paused" : "running",
                      }}
                    >
                      {[...column1Logos, ...column1Logos].map((logo, index) => (
                        <div
                          key={`col1-${index}`}
                          onMouseEnter={() => setPausedColumn("column1")}
                          onMouseLeave={() => setPausedColumn(null)}
                        >
                          <LogoCard logo={logo} columnId="column1" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="absolute right-[30%] top-1/2 -translate-y-1/2 translate-x-1/2 w-[25%]">
                  <div className="relative h-[600px] overflow-hidden rounded-2xl transform -rotate-[20deg] origin-center">
                    <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black to-transparent z-10"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black to-transparent z-10"></div>
                    <div
                      className="flex flex-col animate-scroll-up"
                      style={{
                        animationPlayState:
                          pausedColumn === "column2" ? "paused" : "running",
                      }}
                    >
                      {[...column1Logos, ...column1Logos].map((logo, index) => (
                        <div
                          key={`col2-${index}`}
                          onMouseEnter={() => setPausedColumn("column2")}
                          onMouseLeave={() => setPausedColumn(null)}
                        >
                          <LogoCard logo={logo} columnId="column2" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Area with Bubbles */}
          <div className="w-full lg:w-1/2 relative z-20 flex items-center justify-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left relative z-10">
              <div className="hidden md:block">
                <h2 className="text-[110px] font-bold ml-[-30px] font-jost">
                  Where{" "}
                  <span className="bg-white px-1 text-black font-extrabold">
                    Chaos
                  </span>
                </h2>
                <p className="text-5xl font-bold">
                  <span className="bg-pink-600 px-1">Gets</span> Organized.
                </p>
              </div>

              <div className="md:hidden text-start ml-[-40px]">
                <h2 className="text-4xl font-bold font-jost">
                  Where{" "}
                  <span className="bg-white px-1 text-black font-extrabold">
                    Chaos
                  </span>
                </h2>
                <p className="text-2xl font-bold">
                  <span className="bg-pink-600 px-1">Gets</span> Organized.
                </p>
              </div>

              <div className="mt-6">
                <Button variant="uiverseGold">
                  <Link href="#contact">Contact Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bubble {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          box-shadow: inset 0 0 25px rgba(255, 255, 255, 0.25);
          animation: animate_4010 8s ease-in-out infinite;
        }

        @keyframes animate_4010 {
          0%,
          100% {
            transform: translateY(-20px);
          }
          50% {
            transform: translateY(20px);
          }
        }

        .bubble::before {
          content: "";
          position: absolute;
          top: 50px;
          left: 45px;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #fff;
          z-index: 10;
          filter: blur(2px);
        }

        .bubble::after {
          content: "";
          position: absolute;
          top: 80px;
          left: 80px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #fff;
          z-index: 10;
          filter: blur(2px);
        }

        .bubble span {
          position: absolute;
          border-radius: 50%;
        }

        /* Dynamic coloring based on CSS variable */
        .bubble span:nth-child(1) {
          inset: 10px;
          border-left: 15px solid var(--bubble-color, #0fb4ff);
          filter: blur(8px);
        }

        .bubble span:nth-child(2) {
          inset: 10px;
          border-right: 15px solid #ff4484;
          filter: blur(8px);
          opacity: 0.7;
        }

        .bubble span:nth-child(3) {
          inset: 10px;
          border-top: 15px solid #ffeb3b;
          filter: blur(8px);
          opacity: 0.5;
        }

        .bubble span:nth-child(4) {
          inset: 30px;
          border-left: 15px solid var(--bubble-color, #ff4484);
          filter: blur(12px);
        }

        .bubble span:nth-child(5) {
          inset: 10px;
          border-bottom: 10px solid #fff;
          filter: blur(8px);
          transform: rotate(330deg);
        }

        /* Mobile overrides to prevent overlap on small screens */
        @media (max-width: 1023px) {
          .bubble {
            zoom: 0.2 !important;
          }
        }
      `}</style>
    </section>
  );
}
