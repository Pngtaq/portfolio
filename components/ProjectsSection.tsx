"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Devcuments",
    desc: "A minimalist documentation platform that helps developers save and organize their code documentation using Markdown and syntax highlighting. Features a clean, user-friendly design with Supabase authentication for secure access to personal documentation libraries.",
    demo: "https://documentation-three-psi.vercel.app",
    code: "https://github.com/Pngtaq/documentation",
    image: "/devcuments.png",
    tech: ["React", "Supabase", "Tailwind", "Supabase Auth"],
    codingType: "Manual Coded"
  },
  {
    title: "Workout AI",
    desc: "An AI-powered fitness application that generates personalized workout plans based on user preferences. Users can specify workout frequency, diet type, intensity level (light/medium/difficult), and add custom prompts for additional requirements. Powered by CohereAI for intelligent workout generation.",
    demo: "https://workout-ai-piqg.vercel.app",
    code: "https://github.com/Pngtaq/workout_ai",
    image: "/workout.png",
    tech: ["Next.js", "Tailwind", "Framer Motion", "Auth.js"],
    codingType: "Vibe Coded"
  },
  {
    title: "Portfolio Website",
    desc: "A responsive portfolio built with Next.js, Tailwind, and Framer Motion showcasing modern web development skills.",
    demo: "#",
    code: "#",
    image: "/background.png",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    codingType: "Manual Coded"
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-16 text-center relative"
      >
        Featured Projects
        <motion.div
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-blue-600"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            whileHover={{ 
              scale: 1.03,
              y: -10,
              transition: { type: "spring", stiffness: 300 }
            }}
            className="group"
          >
            <Card className="shadow-lg h-full flex flex-col border-0 bg-gradient-to-br from-gray-50 to-white hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-0 flex flex-col h-full">
                {/* Project Image - Made Even Larger */}
                <motion.div 
                  className="relative h-80 w-full overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={i === 0}
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </motion.div>
                
                {/* Project Content */}
                <div className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="font-semibold text-xl mb-3 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-2 leading-relaxed text-sm">{project.desc}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: techIndex * 0.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center relative z-10">
                    <div className="flex gap-4">
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
                        whileHover={{ x: 5 }}
                      >
                        <ExternalLink size={16} /> Demo
                      </motion.a>
                      <motion.a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-800 hover:text-gray-600 transition-colors cursor-pointer"
                        whileHover={{ x: 5 }}
                      >
                        <Github size={16} /> Code
                      </motion.a>
                    </div>
                    
                    <motion.span
                      className={`px-2 py-1 text-xs rounded-full font-medium ${
                        project.codingType === "Vibe Coded" 
                          ? "bg-purple-100 text-purple-700" 
                          : "bg-green-100 text-green-700"
                      }`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      {project.codingType}
                    </motion.span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
