import React from "react";
import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";

export default function Services({ services = [] }) {
    // Default services if none provided (could also remain as internal const if not passed, 
    // but for vertical toggling, we want to control this from parent)

    // NOTE: If services prop is empty and we want to fallback to defaults, we could do so here, 
    // but better to pass the data explicitly from App.jsx for both verticals.

    return (
        <section id="services" className="py-20 border-t">
            <div className="max-w-7xl mx-auto px-4">
                <SectionTitle
                    title="Our Services"
                    subtitle="Trusted healthcare guidance paired with end-to-end travel support."
                />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((s, i) => (
                        <ServiceCard key={i} title={s.title} points={s.points} />
                    ))}
                </div>
            </div>
        </section>
    );
}
