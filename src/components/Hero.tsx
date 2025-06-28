
import { ChevronDown, Database, BarChart3, Code2 } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="flex justify-center space-x-4 mb-8">
            <Database className="w-12 h-12 text-blue-400 animate-pulse" />
            <BarChart3 className="w-12 h-12 text-teal-400 animate-pulse" />
            <Code2 className="w-12 h-12 text-purple-400 animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">
            Girish Najwani
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-200">
            Certified Data Engineer
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
            4 years of experience building and optimizing scalable data pipelines using PySpark, 
            Spark SQL, and distributed computing on AWS and Azure platforms
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl">
              View My Work
            </button>
            <button className="border-2 border-white/30 hover:border-white/60 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/10">
              Download Resume
            </button>
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
