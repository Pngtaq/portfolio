import { motion } from "framer-motion";
import ReactSVG from "./ui/svg/ReactSVG";
import NextjsSVG from "./ui/svg/NextjsSVG";

export default function Skills() {
  return (
    <div className="relative z-10 w-full px-10 flex flex-col items-center">
      {/* Animated title */}
      <motion.h1
        className="text-5xl font-bold text-black mb-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        Skills
      </motion.h1>

      {/* Lists in two columns */}
      <div className="flex justify-evenly w-full text-xl font-bold text-black">
        <motion.ul
          className="list-disc pl-6 space-y-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {["NextJS", "React", "Express"].map((skill, i) => (
            <motion.li
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>

        <motion.ul
          className="list-disc pl-6 space-y-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {["NodeJS", "Tailwind", "MongoDB"].map((skill, i) => (
            <motion.li
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
