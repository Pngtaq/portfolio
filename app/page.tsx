"use client";
import { useRef } from "react";
import {  useScroll, useTransform } from "framer-motion";
import IntroAnimation from "@/components/IntroAnimation";
import MyInformation from "@/components/MyInformation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function PortfolioHome() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });




  return (
    <div ref={containerRef} className="bg-gray-50 text-gray-900 scroll-smooth">
      <IntroAnimation>
        <MyInformation />
      </IntroAnimation>
      
      <ScrollIndicator />
      

      <ProjectsSection />
    
      <ContactSection />
      <Footer />
    </div>
  );
}
