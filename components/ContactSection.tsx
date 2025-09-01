"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Mail, href: "mailto:ronchan.dev@gmail.com", label: "Email", color: "hover:text-red-500" },
  { icon: Github, href: "https://github.com/Pngtaq", label: "GitHub", color: "hover:text-gray-800" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/raisonsalvador/", label: "LinkedIn", color: "hover:text-blue-600" },
];

export default function ContactSection() {
  return (
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
        Let&apos;s Connect!
      </motion.h2>
      
      <motion.p 
        className="text-gray-700 mb-12 text-lg max-w-2xl mx-auto relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        I&apos;m always open to discussing new opportunities, interesting projects, and creative ideas.
      </motion.p>
      
      <motion.div 
        className="flex justify-center gap-8 mb-8 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {socialLinks.map((social, i) => (
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
  );
}
