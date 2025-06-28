
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to discuss your next data engineering project? Let's build something amazing together.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="space-y-8">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group justify-center">
                <div className="bg-blue-600 p-3 rounded-lg group-hover:bg-blue-700 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-gray-300">Email</p>
                  <a href="mailto:your.email@example.com" className="text-white hover:text-blue-400 transition-colors">
                    your.email@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group justify-center">
                <div className="bg-teal-600 p-3 rounded-lg group-hover:bg-teal-700 transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-gray-300">Phone</p>
                  <a href="tel:+1234567890" className="text-white hover:text-teal-400 transition-colors">
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 group justify-center">
                <div className="bg-purple-600 p-3 rounded-lg group-hover:bg-purple-700 transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-gray-300">Location</p>
                  <p className="text-white">Pune, India</p>
                </div>
              </div>
            </div>

            <div className="pt-8 text-center">
              <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  className="bg-white/10 hover:bg-blue-600 p-3 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="bg-white/10 hover:bg-gray-800 p-3 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
