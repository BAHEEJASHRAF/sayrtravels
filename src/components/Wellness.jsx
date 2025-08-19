import React from "react";
import SectionTitle from "./SectionTitle";
import wellness01 from "../assets/wellness01.jpg";
import wellness02 from "../assets/wellness02.jpg";

export default function Wellness() {
  return (
    <section id="wellness" className="py-20 border-t bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionTitle
          title="Wellness & Tourism"
          subtitle="Healing beyond hospitals: Ayurveda, yoga, spa, and curated travel in Kerala."
        />
        <div className="grid lg:grid-cols-1 gap-6">
          {/* Ayurveda & Rejuvenation */}
          <div className="p-6 rounded-2xl  border bg-gray-50">
            <img
              src={wellness01}
              alt="Ayurveda & Rejuvenation"
              className="rounded-xl mb-4 w-full h-48 md:h-[50vh] object-cover"
            />
            <h4 className="text-lg font-semibold">Ayurveda & Rejuvenation</h4>
            <p className="mt-2 text-gray-700">
              Authentic therapies and recovery-focused programs for mind and body.
            </p>
          </div>

          {/* Leisure & Adventure Trips */}
          <div className="p-6 rounded-2xl border  bg-gray-50">
            <img
              src={wellness02}
              alt="Leisure & Adventure Trips"
              className="rounded-xl mb-4 w-full h-48 md:h-[50vh] object-cover"
            />
            <h4 className="text-lg font-semibold">Leisure & Adventure Trips</h4>
            <p className="mt-2 text-gray-700">
              Explore Kerala’s backwaters, beaches, and hill stations, with exciting
              adventure and cultural experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
