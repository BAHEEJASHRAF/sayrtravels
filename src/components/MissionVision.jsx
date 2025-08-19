const MissionVision = () => {
  return (
    <section id="mission-vision" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="bg-slate-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed text-center">
              "To simplify and enhance global access to world-class healthcare
              and rich travel experiences by providing ethical, seamless, and
              personalised solutions. We guide patients to trusted medical care,
              offer rejuvenating wellness retreats, and create memorable leisure
              and adventure journeys—delivering healing and exploration through
              one integrated platform."
            </p>
          </div>
          <div className="bg-slate-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed text-center">
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
