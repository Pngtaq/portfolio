"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    desc: "A responsive portfolio built with Next.js, Tailwind, and Framer Motion.",
    demo: "#",
    code: "#",
    icon: "🎨",
    tech: ["Next.js", "React", "Tailwind", "Framer Motion"]
  },
  {
    title: "Task Manager",
    desc: "A full-stack app to manage tasks with authentication and real-time updates.",
    demo: "#",
    code: "#",
    icon: "✅",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"]
  },
  {
    title: "E-commerce Store",
    desc: "A modern e-commerce site with product listings, cart, and checkout flow.",
    demo: "#",
    code: "#",
    icon: "🛒",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"]
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
            <Card className="shadow-lg h-full flex flex-col border-0 bg-gradient-to-br from-gray-50 to-white hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                  <motion.div 
                    className="text-4xl mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {project.icon}
                  </motion.div>
                  <h3 className="font-semibold text-xl mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.desc}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
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
                
                <div className="flex gap-4 mt-auto">
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <ExternalLink size={16} /> Demo
                  </motion.a>
                  <motion.a
                    href={project.code}
                    target="_blank"
                    className="flex items-center gap-2 text-gray-800 hover:text-gray-600 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <Github size={16} /> Code
                  </motion.a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
