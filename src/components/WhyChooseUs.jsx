import React from "react";
import trust from "../assets/trust.jpg";

export default function WhyChooseUs({
  title = "Why Choose Sayr Travels",
  reasons = [
    "Transparent, ethical guidance",
    "Multilingual patient support",
    "Priority hospital access",
    "End-to-end care coordination",
    "Healing + leisure in one journey",
  ]
}) {
  return (
    <section
      id="why"
      style={{ backgroundImage: `url(${trust})` }}
      className="min-h-[60vh] py-20 flex flex-col justify-center items-center bg-cover bg-center relative"
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-xl md:backdrop-blur-none"></div>

      <div className="relative max-w-6xl mx-auto px-4 text-center text-white">
        {/* Title + Subtitle directly here */}
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
        <p className="mt-2 text-lg text-gray-200">
          Your trusted partner in health and travel
        </p>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mt-10">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl border bg-white/80 backdrop-blur-md text-gray-900 text-center shadow-md flex flex-col justify-center items-center"
            >
              {typeof r === 'string' ? (
                <span className="font-medium">{r}</span>
              ) : (
                <>
                  <h4 className="font-bold text-lg mb-2 leading-tight">{r.title}</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">{r.description}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
