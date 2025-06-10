
import { GraduationCap, BookOpen } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Education
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 group">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4 group-hover:rotate-12 transition-transform duration-300">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Bachelor's Degree</h3>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-purple-300">BSc Computer Science</h4>
              <p className="text-lg text-gray-300">ST. Joseph College, Kovur</p>
              <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
              </div>
              <p className="text-gray-400">
                Strong foundation in computer science fundamentals, algorithms, and programming concepts.
              </p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 group">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-4 group-hover:rotate-12 transition-transform duration-300">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Professional Course</h3>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-purple-300">Full Stack Development</h4>
              <p className="text-lg text-gray-300">Accord Info Matrix, Little Mount, Saidapet</p>
              <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left animation-delay-500"></div>
              </div>
              <p className="text-gray-400">
                Comprehensive training in modern web development technologies and industry best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
