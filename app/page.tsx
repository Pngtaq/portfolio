"use client";
import { useRef } from "react";

import IntroAnimation from "@/components/IntroAnimation";
import MyInformation from "@/components/MyInformation";

import ProjectsSection from "@/components/ProjectsSection";

import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function PortfolioHome() {
  const containerRef = useRef<HTMLDivElement>(null);





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
