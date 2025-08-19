import React from "react";
import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";

export default function Services() {
    const services = [
        {
            title: "Healthcare Guidance",
            points: [
                "Assistance choosing hospitals and doctors",
                "Ethical, transparent medical advice",
                "Support from diagnosis to recovery",
            ],
        },
        {
            title: "Medical & Travel Visa Support",
            points: [
                "End-to-end visa assistance for patients and companions",
                "Faster processing with documentation help",
            ],
        },
        {
            title: "Personalised Multilingual Care",
            points: [
                "Coordinators fluent in English, Arabic, Hindi, Urdu, and more",
                "24/7 assistance throughout your stay",
            ],
        },
        {
            title: "Hospital Partnerships",
            points: [
                "Priority consultations with multispecialty hospitals",
                "Streamlined admission and discharge process",
            ],
        },
        {
            title: "Accommodation & Transport",
            points: [
                "Comfortable stays for every budget",
                "Airport transfers and local travel",
                "Hotel booking and complete stay arrangements",
            ],
        },

        {
            title: "Wellness & Rejuvenation",
            points: [
                "Authentic Ayurveda, yoga, spa therapies",
                "Recovery-focused programs for body and mind",
            ],
        },
        {
            title: "Medical + Tourism Packages",
            points: [
                "Curated healthcare + leisure plans in Kerala and India",
                "Sightseeing, cultural tours, and retreats",
            ],
        },
        {
            title: "Translator & Patient Support",
            points: [
                "Professional interpreters for doctor–patient communication",
                "On-ground support for scheduling and paperwork",
            ],
        },
    ];

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
