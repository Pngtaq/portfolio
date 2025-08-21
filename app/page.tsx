"use client";
import { Atma } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, ExternalLink, ArrowDown, Code, Globe, Zap } from "lucide-react";
import Image from "next/image";
import Skills from "@/components/Skills";
import IntroAnimation from "@/components/IntroAnimation";
import MyInformation from "@/components/MyInformation";
import { useEffect, useRef } from "react";

export default function PortfolioHome() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={containerRef} className="bg-gray-50 text-gray-900 scroll-smooth">
      <IntroAnimation>
        <MyInformation />
      </IntroAnimation>
      
      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-600"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div
          className="absolute inset-0 opacity-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-green-500 rounded-full blur-3xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            Hi, I'm <motion.span 
              className="text-blue-600 relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              John Raison
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-600"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl max-w-2xl mb-8 text-gray-600"
          >
            A passionate Full-Stack Developer crafting beautiful, performant, and
            user-focused web applications with cutting-edge technologies.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="text-lg px-8 py-3">
                <a href="#projects">View My Work</a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" asChild size="lg" className="text-lg px-8 py-3">
                <a href="#contact">Get In Touch</a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Floating Icons */}
        <motion.div
          className="absolute top-1/4 right-10 opacity-20"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <Code className="w-12 h-12 text-blue-500" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 left-10 opacity-20"
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        >
          <Globe className="w-12 h-12 text-green-500" />
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 relative"
            whileHover={{ scale: 1.02 }}
          >
            About Me
            <motion.div
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-600"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <motion.p 
              className="text-gray-700 leading-relaxed text-lg md:text-xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              I'm a software engineer with a strong focus on building web
              applications that balance functionality with delightful design. I
              enjoy working with modern technologies like Next.js, Tailwind, and
              TypeScript while always staying curious and learning new tools.
            </motion.p>
            
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                className="flex items-center gap-2 text-blue-600"
                whileHover={{ scale: 1.05 }}
              >
                <Zap className="w-5 h-5" />
                <span className="font-semibold">Fast & Responsive</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-2 text-green-600"
                whileHover={{ scale: 1.05 }}
              >
                <Code className="w-5 h-5" />
                <span className="font-semibold">Clean Code</span>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 flex items-center justify-center">
              <motion.div
                className="text-center space-y-4"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-6xl">🚀</div>
                <h3 className="text-xl font-semibold text-gray-700">Always Learning</h3>
                <p className="text-gray-600">Exploring new technologies daily</p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* PROJECTS */}
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
          {[
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
          ].map((project, i) => (
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

      {/* SKILLS */}
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
          {[
            { name: "Next.js", icon: "⚡", color: "from-blue-500 to-blue-600" },
            { name: "React", icon: "⚛️", color: "from-cyan-500 to-cyan-600" },
            { name: "Tailwind", icon: "🎨", color: "from-teal-500 to-teal-600" },
            { name: "TypeScript", icon: "🔷", color: "from-indigo-500 to-indigo-600" },
          ].map((skill, i) => (
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

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 text-center bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-20 w-20 h-20 bg-blue-400 rounded-full opacity-20"
          animate={{ 
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-16 h-16 bg-purple-400 rounded-full opacity-20"
          animate={{ 
            y: [0, 30, 0],
            x: [0, -20, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        />

        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-8 relative z-10"
        >
          Let's Connect!
        </motion.h2>
        
        <motion.p 
          className="text-gray-700 mb-12 text-lg max-w-2xl mx-auto relative z-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I'm always open to discussing new opportunities, interesting projects, and creative ideas.
        </motion.p>
        
        <motion.div 
          className="flex justify-center gap-8 mb-8 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { icon: Mail, href: "mailto:ronchan.dev@gmail.com", label: "Email", color: "hover:text-red-500" },
            { icon: Github, href: "https://github.com/yourgithub", label: "GitHub", color: "hover:text-gray-800" },
            { icon: Linkedin, href: "https://linkedin.com/in/john-raison-salvador-9a8b62271/", label: "LinkedIn", color: "hover:text-blue-600" },
          ].map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center gap-2 text-gray-600 transition-colors ${social.color}`}
              whileHover={{ 
                scale: 1.1,
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
            >
              <social.icon className="w-8 h-8" />
              <span className="text-sm font-medium">{social.label}</span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl p-8 max-w-md mx-auto shadow-lg relative z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="font-semibold text-lg mb-4">Quick Contact</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p>📧 ronchan.dev@gmail.com</p>
            <p>📱 (+63) 962-970-7551</p>
            <p>📍 Rizal, Philippines</p>
          </div>
        </motion.div>
      </section>

      <motion.footer 
        className="py-8 text-center text-gray-500 text-sm bg-gray-900 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          © {new Date().getFullYear()} John Raison V. Salvador. All rights reserved.
        </motion.div>
      </motion.footer>
    </div>
  );
}
