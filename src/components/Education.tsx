
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Education */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-green-100 p-3 rounded-lg">
                <GraduationCap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Education</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-gray-800">B.Tech in Information Technology</h4>
                <p className="text-gray-600 font-medium">Northern India Engineering College</p>
                <p className="text-gray-600">GGSIPU University Delhi</p>
                <p className="text-gray-600">June 2018 - June 2021</p>
                <p className="text-blue-600 font-semibold mt-2">CGPA: 8.51/10</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800">Databricks Certified Data Engineer Associate</h4>
                <p className="text-gray-600 mt-2">Professional certification demonstrating expertise in data engineering using Databricks platform</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
