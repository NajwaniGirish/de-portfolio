
import { Building, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Data Engineer",
      company: "TechCorp Analytics",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: [
        "Lead the design and implementation of data pipelines processing 10TB+ daily",
        "Migrated legacy ETL processes to cloud-native solutions, reducing processing time by 70%",
        "Mentored junior engineers and established data engineering best practices"
      ],
      technologies: ["Apache Spark", "AWS", "Python", "Kubernetes", "Terraform"]
    },
    {
      title: "Data Engineer",
      company: "DataFlow Solutions",
      location: "Austin, TX",
      period: "2020 - 2022",
      description: [
        "Built real-time streaming data pipelines using Apache Kafka and Spark Streaming",
        "Developed automated data quality monitoring systems reducing data issues by 85%",
        "Collaborated with data scientists to optimize ML model training pipelines"
      ],
      technologies: ["Kafka", "Spark", "Python", "Docker", "Airflow"]
    },
    {
      title: "Junior Data Analyst",
      company: "StartupData Inc",
      location: "Remote",
      period: "2019 - 2020",
      description: [
        "Created ETL processes for customer data integration from multiple sources",
        "Built interactive dashboards for business stakeholders using Tableau",
        "Performed data analysis to identify customer behavior patterns"
      ],
      technologies: ["SQL", "Python", "Tableau", "PostgreSQL", "Git"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A journey of growth in data engineering and analytics
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-teal-600"></div>

            {experiences.map((experience, index) => (
              <div key={experience.title} className="relative mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full border-4 border-white shadow-lg"></div>

                <div className="ml-20 bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">
                        {experience.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Building size={16} />
                          <span className="font-medium">{experience.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-blue-600 font-medium mt-2 md:mt-0">
                      <Calendar size={16} />
                      <span>{experience.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {experience.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-600 leading-relaxed flex items-start">
                        <span className="text-blue-600 mr-2 mt-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
