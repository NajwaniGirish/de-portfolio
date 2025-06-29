
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Pune University",
      location: "Pune, India",
      period: "2017 - 2021",
      grade: "CGPA: 8.5/10",
      description: "Specialized in Data Structures, Algorithms, Database Management Systems, and Software Engineering principles."
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-white dark:bg-slate-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-3 rounded-lg text-white flex-shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {edu.degree}
                  </h3>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300 mb-2 md:mb-0">
                      <span className="font-medium">{edu.institution}</span>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-blue-600 font-medium">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">{edu.description}</p>
                  <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                    {edu.grade}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
