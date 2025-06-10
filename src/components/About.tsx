
import { User, MapPin, Calendar, Code2 } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-8 bg-gradient-to-br from-slate-900/50 to-blue-900/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent tracking-tight">
          About Me
        </h2>
        
        <div className="space-y-8">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                <User className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2 text-white tracking-wide">Personal Story</h3>
                <p className="text-gray-300 leading-relaxed font-light">
                  I'm a passionate full-stack developer with a strong foundation in computer science. 
                  I love creating digital experiences that are both functional and beautiful, always 
                  striving to learn new technologies and improve my skills.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10">
              <div className="flex items-center mb-3">
                <MapPin className="w-5 h-5 text-cyan-400 mr-3" />
                <h3 className="text-lg font-medium text-white tracking-wide">Location</h3>
              </div>
              <p className="text-gray-300 font-light">Chennai, Tamil Nadu, India</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10">
              <div className="flex items-center mb-3">
                <Code2 className="w-5 h-5 text-cyan-400 mr-3" />
                <h3 className="text-lg font-medium text-white tracking-wide">Focus</h3>
              </div>
              <p className="text-gray-300 font-light">Full Stack Development</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-md rounded-2xl p-6 border border-cyan-500/20">
            <div className="flex items-center mb-4">
              <Calendar className="w-5 h-5 text-cyan-400 mr-3" />
              <h3 className="text-lg font-medium text-white tracking-wide">Journey Highlights</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                <span className="text-gray-300 text-sm font-light">Computer Science Graduate</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                <span className="text-gray-300 text-sm font-light">Full Stack Training</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                <span className="text-gray-300 text-sm font-light">Industry Internship</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                <span className="text-gray-300 text-sm font-light">Continuous Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
