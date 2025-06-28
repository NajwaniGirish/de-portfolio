
import { User, MapPin, Mail, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
              Hi, I'm Girish Najwani
            </h3>
            
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Certified Data Engineer with 4 years of experience building and optimizing 
              scalable data pipelines using PySpark, Spark SQL, and distributed computing. 
              Skilled in ETL development, Spark performance tuning, and cloud platforms like AWS and 
              Azure. Proven track record of delivering high-quality, production-ready data solutions 
              in cross-functional environments.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700 text-sm md:text-base">Data Engineer</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700 text-sm md:text-base">Pune, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700 text-sm md:text-base">Available</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700 text-sm md:text-base">4+ Years Exp</span>
              </div>
            </div>
          </div>

          <div className="relative order-first md:order-last">
            <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl p-6 md:p-8 shadow-xl">
              <img
                src="/placeholder.svg"
                alt="Girish Najwani - Data Engineer"
                className="w-full h-48 md:h-64 lg:h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
