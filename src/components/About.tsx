
import { User, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <User className="w-6 h-6 text-cyan-400 mr-3" />
                <h3 className="text-xl font-semibold">Personal Info</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer with a strong foundation in computer science. 
                I love creating digital experiences that are both functional and beautiful.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-cyan-400 mr-3" />
                <h3 className="text-xl font-semibold">Location</h3>
              </div>
              <p className="text-gray-300">Chennai, Tamil Nadu, India</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-4">
                <Calendar className="w-6 h-6 text-cyan-400 mr-3" />
                <h3 className="text-xl font-semibold">Journey</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full mr-4"></div>
                  <span className="text-gray-300">Started with Computer Science fundamentals</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full mr-4"></div>
                  <span className="text-gray-300">Specialized in Full Stack Development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full mr-4"></div>
                  <span className="text-gray-300">Gained industry experience through internship</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full mr-4"></div>
                  <span className="text-gray-300">Continuously learning and growing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
