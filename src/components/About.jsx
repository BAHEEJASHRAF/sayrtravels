import React from "react";
import SectionTitle from "./SectionTitle";

export default function About({
  title = "About Sayr Travels",
  subtitle = "Compassionate guidance, trusted care, and seamless travel—on one integrated platform.",
  cards = [
    {
      title: "Mission",
      text: "To simplify and enhance global access to world-class healthcare and rich travel experiences by providing ethical, seamless, and personalised solutions."
    },
    {
      title: "Vision",
      text: "To become a leading global travel and medical consultancy recognised for transforming patient journeys with trusted medical expertise and seamless travel solutions."
    }
  ]
}) {
  return (
    <section id="about" className="py-20 border-t bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <SectionTitle
          title={title}
          subtitle={subtitle}
        />
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="p-6 rounded-2xl border bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-900">{card.title}</h3>
              <p className="mt-3 text-gray-700 leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
