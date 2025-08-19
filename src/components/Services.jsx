const Services = () => {
  const services = [
    {
      title: 'Health Guidance',
      description: 'Receive expert guidance to navigate your healthcare options and choose the best path forward.',
    },
    {
      title: 'Travel & Medical Visa Services',
      description: 'We manage all the complexities of travel arrangements and medical visa processing for a stress-free experience.',
    },
    {
      title: 'Personalized Care in Your Language',
      description: 'We provide dedicated care and communication in your preferred language, including Arabic, English, Urdu, and more.',
    },
    {
      title: 'Accommodation & Local Transport',
      description: 'We arrange all accommodation and local transportation according to your needs, from the moment you arrive until you depart.',
    },
    {
      title: 'Priority Hospital Access',
      description: 'Through our partnerships with all major standard hospitals, we ensure a hassle-free and priority process for consultations, admissions, and discharge.',
    },
    {
      title: 'Translator Facilities',
      description: 'To ensure nothing is lost in translation, we provide professional interpreters for clear and proper exchange of information with your medical team.',
    },
    {
      title: 'Rejuvenating Tourism',
      description: 'We believe in healing the mind as well as the body. We can arrange visits to beautiful and serene tourist destinations to bring happiness and peace during your stay.',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Comprehensive Care for a Seamless Experience
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-teal-600 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
