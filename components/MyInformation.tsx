import Image from "next/image";
import Skills from "./Skills";
import { Atma } from "next/font/google";
import HandWritingAnimation from "./HandWritingAnimation";
import { motion } from "framer-motion";
import { Github, FileText, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const atmaFont = Atma({
  subsets: ["latin"],
  weight: ["300", "400", "600", "500", "700"],
});

export default function MyInformation() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 2, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className={`bg-cover bg-center relative py-3 ${atmaFont.className}`}
      style={{ backgroundImage: "url('/background.png')" }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2 px-4">
        <motion.div className="space-y-6" variants={itemVariants}>
          <motion.h1 
            className="text-2xl sm:text-3xl lg:text-4xl"
            variants={itemVariants}
          >
            <motion.span 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold"
              whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
              transition={{ duration: 0.3 }}
            >
              Hello!
            </motion.span> I&apos;m John
            Raison V. Salvador
          </motion.h1>
          
          <motion.p 
            className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed"
            variants={itemVariants}
          >
            I am a 25-year-old full-stack programmer from Rizal, Philippines,
            with a strong passion for creating innovative and efficient digital
            solutions. My expertise lies in building modern web applications
            using technologies such as Next.js, Express, and React, allowing me
            to handle both front-end and back-end development with ease. I
            thrive on solving complex problems through code, continuously
            learning, and pushing myself to improve my skills.
          </motion.p>
          
          <motion.div 
            className="space-x-3"
            variants={itemVariants}
          >
            <motion.button 
              className="border border-black px-3 py-2 rounded-md text-sm sm:text-base hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2 group"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              Github
            </motion.button>
            <motion.button 
              className="border border-black px-3 py-2 rounded-md text-sm sm:text-base hover:bg-black hover:text-white transition-all duration-300 flex items-center gap-2 group"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              Resume
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex justify-center lg:justify-self-center"
          variants={itemVariants}
        >
          <motion.div 
            className="rotate-[3deg] transform relative"
            whileHover={{ 
              scale: 1.05, 
              rotate: [3, -3, 3],
              transition: { duration: 0.6 }
            }}
            variants={floatingVariants}
            animate="animate"
          >
            <Image 
              src="/me.png" 
              width={300} 
              height={300} 
              alt="me" 
              className="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72"
            />
            {/* Floating badge */}
            <motion.div
              className="absolute -top-4 -right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              AVAILABLE
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Education and Skills Section */}
      <motion.div 
        className="w-full flex flex-col lg:flex-row justify-evenly gap-6 mt-8 px-4"
        variants={itemVariants}
      >
        <motion.div
          className="min-h-[400px] w-full lg:w-1/2 bg-cover bg-center flex items-center justify-center text-center p-6 relative group"
          style={{ backgroundImage: "url('/paper2.png')" }}
          whileHover={{ 
            scale: 1.02,
            rotate: [0, -1, 1, 0],
            transition: { duration: 0.3 }
          }}
        >
          {/* Floating particles */}
          <motion.div
            className="absolute top-4 right-4 w-2 h-2 bg-yellow-400 rounded-full opacity-60"
            animate={{ 
              y: [0, -10, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-6 left-6 w-3 h-3 bg-blue-400 rounded-full opacity-60"
            animate={{ 
              y: [0, 10, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
          />
          
          <div className="w-full max-w-md">
            <div className="text-start">
              <motion.h1 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
                whileHover={{ scale: 1.05 }}
              >
                EDUCATION
              </motion.h1>
              <motion.ul 
                className="list-disc space-y-3 text-sm sm:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                {[
                  {
                    school: "Binangonan Catholic College (2006-2020)",
                    level: "Primary & Secondary Education",
                    location: "Binangonan Rizal"
                  },
                  {
                    school: "Systems Technology Institute (2022-2025)",
                    level: "Computer Science",
                    location: "Binangonan Rizal"
                  }
                ].map((edu, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + index * 0.2, duration: 0.6 }}
                    whileHover={{ x: 5 }}
                    className="transition-all duration-300"
                  >
                    <h1 className="font-semibold">{edu.school}</h1>
                    <h1>{edu.level}</h1>
                    <h1>{edu.location}</h1>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          className="min-h-[400px] w-full lg:w-1/2 bg-cover bg-center flex items-center justify-center text-center p-6 transform relative group"
          style={{ backgroundImage: "url('/ripped-paper.png')" }}
          whileHover={{ 
            scale: 1.02,
            rotate: [0, 1, -1, 0],
            transition: { duration: 0.3 }
          }}
        >
          {/* Floating elements */}
          <motion.div
            className="absolute top-6 left-6 w-4 h-4 bg-red-400 rounded-full opacity-40"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.4, 0.8, 0.4]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-8 right-8 w-2 h-2 bg-green-400 rounded-full opacity-60"
            animate={{ 
              y: [0, -15, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          />
          
          <Skills />
        </motion.div>
      </motion.div>

      {/* Contact and Title Section */}
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 px-4"
        variants={itemVariants}
      >
        <motion.div 
          className="transform -rotate-2 lg:-rotate-2 relative"
          whileHover={{ rotate: 0, scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            CONTACT
          </motion.h1>
          <motion.div 
            className="space-y-2 text-sm sm:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            {[
              { icon: Mail, text: "ronchan.dev@gmail.com", href: "mailto:ronchan.dev@gmail.com" },
              { icon: Phone, text: "(+63)9629707551", href: "tel:+639629707551" },
              { icon: ExternalLink, text: "LinkedIn Profile", href: "https://www.linkedin.com/in/john-raison-salvador-9a8b62271/" }
            ].map((contact, index) => (
              <motion.a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? "_blank" : "_self"}
                rel={contact.href.startsWith('http') ? "noopener noreferrer" : ""}
                className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.7 + index * 0.1, duration: 0.6 }}
                whileHover={{ x: 5 }}
              >
                <contact.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="break-all">{contact.text}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="flex justify-center lg:justify-end"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <HandWritingAnimation>Full-stack Web Developer</HandWritingAnimation>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 right-10 w-16 h-16 bg-blue-200 rounded-full opacity-20"
        animate={{ 
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 left-16 w-12 h-12 bg-purple-200 rounded-full opacity-20"
        animate={{ 
          y: [0, 25, 0],
          x: [0, -15, 0],
          scale: [1, 0.8, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
      />
    </motion.div>
  );
}
