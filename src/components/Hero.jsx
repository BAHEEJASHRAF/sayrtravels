import React from "react";

export default function Hero() {
  return (
    <section id="home" className="bg-gray-50 h-[80vh] flex flex-col justify-center items-center">
      <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Where Travels Heal Your Health
          </h1>
          <p className="mt-5 text-lg text-gray-700 leading-relaxed">
            Your trusted partner for global medical journeys, wellness retreats,
            and meaningful travel experiences.
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href="#services"
              className="px-5 py-3 rounded-xl bg-gray-900 text-white font-medium"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="px-5 py-3 rounded-xl border font-medium bg-white"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="bg-gray-100 border rounded-3xl p-8 text-center">
          <h2 className="text-xl font-semibold">Start in Kerala, India</h2>
          <p className="mt-4 text-gray-600">
            Renowned for multispecialty care and authentic Ayurveda. Expand
            globally as partnerships grow.
          </p>
        </div>
      </div>
    </section>
  );
}
