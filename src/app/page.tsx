"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-x-hidden">
      <Hero />
      <div className="grid lg:grid-cols-2 gap-0">
        <About />
        <Skills />
      </div>
      <div className="grid lg:grid-cols-3 gap-0">
        <Education />
        <Experience />
        <div className="lg:col-span-1 flex items-center justify-center p-8 bg-gradient-to-br from-cyan-900/30 to-blue-900/30">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">3+</span>
            </div>
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">
              Years Learning
            </h3>
            <p className="text-gray-300 text-sm">
              Continuous growth in technology
            </p>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}

