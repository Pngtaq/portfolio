"use client";
import { motion } from "framer-motion";
import NextjsSVG from "./ui/svg/NextjsSVG";
import NextjsMonochromeSVG from "./ui/svg/NextjsMonochromeSVG";
import ReactSVG from "./ui/svg/ReactSVG";
import TailwindSVG from "./ui/svg/TailwindSVG";
import TypescriptSVG from "./ui/svg/TypescriptSVG";
import SupabaseSVG from "./ui/svg/SupabaseSVG";
import GitSVG from "./ui/svg/GitSVG";
import GithubSVG from "./ui/svg/GithubSVG";
import ExpressSVG from "./ui/svg/ExpressSVG";
import PrismaSVG from "./ui/svg/PrismaSVG";
import VercelSVG from "./ui/svg/VercelSVG";
import JavaSVG from "./ui/svg/JavaSVG";
import HTMLSVG from "./ui/svg/HTMLSVG";
import CSSSVG from "./ui/svg/CSSSVG";
import JavaScriptSVG from "./ui/svg/JavaScriptSVG";

const skills = [
  { name: "Next.js", icon: NextjsMonochromeSVG, color: "from-gray-900 to-black" },
  { name: "React", icon: ReactSVG, color: "from-cyan-500 to-cyan-600" },
  { name: "TypeScript", icon: TypescriptSVG, color: "from-indigo-500 to-indigo-600" },
  { name: "JavaScript", icon: JavaScriptSVG, color: "from-yellow-500 to-yellow-600" },
  { name: "HTML", icon: HTMLSVG, color: "from-orange-500 to-orange-600" },
  { name: "CSS", icon: CSSSVG, color: "from-blue-500 to-blue-600" },
  { name: "Tailwind", icon: TailwindSVG, color: "from-teal-500 to-teal-600" },
  { name: "Supabase", icon: SupabaseSVG, color: "from-emerald-500 to-emerald-600" },
  { name: "Git", icon: GitSVG, color: "from-orange-400 to-orange-500" },
  { name: "GitHub", icon: GithubSVG, color: "from-gray-800 to-black" },
  { name: "Express", icon: ExpressSVG, color: "from-green-500 to-green-600" },
  { name: "Prisma", icon: PrismaSVG, color: "from-purple-500 to-purple-600" },
];

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
        type: "spring" as const,
        stiffness: 100
      }
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-gray-800">Technical Skills</h2>
      </div>
      
      {/* Skills Grid - 3x4 layout */}
      <motion.div 
        className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-4 flex-1"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            variants={skillVariants}
            whileHover={{ 
              scale: 1.05,
              rotate: [0, -2, 2, 0],
              transition: { duration: 0.3 }
            }}
            className="group cursor-pointer"
          >
            <div className={`p-3 md:p-4 bg-gradient-to-br ${skill.color} rounded-xl shadow-lg text-white text-center transform transition-all duration-300 group-hover:shadow-xl h-full flex flex-col justify-center items-center`}
            >
              <motion.div 
                className="flex items-center justify-center mb-3"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              >
                <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                  <skill.icon />
                </div>
              </motion.div>
              <p className="font-semibold text-xs md:text-sm leading-tight text-center">{skill.name}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
