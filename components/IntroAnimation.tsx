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

  // Predefined particle positions to avoid hydration mismatches
  const particlePositions = [
    { left: "10%", top: "15%", delay: 0 },
    { left: "85%", top: "25%", delay: 0.5 },
    { left: "20%", top: "45%", delay: 1 },
    { left: "75%", top: "65%", delay: 1.5 },
    { left: "45%", top: "35%", delay: 2 },
    { left: "90%", top: "75%", delay: 0.3 },
    { left: "15%", top: "85%", delay: 0.8 },
    { left: "60%", top: "20%", delay: 1.3 },
    { left: "30%", top: "70%", delay: 1.8 },
    { left: "80%", top: "40%", delay: 0.2 },
    { left: "25%", top: "30%", delay: 0.7 },
    { left: "70%", top: "80%", delay: 1.2 },
    { left: "40%", top: "60%", delay: 1.7 },
    { left: "95%", top: "50%", delay: 0.4 },
    { left: "5%", top: "55%", delay: 0.9 },
    { left: "55%", top: "10%", delay: 1.4 },
    { left: "35%", top: "90%", delay: 1.9 },
    { left: "65%", top: "5%", delay: 0.1 },
    { left: "50%", top: "25%", delay: 0.6 },
    { left: "10%", top: "75%", delay: 1.1 }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-100">
      {/* Animated Background Particles */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {particlePositions.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, i % 2 === 0 ? 10 : -10, 0],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + (i % 3),
              repeat: Infinity,
              delay: particle.delay,
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
        className="absolute inset-0 z-15 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      />

      {/* Website Content (revealed after animation) */}
      <motion.div 
        className="relative z-10 w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: showContent ? 1 : 0, scale: showContent ? 1 : 0.8 }}
        transition={{ duration: 1, ease: "easeOut" as const }}
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
