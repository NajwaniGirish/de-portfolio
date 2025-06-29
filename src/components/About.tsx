
const About = () => {
  return (
    <section id="about" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Certified Data Engineer with 4 years of experience building and optimizing 
              scalable data pipelines using PySpark, Spark SQL, and distributed computing. 
              Skilled in ETL development, Spark performance tuning, and cloud platforms like AWS and 
              Azure. Proven track record of delivering high-quality, production-ready data solutions 
              in cross-functional environments.
            </p>
          </div>

          <div className="relative order-first md:order-last">
            <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl p-6 md:p-8 shadow-xl">
              <img
                src="/lovable-uploads/06624105-b52b-4aaa-bf6e-1d01a6723894.png"
                alt="Girish Najwani - Data Engineer"
                className="w-full h-48 md:h-64 lg:h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
