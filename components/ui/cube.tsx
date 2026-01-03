"use client";

import React, { useState, useEffect } from "react";

const cubeStates = [
  {
    front: "Chaos",
    top: "Chaos",
    bgFront: "#ffffff",
    textFront: "#000000",
    bgTop: "#db2777",
    textTop: "#ffffff",
  },
  {
    front: "Messy",
    top: "Chaos",
    bgFront: "#db2777",
    textFront: "#ffffff",
    bgTop: "#ffffff",
    textTop: "#000000",
  },
  {
    front: "Noise",
    top: "Chaos",
    bgFront: "#000000",
    textFront: "#ffffff",
    bgTop: "#fbbf24",
    textTop: "#000000",
  },
  {
    front: "Chaos",
    top: "Chaos",
    bgFront: "#fbbf24",
    textFront: "#000000",
    bgTop: "#000000",
    textTop: "#ffffff",
  },
];

export function Cube() {
  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // 1. Start the flip animation
      setIsFlipped(true);

      // 2. Halfway through the flip (when the front is hidden), change the text/colors
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % cubeStates.length);
      }, 425); // Half of the 0.85s transition

      // 3. Reset flip state to bring the "front" back
      setTimeout(() => {
        setIsFlipped(false);
      }, 850);
    }, 3000); // Changes every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const currentState = cubeStates[index];

  return (
    <div className="scene inline-block align-middle ml-2">
      <div className={`cube ${isFlipped ? "flipped" : ""}`}>
        <span
          className="side top"
          style={{
            backgroundColor: currentState.bgTop,
            color: currentState.textTop,
          }}
        >
          {currentState.top}
        </span>
        <span
          className="side front"
          style={{
            backgroundColor: currentState.bgFront,
            color: currentState.textFront,
          }}
        >
          {currentState.front}
        </span>
      </div>

      <style jsx>{`
        .scene {
          width: 150px;
          height: 60px;
          perspective: 1000px;
        }
        .cube {
          position: relative;
          width: 100%;
          height: 100%;
          transition: all 0.85s cubic-bezier(0.17, 0.67, 0.14, 0.93);
          transform-style: preserve-3d;
          transform-origin: 50% 50%;
        }
        /* The flip class triggered by the timer */
        .cube.flipped {
          transform: rotateX(-90deg);
        }
        /* Still allows manual hover interaction */
        .cube:hover {
          transform: rotateX(-90deg);
        }
        .side {
          box-sizing: border-box;
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          width: 100%;
          text-transform: uppercase;
          font-weight: 900;
          font-size: 1.5rem;
          border: 2px solid rgba(255, 255, 255, 0.1);
        }
        .top {
          transform: rotateX(90deg) translate3d(0, 0, 30px);
        }
        .front {
          transform: translate3d(0, 0, 30px);
        }

        @media (min-width: 768px) {
          .scene {
            width: 220px;
            height: 80px;
          }
          .side {
            font-size: 2.5rem;
          }
          .top {
            transform: rotateX(90deg) translate3d(0, 0, 40px);
          }
          .front {
            transform: translate3d(0, 0, 40px);
          }
        }
      `}</style>
    </div>
  );
}
