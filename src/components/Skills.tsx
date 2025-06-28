
import { Database, Cloud, Code, BarChart3, Settings, Brain } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Processing",
      icon: Database,
      skills: ["Apache Spark", "Kafka", "Airflow", "Pandas", "PySpark"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Cloud Platforms",
      icon: Cloud,
      skills: ["AWS", "Google Cloud", "Azure", "Snowflake", "Databricks"],
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "Programming",
      icon: Code,
      skills: ["Python", "SQL", "Scala", "Java", "R"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Analytics",
      icon: BarChart3,
      skills: ["Tableau", "Power BI", "Looker", "Jupyter", "MLflow"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Infrastructure",
      icon: Settings,
      skills: ["Docker", "Kubernetes", "Terraform", "Jenkins", "Git"],
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Machine Learning",
      icon: Brain,
      skills: ["Scikit-learn", "TensorFlow", "PyTorch", "XGBoost", "AutoML"],
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for modern data engineering challenges
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="bg-gray-50 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors cursor-default"
                    style={{
                      animationDelay: `${index * 100 + skillIndex * 50}ms`
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
