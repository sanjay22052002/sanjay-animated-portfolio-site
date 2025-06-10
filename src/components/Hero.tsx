
import React, { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Full Stack Developer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 150);
    
    return () => clearInterval(timer);
  }, []);

  const backgroundPattern = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306b6d4' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div 
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: `url("${backgroundPattern}")` }}
      ></div>
      
      <div className="text-center z-10 animate-fade-in-up">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-1 animate-pulse">
            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-6xl font-bold font-mono">
              S
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent animate-slide-in-left tracking-tight">
          Sanjay
        </h1>
        
        <div className="text-2xl md:text-3xl mb-6 h-10 animate-slide-in-right font-medium">
          <span className="text-gray-300 font-mono">{text}</span>
          <span className="animate-pulse font-mono">|</span>
        </div>
        
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto px-4 animate-fade-in-up animation-delay-1000 font-light leading-relaxed">
          BSc Computer Science graduate with expertise in modern web technologies. 
          Passionate about creating innovative solutions and beautiful user experiences.
        </p>
        
        <div className="flex justify-center space-x-6 mb-12 animate-fade-in-up animation-delay-1500">
          <a href="#" className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 hover:scale-110 group">
            <Github className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          </a>
          <a href="#" className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 hover:scale-110 group">
            <Linkedin className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          </a>
          <a href="#contact" className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 hover:scale-110 group">
            <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          </a>
        </div>
        
        <a href="#about" className="inline-block animate-bounce">
          <ChevronDown className="w-8 h-8 text-cyan-400" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
