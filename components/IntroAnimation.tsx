"use client";
import { motion } from "framer-motion";
import { useEffect, useState, ReactNode } from "react";

interface IntroAnimationProps {
  children: ReactNode;
}

export default function IntroAnimation({ children }: IntroAnimationProps) {
  const [open, setOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Start animation
    const timer = setTimeout(() => setOpen(true), 300);

    // Show children *after* animation finishes
    const contentTimer = setTimeout(() => setShowContent(true), 1800);

    return () => {
      clearTimeout(timer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden bg-gray-100">
      {/* Left Page */}
      <motion.div
        className="absolute top-0 left-0 h-full w-1/2 bg-gray-900 flex items-center justify-center text-white text-4xl font-bold z-20"
        initial={{ rotateY: 0 }}
        animate={{ rotateY: open ? -90 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{ transformOrigin: "left center", backfaceVisibility: "hidden" }}
      >
        John Raison V. Salvador
      </motion.div>

      {/* Right Page */}
      <motion.div
        className="absolute top-0 right-0 h-full w-1/2 bg-gray-800 flex items-center justify-center text-white text-4xl font-bold z-20"
        initial={{ rotateY: 0 }}
        animate={{ rotateY: open ? 90 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{
          transformOrigin: "right center",
          backfaceVisibility: "hidden",
        }}
      >
        Full-Stack Web Developer
      </motion.div>

      {/* Website Content (revealed after animation) */}
      <div className="relative z-10 h-full w-full">
        {showContent && children}
      </div>
    </div>
  );
}
