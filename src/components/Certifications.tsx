
import { Award, Calendar, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Microsoft Certified: Azure Data Engineer Associate",
      issuer: "Microsoft",
      date: "2023",
      credentialId: "ABC123XYZ",
      description: "Expertise in designing and implementing data solutions on Microsoft Azure platform, including data storage, data processing, and data security.",
      skills: ["Azure Data Factory", "Azure Synapse Analytics", "Azure Databricks", "Data Lake Storage"]
    },
    {
      title: "Databricks Certified Associate Developer for Apache Spark",
      issuer: "Databricks",
      date: "2022",
      credentialId: "DBX456DEF",
      description: "Proficiency in Apache Spark development, including DataFrame API, Spark SQL, and performance optimization techniques.",
      skills: ["Apache Spark", "PySpark", "Spark SQL", "Performance Tuning"]
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto grid gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-50 dark:bg-slate-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-3 rounded-lg text-white flex-shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1">
                        {cert.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 font-medium">{cert.issuer}</p>
                    </div>
                    <div className="flex items-center space-x-1 text-blue-600 font-medium">
                      <Calendar size={16} />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Credential ID: {cert.credentialId}
                    </span>
                    <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 transition-colors">
                      <span>Verify</span>
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
