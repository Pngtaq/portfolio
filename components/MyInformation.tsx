import Image from "next/image";
import Skills from "./Skills";
import { Atma } from "next/font/google";
import HandWritingAnimation from "./HandWritingAnimation";
import { motion } from "framer-motion";
import { Github, Mail, Phone, MapPin, ExternalLink, Download, Star, Award, BookOpen } from "lucide-react";

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
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 2, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <motion.div
      className={`bg-cover bg-center relative py-8 ${atmaFont.className}`}
      style={{ backgroundImage: "url('/background.png')" }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Light overlay to brighten the background */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
      
      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Greeting */}
            <div className="space-y-4">
              <motion.div className="flex items-center gap-3 mb-2">
                <motion.div
                  className="w-3 h-3 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-green-700 text-sm font-medium">Available for opportunities</span>
              </motion.div>
              
              <motion.h1 
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight"
                variants={itemVariants}
              >
                <motion.span 
                  className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                  transition={{ duration: 0.3 }}
                >
                  Hello!
                </motion.span>
                <br />
                <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                  I&apos;m <span className="font-bold text-gray-800">John Raison V. Salvador</span>
                </span>
              </motion.h1>
            </div>
            
            {/* Description */}
            <motion.p 
              className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
              I am a 25-year-old full-stack programmer from Rizal, Philippines,
              with a strong passion for creating innovative and efficient digital
              solutions. My expertise lies in building modern web applications
              using technologies such as Next.js, Express, and React, allowing me
              to handle both front-end and back-end development with ease.
            </motion.p>
            
            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.button 
                className="group bg-black text-white px-6 py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                View GitHub
              </motion.button>
              <motion.button 
                className="group border-2 border-black px-6 py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center gap-3 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Download Resume
              </motion.button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-6"
              variants={itemVariants}
            >
              {[
                { icon: Star, label: "Years Experience", value: "3+" },
                { icon: Award, label: "Projects Completed", value: "15+" },
                { icon: BookOpen, label: "Technologies", value: "10+" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  whileHover={{ scale: 1.05 }}
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            <motion.div 
              className="relative"
              whileHover={{ 
                scale: 1.05, 
                rotate: [3, -3, 3],
                transition: { duration: 0.6 }
              }}
              variants={floatingVariants}
              animate="animate"
            >
              {/* Profile Image Container */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl transform rotate-6 scale-105 opacity-30 blur-xl"></div>
                <div className="relative bg-white p-2 rounded-3xl shadow-2xl">
                  <Image 
                    src="/me.png" 
                    width={400} 
                    height={400} 
                    alt="John Raison Salvador" 
                    className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl object-cover"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                AVAILABLE
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 bg-white px-3 py-2 rounded-full text-xs font-medium shadow-lg border border-gray-200"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                🚀 Full-Stack
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Education and Skills Section */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          variants={itemVariants}
        >
          {/* Education Card */}
          <motion.div
            className="relative group"
            whileHover={{ 
              scale: 1.02,
              rotate: [0, -1, 1, 0],
              transition: { duration: 0.3 }
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white/98 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-yellow-200/50">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Education</h2>
              </div>
              
              {/* Education Items */}
              <div className="space-y-6">
                {[
                  {
                    school: "Systems Technology Institute",
                    period: "2022 - 2025",
                    degree: "Computer Science",
                    location: "Binangonan Rizal",
                    description: "Currently pursuing Computer Science degree with focus on software development and web technologies."
                  },
                  {
                    school: "Binangonan Catholic College",
                    period: "2006 - 2020",
                    degree: "Primary & Secondary Education",
                    location: "Binangonan Rizal",
                    description: "Completed primary and secondary education with strong foundation in mathematics and sciences."
                  }
                ].map((edu, index) => (
                  <motion.div
                    key={index}
                    className="relative pl-6 border-l-2 border-yellow-300"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + index * 0.2, duration: 0.6 }}
                    whileHover={{ x: 5 }}
                  >
                    <div className="absolute -left-2.5 top-0 w-5 h-5 bg-yellow-400 rounded-full border-4 border-white shadow-md"></div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-lg text-gray-800">{edu.school}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-medium">{edu.period}</span>
                        <span className="text-gray-400">•</span>
                        <span>{edu.location}</span>
                      </div>
                      <p className="font-semibold text-gray-700">{edu.degree}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{edu.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Skills Card */}
          <motion.div
            className="relative group"
            whileHover={{ 
              scale: 1.02,
              rotate: [0, 1, -1, 0],
              transition: { duration: 0.3 }
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white/98 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-blue-200/50 h-full">
              <Skills />
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={itemVariants}
        >
          {/* Contact Information */}
          <motion.div 
            className="space-y-6"
            whileHover={{ rotate: 0, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-gray-800 flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                Get In Touch
              </h2>
              <p className="text-lg text-gray-600">I&apos;m always open to discussing new opportunities and exciting projects.</p>
            </div>
            
            <div className="space-y-4">
              {[
                { icon: Mail, text: "ronchan.dev@gmail.com", href: "mailto:ronchan.dev@gmail.com", color: "text-red-500" },
                { icon: Phone, text: "(+63) 962-970-7551", href: "tel:+639629707551", color: "text-green-500" },
                { icon: MapPin, text: "Rizal, Philippines", href: "#", color: "text-blue-500" },
                { icon: ExternalLink, text: "LinkedIn Profile", href: "https://www.linkedin.com/in/john-raison-salvador-9a8b62271/", color: "text-blue-600" }
              ].map((contact, index) => (
                <motion.a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? "_blank" : "_self"}
                  rel={contact.href.startsWith('http') ? "noopener noreferrer" : ""}
                  className="flex items-center gap-4 p-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:bg-white border border-gray-100"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.7 + index * 0.1, duration: 0.6 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <div className={`w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center group-hover:bg-gray-100 transition-colors`}>
                    <contact.icon className={`w-5 h-5 ${contact.color}`} />
                  </div>
                  <div className="flex-1">
                    <span className="text-gray-700 group-hover:text-gray-900 font-medium transition-colors">{contact.text}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Title Animation */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="mb-6"
              >
                <HandWritingAnimation>Full-stack Web Developer</HandWritingAnimation>
              </motion.div>
              
              {/* Additional Info */}
              <motion.div 
                className="space-y-3 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
              >
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Open to remote opportunities</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Available for freelance projects</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 right-10 w-20 h-20 bg-blue-200 rounded-full opacity-30"
        animate={{ 
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 left-16 w-16 h-16 bg-purple-200 rounded-full opacity-30"
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
