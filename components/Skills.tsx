import { motion } from "framer-motion";
import ReactSVG from "./ui/svg/ReactSVG";
import NextjsSVG from "./ui/svg/NextjsSVG";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" as const,
        type: "spring",
        stiffness: 100
      }
    }
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, -10, 10, 0],
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.div 
      className="relative z-10 w-full px-4 sm:px-10 flex flex-col items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated title */}
      <motion.h1
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" as const }}
        whileHover={{ scale: 1.05 }}
      >
        Skills
      </motion.h1>

      {/* Lists in two columns */}
      <div className="flex justify-evenly w-full text-lg sm:text-xl text-black">
        <motion.ul
          className="list-disc pl-4 sm:pl-6 space-y-2"
          variants={containerVariants}
        >
          {["NextJS", "React", "Express"].map((skill, i) => (
            <motion.li
              key={i}
              variants={skillVariants}
              whileHover={{ 
                x: 10, 
                scale: 1.05,
                color: "#3b82f6"
              }}
              className="cursor-pointer transition-all duration-300 flex items-center gap-2"
            >
              <motion.div
                className="w-2 h-2 bg-blue-500 rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: i * 0.3 
                }}
              />
              {skill}
            </motion.li>
          ))}
        </motion.ul>

        <motion.ul
          className="list-disc pl-4 sm:pl-6 space-y-2"
          variants={containerVariants}
        >
          {["NodeJS", "Tailwind", "MongoDB"].map((skill, i) => (
            <motion.li
              key={i}
              variants={skillVariants}
              whileHover={{ 
                x: 10, 
                scale: 1.05,
                color: "#10b981"
              }}
              className="cursor-pointer transition-all duration-300 flex items-center gap-2"
            >
              <motion.div
                className="w-2 h-2 bg-green-500 rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  delay: i * 0.3 + 0.5 
                }}
              />
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Floating Tech Icons */}
      <motion.div 
        className="mt-8 flex gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <motion.div
          whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
          transition={{ duration: 0.3 }}
          className="relative group"
        >
          <motion.div
            className="absolute -inset-2 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0, 0.3, 0]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <NextjsSVG />
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
          transition={{ duration: 0.3 }}
          className="relative group"
        >
          <motion.div
            className="absolute -inset-2 bg-cyan-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0, 0.3, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
          <ReactSVG />
        </motion.div>
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute -top-4 -left-4 w-3 h-3 bg-yellow-400 rounded-full opacity-60"
        animate={{ 
          y: [0, -15, 0],
          x: [0, 10, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-4 -right-4 w-2 h-2 bg-purple-400 rounded-full opacity-60"
        animate={{ 
          y: [0, 15, 0],
          x: [0, -10, 0],
          scale: [1, 0.7, 1]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 2 }}
      />
    </motion.div>
  );
}
