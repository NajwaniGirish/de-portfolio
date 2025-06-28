
import { Award } from 'lucide-react';

const Certifications = () => {
  return (
    <section id="certifications" className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800">Professional Certifications</h3>
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

export default Certifications;
