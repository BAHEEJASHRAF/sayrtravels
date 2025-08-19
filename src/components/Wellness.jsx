import React from "react";
import SectionTitle from "./SectionTitle";

export default function Wellness() {
  return (
    <section id="wellness" className="py-20 border-t bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          title="Wellness & Tourism"
          subtitle="Healing beyond hospitals: Ayurveda, yoga, spa, and curated travel in Kerala."
        />
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border bg-gray-50">
            <h4 className="text-lg font-semibold">Ayurveda & Rejuvenation</h4>
            <p className="mt-2 text-gray-700">
              Authentic therapies and recovery-focused programs for mind and body.
            </p>
          </div>
          <div className="p-6 rounded-2xl border bg-gray-50">
            <h4 className="text-lg font-semibold">Cultural & Nature Tours</h4>
            <p className="mt-2 text-gray-700">
              Backwaters, beaches, hill stations, and heritage experiences.
            </p>
          </div>
          <div className="p-6 rounded-2xl border bg-gray-50">
            <h4 className="text-lg font-semibold">Patient-Friendly Itineraries</h4>
            <p className="mt-2 text-gray-700">
              Gentle pacing with rest, nutrition, and accessibility in mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
