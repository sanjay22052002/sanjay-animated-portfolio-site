
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent tracking-tight">
          Get In Touch
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white tracking-wide">Let's Connect</h3>
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                I'm always interested in discussing new opportunities, innovative projects, 
                and ways to bring creative ideas to life. Feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center group">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mr-4 group-hover:rotate-12 transition-transform duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-white tracking-wide">Email</h4>
                  <p className="text-gray-300 font-mono text-sm">sanjay@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mr-4 group-hover:rotate-12 transition-transform duration-300">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-white tracking-wide">Phone</h4>
                  <p className="text-gray-300 font-mono text-sm">+91 XXXXX XXXXX</p>
                </div>
              </div>
              
              <div className="flex items-center group">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mr-4 group-hover:rotate-12 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-white tracking-wide">Location</h4>
                  <p className="text-gray-300 font-light">Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 tracking-wide">
                    Name
                  </label>
                  <Input 
                    placeholder="Your Name" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 tracking-wide">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 tracking-wide">
                  Subject
                </label>
                <Input 
                  placeholder="Project Discussion" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 tracking-wide">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell me about your project..." 
                  rows={5}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-cyan-400 resize-none"
                />
              </div>
              
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium py-3 rounded-lg transition-all duration-300 transform hover:scale-105 group tracking-wide">
                <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-4 text-white tracking-wide">Ready to collaborate?</h3>
            <p className="text-gray-300 mb-6 font-light leading-relaxed">
              Let's create something amazing together. I'm excited to discuss your next project!
            </p>
            <div className="flex justify-center space-x-4">
              <div className="px-4 py-2 bg-white/10 rounded-full text-sm text-gray-300 font-light">
                Available for freelance
              </div>
              <div className="px-4 py-2 bg-white/10 rounded-full text-sm text-gray-300 font-light">
                Full-time opportunities
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
