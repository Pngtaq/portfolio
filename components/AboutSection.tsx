"use client";
import { motion } from "framer-motion";
import { Code, Zap } from "lucide-react";

export default function AboutSection() {
  return (
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
            I&apos;m a software engineer with a strong focus on building web
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
  );
}
