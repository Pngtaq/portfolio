import Image from "next/image";
import Skills from "./Skills";
import { Atma } from "next/font/google";
const atmaFont = Atma({
  subsets: ["latin"],
  weight: ["300", "400", "600", "500", "700"],
});
export default function MyInformation() {
  return (
    <div
      className={`min-h-screen bg-cover bg-center relative px-40 py-3 ${atmaFont.className} `}
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <div className="grid grid-cols-2 pt-2 ">
        <div className="">
          <h1 className="text-3xl">
            <span className="text-6xl font-bold">Hello!</span> I&apos;m John
            Raison V. Salvador
          </h1>
          <p>
            I am a 25-year-old full-stack programmer from Rizal, Philippines,
            with a strong passion for creating innovative and efficient digital
            solutions. My expertise lies in building modern web applications
            using technologies such as Next.js, Express, and React, allowing me
            to handle both front-end and back-end development with ease. I
            thrive on solving complex problems through code, continuously
            learning, and pushing myself to improve my skills.
          </p>
          <div className="space-x-3">
            <button className="border-1 border-black px-4 py-2 rounded-md">
              Github
            </button>
            <button className="border-1 border-black px-4 py-2 rounded-md">
              Resume
            </button>
          </div>
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
  );
}
