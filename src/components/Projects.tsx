
import { ExternalLink, Github, Database, Cloud, BarChart3 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Real-time Data Pipeline for Pharmaceutical Analytics",
      description: "Built a scalable data pipeline processing multi-terabyte pharmaceutical data using PySpark and Azure cloud services. Implemented real-time data ingestion, transformation, and analytics for drug discovery insights.",
      technologies: ["PySpark", "Azure Data Factory", "Databricks", "Azure Synapse", "Delta Lake"],
      icon: <Database className="w-6 h-6" />,
      gradient: "from-blue-500 to-blue-600",
      metrics: ["70% reduction in processing time", "Multi-TB data processing", "Real-time analytics"]
    },
    {
      title: "ETL Optimization Framework",
      description: "Developed a comprehensive ETL framework that reduced data processing time by 70% and improved resource utilization. Implemented automated data quality checks and monitoring systems.",
      technologies: ["Python", "Apache Airflow", "Spark SQL", "Azure DevOps", "Monitoring"],
      icon: <BarChart3 className="w-6 h-6" />,
      gradient: "from-green-500 to-green-600",
      metrics: ["70% performance improvement", "Automated quality checks", "Resource optimization"]
    },
    {
      title: "Cloud Data Lake Architecture",
      description: "Designed and implemented a modern data lake architecture on Azure cloud platform, enabling efficient storage and processing of structured and unstructured data for Fortune 500 clients.",
      technologies: ["Azure Data Lake", "Azure Synapse", "Power BI", "Azure Security", "Data Governance"],
      icon: <Cloud className="w-6 h-6" />,
      gradient: "from-purple-500 to-purple-600",
      metrics: ["Fortune 500 client", "Petabyte-scale storage", "Enhanced security"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcase of impactful data engineering projects delivering scalable solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white dark:bg-slate-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${project.gradient} text-white mb-4`}>
                {project.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-100 dark:bg-slate-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="space-y-2 mb-6">
                {project.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-600 dark:text-gray-300 text-sm">{metric}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex space-x-3">
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                  <ExternalLink size={16} />
                  <span className="text-sm">View Details</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors">
                  <Github size={16} />
                  <span className="text-sm">Code</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
