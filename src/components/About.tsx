
import { User, MapPin, Mail, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Passionate about turning data into insights
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              I'm a dedicated Data Engineer with expertise in building robust data pipelines, 
              implementing ETL processes, and designing scalable data architectures. My passion 
              lies in transforming complex datasets into valuable business insights.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              With experience in cloud platforms, big data technologies, and machine learning 
              pipelines, I help organizations make data-driven decisions through reliable, 
              efficient, and scalable data solutions.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Data Engineer</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Remote</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Available</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Full-time</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl p-8 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=500&fit=crop"
                alt="Data Engineer at work"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              <div className="mt-6 text-center">
                <h4 className="text-xl font-semibold text-gray-800">Ready to collaborate</h4>
                <p className="text-gray-600 mt-2">Let's build something amazing together</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
