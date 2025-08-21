"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
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
  );
}
