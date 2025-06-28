
import { ChevronDown, Database, BarChart3, Code2, Linkedin, Github } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <div className="flex justify-center lg:justify-start space-x-4 mb-8">
              <Database className="w-12 h-12 text-blue-400 animate-pulse" />
              <BarChart3 className="w-12 h-12 text-teal-400 animate-pulse" />
              <Code2 className="w-12 h-12 text-purple-400 animate-pulse" />
            </div>
            
            <div className="mb-6">
              <p className="text-lg text-gray-300 mb-2">Hi all, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">
                Girish Najwani 👋
              </h1>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-200">
              Certified Data Engineer
            </h2>
            
            <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              A passionate Data Engineer 🚀 having 4 years of experience building and optimizing 
              scalable data pipelines using PySpark, Spark SQL, and distributed computing on AWS and Azure platforms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8">
              <button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                Contact Me
              </button>
              <button className="border-2 border-white/30 hover:border-white/60 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/10">
                Download Resume
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center lg:justify-start space-x-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-blue-600 p-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-gray-800 p-3 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Illustration Section */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-96 h-96">
              {/* Cloud elements */}
              <div className="absolute top-10 left-10 w-16 h-8 bg-purple-200 rounded-full opacity-80"></div>
              <div className="absolute top-20 right-16 w-20 h-10 bg-blue-200 rounded-full opacity-80"></div>
              <div className="absolute bottom-20 left-8 w-18 h-9 bg-teal-200 rounded-full opacity-80"></div>
              
              {/* Central circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-blue-400 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-teal-400 rounded-full"></div>
              
              {/* Character illustration */}
              <div className="absolute bottom-0 right-8">
                <div className="w-24 h-32 bg-gradient-to-b from-blue-600 to-purple-600 rounded-t-full relative">
                  {/* Head */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-yellow-300 rounded-full"></div>
                  {/* Arms */}
                  <div className="absolute top-4 -left-3 w-6 h-16 bg-yellow-300 rounded-full transform rotate-45"></div>
                  <div className="absolute top-4 -right-3 w-6 h-16 bg-yellow-300 rounded-full transform -rotate-45"></div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-8 right-8 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute bottom-8 left-12 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:text-blue-400 transition-colors"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
