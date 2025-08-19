const Hero = () => {
  return (
    <section id="home" className="bg-white">
      <div className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight">
          SayrTravels
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-600">
          Where travels heal your Health.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-block bg-teal-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-teal-700 transition duration-300 transform hover:scale-105"
        >
          Plan Your Journey
        </a>
      </div>
    </section>
  );
};

export default Hero;
