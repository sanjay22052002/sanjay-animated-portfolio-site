
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-8 bg-gradient-to-br from-blue-900/40 to-cyan-900/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Experience
        </h2>
        
        <div className="relative">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 group border border-white/10">
            <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
              <div className="flex items-center">
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl mr-4 group-hover:rotate-12 transition-transform duration-300">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Intern</h3>
                  <p className="text-xl text-cyan-300">Cyvar Corp Private LTD</p>
                </div>
              </div>
              
              <div className="text-right">
                <div className="flex items-center text-gray-300 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Completed</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Chennai</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-cyan-300 mb-3">Key Responsibilities</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    <span className="text-gray-300 text-sm">Full stack web development</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    <span className="text-gray-300 text-sm">Frontend development with React</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    <span className="text-gray-300 text-sm">Backend API development</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                    <span className="text-gray-300 text-sm">Database management</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-cyan-300 mb-3">Skills Gained</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-300 text-sm">Industry best practices</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-300 text-sm">Team collaboration</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-300 text-sm">Project management</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-gray-300 text-sm">Code optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
