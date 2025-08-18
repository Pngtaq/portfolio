"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="bg-gray-50 text-gray-900">
      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
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
          A passionate Full-Stack Developer building modern web apps with
          exceptional user experiences.
        </motion.p>
        <div className="flex gap-4">
          <Button asChild>
            <a href="#projects">View Projects</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#contact">Contact Me</a>
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
        <p className="text-gray-700 leading-relaxed">
          I specialize in building high-quality web applications with modern
          technologies. With a focus on clean code, performance, and user
          experience, I aim to deliver products that make an impact.
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
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="transition"
            >
              <Card className="shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-2">Project {i}</h3>
                  <p className="text-gray-600 mb-4">
                    A short description of what this project does and the tech
                    used.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="flex items-center gap-1 text-blue-600 hover:underline"
                    >
                      <ExternalLink size={16} /> Demo
                    </a>
                    <a
                      href="#"
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
          I'm open to opportunities and collaborations. Feel free to reach out!
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
