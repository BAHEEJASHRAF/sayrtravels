
import React from "react";
import heroImg from "../assets/heroimg.jpg"; // import image

export default function Hero({
  title = "Where Travels Heal Your Health",
  subtitle = "Your trusted partner for global medical journeys, wellness retreats, and meaningful travel experiences.",
  onServicesClick,
  onEnquiryClick
}) {
  return (
    <section
      id="home"
      className="h-[80vh] flex flex-col justify-center items-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center text-white">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed">
            {subtitle}
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href="#services"
              className="px-5 py-3 rounded-xl bg-white text-gray-900 font-medium"
              onClick={onServicesClick}
            >
              Explore Services
            </a>
            <button
              onClick={onEnquiryClick}
              className="px-5 py-3 rounded-xl border font-medium bg-white/80 text-gray-900"
            >
              Get Started
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
