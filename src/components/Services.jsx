import './Services.css';

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
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <h2 className="services-title">
            Comprehensive Care for a Seamless Experience
          </h2>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;