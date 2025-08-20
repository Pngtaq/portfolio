"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import Image from "next/image";
import Skills from "@/components/Skills";

export default function PortfolioHome() {
  return (
    <div className="bg-gray-50 text-gray-900 scroll-smooth">
      <div
        className="min-h-screen bg-cover bg-center relative px-40"
        style={{ backgroundImage: "url('/background.png')" }}
      >
        <div className="grid grid-cols-2 pt-2 ">
          <div className="">
            <h1 className="text-3xl">
              <span className="text-6xl">Hello!</span> I&apos;m John Raison V.
              Salvador
            </h1>
            <p>
              I am a 25-year-old full-stack programmer from Rizal, Philippines,
              with a strong passion for creating innovative and efficient
              digital solutions. My expertise lies in building modern web
              applications using technologies such as Next.js, Express, and
              React, allowing me to handle both front-end and back-end
              development with ease. I thrive on solving complex problems
              through code, continuously learning, and pushing myself to improve
              my skills.
            </p>
          </div>

          <div className="justify-self-center rotate-[3deg]">
            <Image src="/me.png" width={300} height={10} alt="me" />
          </div>
        </div>
        <div className="w-full flex justify-evenly flex-wrap">
          <div
            className="h-110 w-120 bg-cover bg-center  flex items-center justify-center text-center"
            style={{ backgroundImage: "url('/paper2.png')" }}
          >
            <div className="w-[73%] space-y-1 flex items-center flex-col">
              <div className="w-3/4">
                <h1 className="text-5xl">EDUCATION</h1>
                <ul className="list-disc">
                  <li>
                    <h1>Binangonan Catholic College (2006-2020)</h1>
                  </li>
                  <li>
                    <h1>Systems Technology Institute (2022-2025)</h1>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="h-100 min-w-[50%] max-w-150 bg-cover bg-center  flex items-center justify-center text-center rotate-[-3deg]"
            style={{ backgroundImage: "url('/ripped-paper.png')" }}
          >
            <Skills />
          </div>
        </div>
        <div className="rotate-[-2deg]">
          <h1 className="text-5xl">CONTACT</h1>
          <p>ronchan.dev@gmail.com</p>
          <p>(+63)9629707551</p>
          <p>https://www.linkedin.com/in/john-raison-salvador-9a8b62271/</p>
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
