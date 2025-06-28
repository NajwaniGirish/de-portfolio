
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-green-100 p-3 rounded-lg">
                <GraduationCap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800">Education</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-lg md:text-xl font-semibold text-gray-800">B.Tech in Information Technology</h4>
                <p className="text-gray-600 font-medium">Northern India Engineering College</p>
                <p className="text-gray-600">GGSIPU University Delhi</p>
                <p className="text-gray-600">June 2018 - June 2021</p>
                <p className="text-blue-600 font-semibold mt-2">CGPA: 8.51/10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
