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
    <div className="relative min-h-screen overflow-hidden bg-gray-100">
      {/* Animated Background Particles */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </motion.div>

      {/* Left Page */}
      <motion.div
        className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center text-white font-bold z-20 px-4 overflow-hidden"
        initial={{ rotateY: 0 }}
        animate={{ rotateY: open ? -90 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{ transformOrigin: "left center", backfaceVisibility: "hidden" }}
      >
        {/* Page content with enhanced styling */}
        <div className="text-center relative">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{ x: [-100, 100] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl block mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            WELCOME
          </motion.span>
          <motion.span 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            TO
          </motion.span>
          
          {/* Decorative elements */}
          <motion.div
            className="absolute -top-4 -left-4 w-8 h-8 border-2 border-white/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -bottom-4 -right-4 w-6 h-6 border-2 border-white/30 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>

      {/* Right Page */}
      <motion.div
        className="absolute top-0 right-0 h-full w-1/2 bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center text-white font-bold z-20 px-4 overflow-hidden"
        initial={{ rotateY: 0 }}
        animate={{ rotateY: open ? 90 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{
          transformOrigin: "right center",
          backfaceVisibility: "hidden",
        }}
      >
        {/* Page content with enhanced styling */}
        <div className="text-center relative">
          <motion.div
            className="absolute inset-0 bg-gradient-to-l from-transparent via-white/10 to-transparent"
            animate={{ x: [100, -100] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl block mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            MY
          </motion.span>
          <motion.span 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            PORTFOLIO
          </motion.span>
          
          {/* Decorative elements */}
          <motion.div
            className="absolute -top-4 -right-4 w-8 h-8 border-2 border-white/30 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-white/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </motion.div>

      {/* Center Divider Line */}
      <motion.div
        className="absolute top-0 left-1/2 h-full w-px bg-gradient-to-b from-transparent via-white/50 to-transparent z-10"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        style={{ transformOrigin: "top" }}
      />

      {/* Page Turn Effect Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/20 z-15"
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      />

      {/* Website Content (revealed after animation) */}
      <motion.div 
        className="relative z-10 w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: showContent ? 1 : 0, scale: showContent ? 1 : 0.8 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {showContent && children}
      </motion.div>

      {/* Loading Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-16 h-16 border-4 border-gray-300 border-t-blue-600 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </div>
  );
}
