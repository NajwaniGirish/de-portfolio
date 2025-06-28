
import { User, MapPin, Mail, Calendar, Award, GraduationCap } from 'lucide-react';

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
              Certified Data Engineer with proven expertise
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              I'm a Certified Data Engineer with 4 years of experience building and optimizing 
              scalable data pipelines using PySpark, Spark SQL, and distributed computing. 
              Skilled in ETL development, Spark performance tuning, and cloud platforms like AWS and Azure.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              I have a proven track record of delivering high-quality, production-ready data solutions 
              in cross-functional environments. Currently working at ZS Associates, where I've optimized 
              processes reducing runtime by 70% and managed teams to deliver impactful data engineering projects.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="w-6 h-6 text-blue-600" />
                <h4 className="text-lg font-semibold text-gray-800">Certifications</h4>
              </div>
              <p className="text-gray-700">Databricks Certified Data Engineer Associate</p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <GraduationCap className="w-6 h-6 text-green-600" />
                <h4 className="text-lg font-semibold text-gray-800">Education</h4>
              </div>
              <p className="text-gray-700 font-medium">B.Tech in Information Technology</p>
              <p className="text-gray-600">Northern India Engineering College, GGSIPU University Delhi</p>
              <p className="text-gray-600">CGPA: 8.51/10 (2018-2021)</p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Data Engineer</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Pune, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">Available</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">4+ Years Exp</span>
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
                <p className="text-gray-600 mt-2">Let's build scalable data solutions together</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
