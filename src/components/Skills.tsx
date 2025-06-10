
import { useState, useEffect, useRef } from "react";
import { Code, Palette, Server, Database, Zap, Lightbulb } from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { name: "HTML 5", level: 95, category: "Frontend", icon: Code },
    { name: "CSS 3", level: 90, category: "Frontend", icon: Palette },
    { name: "JavaScript", level: 88, category: "Frontend", icon: Code },
    { name: "React Framework", level: 85, category: "Frontend", icon: Code },
    { name: "Python", level: 80, category: "Backend", icon: Server },
    { name: "C#", level: 75, category: "Backend", icon: Database },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-8 bg-gradient-to-br from-blue-900/30 to-slate-900/50" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-6 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 group border border-white/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg mr-3 group-hover:rotate-12 transition-transform duration-300">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{skill.name}</h3>
                      <p className="text-xs text-cyan-300">{skill.category}</p>
                    </div>
                  </div>
                  <span className="text-cyan-300 font-semibold">{skill.level}%</span>
                </div>
                
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full transition-all duration-2000 ease-out"
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%',
                      transitionDelay: `${index * 100}ms`
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-fit mx-auto mb-4">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-cyan-300 mb-2">UI/UX Design</h4>
            <p className="text-gray-400 text-sm">Modern, responsive design principles</p>
          </div>
          
          <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-fit mx-auto mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-cyan-300 mb-2">Performance</h4>
            <p className="text-gray-400 text-sm">Optimized, fast-loading applications</p>
          </div>
          
          <div className="text-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-fit mx-auto mb-4">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-semibold text-cyan-300 mb-2">Problem Solving</h4>
            <p className="text-gray-400 text-sm">Creative solutions to complex challenges</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
