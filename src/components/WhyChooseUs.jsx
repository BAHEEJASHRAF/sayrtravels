import React from "react";
import SectionTitle from "./SectionTitle";

export default function WhyChooseUs() {
  const reasons = [
    "Transparent, ethical guidance",
    "Multilingual patient support",
    "Priority hospital access",
    "End-to-end care coordination",
    "Healing + leisure in one journey",
  ];

  return (
    <section id="why" className="py-20 border-t">
      <div className="max-w-6xl mx-auto px-4">
        <SectionTitle title="Why Choose Sayr Travels" />
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl border bg-white text-gray-700 text-center"
            >
              {r}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
