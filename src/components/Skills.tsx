
import { Code, Database, Cloud, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["PySpark", "Python (Pandas, NumPy, Matplotlib)", "SQL", "Spark-SQL", "Hive"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Big Data & Tools",
      icon: Database,
      skills: ["Apache Spark", "Databricks", "Airflow", "AWS EMR", "Viva Nitro"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS S3", "Azure DevOps"],
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "Other Tools",
      icon: Settings,
      skills: ["Excel (Advanced)", "JIRA"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mb-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                <category.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-white">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="bg-white/20 rounded-lg px-3 py-1 text-sm font-medium text-white hover:bg-white/30 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
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
