
import { GraduationCap, BookOpen } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 px-8 bg-gradient-to-br from-cyan-900/20 to-blue-900/40 lg:col-span-2">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent tracking-tight">
          Education
        </h2>
        
        <div className="space-y-8">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 group border border-white/10">
            <div className="flex items-start space-x-6">
              <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl group-hover:rotate-12 transition-transform duration-300 flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">Bachelor's Degree</h3>
                <h4 className="text-xl font-medium text-cyan-300 mb-2 tracking-wide">BSc Computer Science</h4>
                <p className="text-lg text-gray-300 mb-4 font-light">ST. Joseph College, Kovur</p>
                
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden mb-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
                </div>
                
                <p className="text-gray-400 font-light leading-relaxed">
                  Strong foundation in computer science fundamentals, algorithms, and programming concepts.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 group border border-white/10">
            <div className="flex items-start space-x-6">
              <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl group-hover:rotate-12 transition-transform duration-300 flex-shrink-0">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">Professional Course</h3>
                <h4 className="text-xl font-medium text-cyan-300 mb-2 tracking-wide">Full Stack Development</h4>
                <p className="text-lg text-gray-300 mb-4 font-light">Accord Info Matrix, Little Mount, Saidapet</p>
                
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden mb-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left animation-delay-500"></div>
                </div>
                
                <p className="text-gray-400 font-light leading-relaxed">
                  Comprehensive training in modern web development technologies and industry best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
