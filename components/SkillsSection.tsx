"use client";
import { motion } from "framer-motion";

const skills = [
  { name: "Next.js", icon: "⚡", color: "from-blue-500 to-blue-600" },
  { name: "React", icon: "⚛️", color: "from-cyan-500 to-cyan-600" },
  { name: "Tailwind", icon: "🎨", color: "from-teal-500 to-teal-600" },
  { name: "TypeScript", icon: "🔷", color: "from-indigo-500 to-indigo-600" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto relative">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-16 text-center"
      >
        Technical Skills
      </motion.h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.3 }
            }}
            className="group cursor-pointer"
          >
            <div className={`p-8 bg-gradient-to-br ${skill.color} rounded-2xl shadow-lg text-white text-center transform transition-all duration-300 group-hover:shadow-2xl`}>
              <motion.div 
                className="text-4xl mb-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              >
                {skill.icon}
              </motion.div>
              <p className="font-semibold text-lg">{skill.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
