const WhyKerala = () => {
  return (
    <section id="why-kerala" className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Kerala: The World's Destination for Health and Wellness
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              The answer to where one can find world-class, affordable
              healthcare is Kerala—a beautiful state in South India, often
              called "God's Own Country". Kerala has gained international
              acclaim, including from the World Health Organization, for having
              some of the best health indicators in the world.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The state is home to numerous multi-specialty hospitals equipped
              with state-of-the-art facilities and the country's best
              specialist doctors, all offering the highest standard of care.
              Furthermore, Kerala is the global home of Ayurveda, one of the
              oldest and most respected natural treatment modalities in the
              world. You will find a wide array of world-class facilities for
              authentic Ayurvedic treatments and rejuvenation therapies.
            </p>
          </div>
          <div>
            {/* Placeholder for an image of Kerala */} 
            <div className="bg-teal-500 h-80 rounded-lg shadow-lg flex items-center justify-center">
                <span className="text-white text-2xl">Image of Kerala</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyKerala;
