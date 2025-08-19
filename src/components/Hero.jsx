import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content-container">
        <h1 className="hero-title">SayrTravels</h1>
        <p className="hero-tagline">Where travels heal your Health.</p>
        <a href="#contact" className="hero-cta-button">
          Plan Your Journey
        </a>
      </div>
    </section>
  );
};

export default Hero;
