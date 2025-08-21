"use client";

import { ReactNode } from "react";

interface HandwritingTextProps {
  children: ReactNode;
  duration?: number; // animation speed
}

export default function HandwritingText({
  children,
  duration = 15,
}: HandwritingTextProps) {
  return (
    <div className="inline-block">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="120"
        viewBox="0 0 800 120"
        className="stroke-black stroke-[2px] sm:stroke-[3px]"
      >
        <text
          x="20"
          y="80"
          fontSize="40"
          className="sm:text-5xl lg:text-6xl"
          //   fontFamily="'Pacifico', cursive" // handwriting font
          strokeDasharray="2000"
          strokeDashoffset="2000"
        >
          {children}
        </text>
        <style jsx>{`
          text {
            animation: draw ${duration}s linear forwards;
          }
          @keyframes draw {
            to {
              stroke-dashoffset: 0;
            }
          }
        `}</style>
      </svg>
    </div>
  );
}
