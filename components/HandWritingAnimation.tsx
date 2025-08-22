"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface HandwritingTextProps {
  children: ReactNode;
  duration?: number; // animation speed
}

export default function HandwritingText({
  children,
  duration = 15,
}: HandwritingTextProps) {
  return (
    <motion.div 
      className="inline-block relative group"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Floating particles */}
      <motion.div
        className="absolute -top-2 -left-2 w-2 h-2 bg-blue-400 rounded-full opacity-60"
        animate={{ 
          y: [0, -10, 0],
          x: [0, 5, 0],
          scale: [1, 1.5, 1]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-2 -right-2 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-60"
        animate={{ 
          y: [0, 8, 0],
          x: [0, -3, 0],
          scale: [1, 0.8, 1]
        }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="120"
        viewBox="0 0 800 120"
        className="stroke-black stroke-[2px] sm:stroke-[3px] group-hover:stroke-blue-600 transition-all duration-500"
      >
        <motion.text
          x="20"
          y="80"
          fontSize="40"
          className="sm:text-5xl lg:text-6xl"
          strokeDasharray="2000"
          strokeDashoffset="2000"
          initial={{ strokeDashoffset: 2000 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: duration, ease: "easeInOut" }}
          whileHover={{ 
            filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))"
          }}
        >
          {children}
        </motion.text>

        {/* Animated underline */}
        <motion.line
          x1="20"
          y1="90"
          x2="780"
          y2="90"
          stroke="currentColor"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ 
            delay: duration * 0.8, 
            duration: 2,
            ease: "easeOut" as const
          }}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

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

      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0, 0.3, 0]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </motion.div>
  );
}
