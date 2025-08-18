"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Image from "next/image";
import { div } from "framer-motion/client";

export default function PortfolioHome() {
  return (
    <div className="bg-gray-50 text-gray-900 scroll-smooth">
      <div className="relative w-screen h-screen">
        <Image
          src="/background1.png"
          fill
          alt="paper-grid"
          className="absolute inset-0 object-cover z-0"
        />

        <div>
          {/* Ripped paper with animation */}
          <motion.div
            className="relative rotate-[-1deg] max-w-150 h-[300px] w-full"
            initial={{ opacity: 0, y: 50, rotate: -5 }}
            animate={{ opacity: 1, y: 0, rotate: -3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Background ripped paper */}
            <Image
              src="/ripped-paper.png"
              fill
              alt="ripped-paper"
              className="absolute inset-0 object-cover"
            />

            {/* Animated text */}
            <motion.h1
              className="absolute left-22 top-12 z-10 text-5xl font-bold text-black"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0 }}
            >
              Skills
            </motion.h1>

            {/* Animated list */}
            <motion.ul
              className="absolute left-24 top-28 z-10 text-xl font-bold text-black space-y-2 list-disc"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    staggerChildren: 0.2,
                  },
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
              className="absolute right-24 top-28 z-10 text-xl font-bold text-black space-y-2 list-disc"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    staggerChildren: 0.2,
                  },
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
          </motion.div>
        </div>
      </div>

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4"
        >
          Hi, I'm <span className="text-blue-600">Your Name</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg max-w-xl mb-6 text-gray-600"
        >
          A passionate Full-Stack Developer crafting beautiful, performant, and
          user-focused web applications.
        </motion.p>
        <div className="flex gap-4">
          <Button asChild>
            <a href="#projects">View My Work</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6"
        >
          About Me
        </motion.h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          I'm a software engineer with a strong focus on building web
          applications that balance functionality with delightful design. I
          enjoy working with modern technologies like Next.js, Tailwind, and
          TypeScript while always staying curious and learning new tools.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-20 px-6 bg-white">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-10 text-center"
        >
          Projects
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Portfolio Website",
              desc: "A responsive portfolio built with Next.js, Tailwind, and Framer Motion.",
              demo: "#",
              code: "#",
            },
            {
              title: "Task Manager",
              desc: "A full-stack app to manage tasks with authentication and real-time updates.",
              demo: "#",
              code: "#",
            },
            {
              title: "E-commerce Store",
              desc: "A modern e-commerce site with product listings, cart, and checkout flow.",
              demo: "#",
              code: "#",
            },
          ].map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="transition"
            >
              <Card className="shadow-lg h-full flex flex-col">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="font-semibold text-xl mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.desc}</p>
                  </div>
                  <div className="flex gap-4 mt-auto">
                    <a
                      href={project.demo}
                      target="_blank"
                      className="flex items-center gap-1 text-blue-600 hover:underline"
                    >
                      <ExternalLink size={16} /> Demo
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      className="flex items-center gap-1 text-gray-800 hover:underline"
                    >
                      <Github size={16} /> Code
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-20 px-6 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-10 text-center"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {["Next.js", "React", "Tailwind", "TypeScript"].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              className="p-6 bg-white rounded-xl shadow-md"
            >
              <p className="font-semibold">{skill}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 text-center bg-gray-100">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6"
        >
          Contact Me
        </motion.h2>
        <p className="text-gray-700 mb-6">
          Let's connect! I'm open to opportunities and collaborations.
        </p>
        <div className="flex justify-center gap-6">
          <a href="mailto:youremail@example.com">
            <Mail className="w-6 h-6 hover:text-blue-600" />
          </a>
          <a href="https://github.com/yourgithub" target="_blank">
            <Github className="w-6 h-6 hover:text-blue-600" />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank">
            <Linkedin className="w-6 h-6 hover:text-blue-600" />
          </a>
        </div>
      </section>

      <footer className="py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}
