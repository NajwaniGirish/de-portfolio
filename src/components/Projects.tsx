
import { ExternalLink, Github, Code2, TrendingUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "State Guess Quiz Game",
      description: "Developed using Python and Tkinter with real-time score updates and interactive learning.",
      technologies: ["Python", "Tkinter", "GUI Development"],
      github: "#",
      live: "#",
      icon: Code2
    },
    {
      title: "Kaggle Case Studies Portfolio",
      description: "10+ case studies covering EDA, statistical analysis, and hypothesis testing across diverse industries.",
      technologies: ["Python", "Pandas", "Matplotlib", "Statistical Analysis"],
      github: "#",
      live: "#",
      icon: TrendingUp
    }
  ];

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Personal projects and coursework demonstrating technical skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-blue-50 p-2 rounded-lg">
                    <project.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors text-sm"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors text-sm"
                  >
                    <ExternalLink size={16} />
                    <span>Details</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
