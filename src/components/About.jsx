import React from "react";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="about" className="py-20 border-t bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <SectionTitle
          title="About Sayr Travels"
          subtitle="Compassionate guidance, trusted care, and seamless travel—on one integrated platform."
        />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-2xl border bg-gray-50">
            <h3 className="text-xl font-semibold text-gray-900">Mission</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              To simplify and enhance global access to world-class healthcare
              and rich travel experiences by providing ethical, seamless, and
              personalised solutions.
            </p>
          </div>
          <div className="p-6 rounded-2xl border bg-gray-50">
            <h3 className="text-xl font-semibold text-gray-900">Vision</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              To become a leading global travel and medical consultancy
              recognised for transforming patient journeys with trusted medical
              expertise and seamless travel solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
