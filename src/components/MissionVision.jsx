import './MissionVision.css';

const MissionVision = () => {
  return (
    <section id="mission-vision" className="mission-vision">
      <div className="container">
        <div className="mission-vision-grid">
          <div className="card">
            <h3 className="card-title">Our Mission</h3>
            <p className="card-text">
              "To simplify and enhance global access to world-class healthcare
              and rich travel experiences by providing ethical, seamless, and
              personalised solutions. We guide patients to trusted medical care,
              offer rejuvenating wellness retreats, and create memorable leisure
              and adventure journeys—delivering healing and exploration through
              one integrated platform."
            </p>
          </div>
          <div className="card">
            <h3 className="card-title">Our Vision</h3>
            <p className="card-text">
              "To become a leading global Travel and medical consultancy
              recognised for transforming patient journeys by integrating
              trusted medical expertise, compassionate care, and seamless
              travel solutions, making advanced healthcare accessible to
              everyone, everywhere."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;