import Image from "next/image";
import Skills from "./Skills";
import { Atma } from "next/font/google";
import HandWritingAnimation from "./HandWritingAnimation";
const atmaFont = Atma({
  subsets: ["latin"],
  weight: ["300", "400", "600", "500", "700"],
});
export default function MyInformation() {
  return (
    <div
      className={`bg-cover bg-center relative py-3 ${atmaFont.className}`}
      style={{ backgroundImage: "url('/background.png')" }}
    >
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2 px-4">
        <div className="space-y-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-bold">Hello!</span> I&apos;m John
            Raison V. Salvador
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
            I am a 25-year-old full-stack programmer from Rizal, Philippines,
            with a strong passion for creating innovative and efficient digital
            solutions. My expertise lies in building modern web applications
            using technologies such as Next.js, Express, and React, allowing me
            to handle both front-end and back-end development with ease. I
            thrive on solving complex problems through code, continuously
            learning, and pushing myself to improve my skills.
          </p>
          <div className="space-x-3">
            <button className="border border-black px-3 py-2 rounded-md text-sm sm:text-base hover:bg-black hover:text-white transition-colors">
              Github
            </button>
            <button className="border border-black px-3 py-2 rounded-md text-sm sm:text-base hover:bg-black hover:text-white transition-colors">
              Resume
            </button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-self-center">
          <div className="rotate-[3deg] transform">
            <Image 
              src="/me.png" 
              width={300} 
              height={300} 
              alt="me" 
              className="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72"
            />
          </div>
        </div>
      </div>

      {/* Education and Skills Section */}
      <div className="w-full flex flex-col lg:flex-row justify-evenly gap-6 mt-8 px-4">
        <div
          className="min-h-[400px] w-full lg:w-1/2 bg-cover bg-center flex items-center justify-center text-center p-6"
          style={{ backgroundImage: "url('/paper2.png')" }}
        >
          <div className="w-full max-w-md">
            <div className="text-start">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">EDUCATION</h1>
              <ul className="list-disc space-y-3 text-sm sm:text-base">
                <li>
                  <h1 className="font-semibold">
                    Binangonan Catholic College (2006-2020)
                  </h1>
                  <h1>Primary & Secondary Education</h1>
                  <h1>Binangonan Rizal</h1>
                </li>
                <li>
                  <h1 className="font-semibold">
                    Systems Technology Institute (2022-2025)
                  </h1>
                  <h1>Computer Science</h1>
                  <h1>Binangonan Rizal</h1>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div
          className="min-h-[400px] w-full lg:w-1/2 bg-cover bg-center flex items-center justify-center text-center p-6 transform"
          style={{ backgroundImage: "url('/ripped-paper.png')" }}
        >
          <Skills />
        </div>
      </div>

      {/* Contact and Title Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 px-4">
        <div className="transform -rotate-2 lg:-rotate-2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">CONTACT</h1>
          <div className="space-y-2 text-sm sm:text-base">
            <p>ronchan.dev@gmail.com</p>
            <p>(+63)9629707551</p>
            <p className="break-all">https://www.linkedin.com/in/john-raison-salvador-9a8b62271/</p>
          </div>
        </div>
        
        <div className="flex justify-center lg:justify-end">
          <HandWritingAnimation>Full-stack Web Developer</HandWritingAnimation>
        </div>
      </div>
    </div>
  );
}
