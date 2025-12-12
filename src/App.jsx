import React, { useState } from "react";
import "./App.css"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Wellness from "./components/Wellness";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import EnquiryForm from "./components/EnquiryForm";

const DATA = {
  travels: {
    hero: {
      title: "Where Travels Heal Your Health",
      subtitle: "Your trusted partner for global medical journeys, wellness retreats, and meaningful travel experiences."
    },
    about: {
      title: "About Sayr Travels",
      subtitle: "Compassionate guidance, trusted care, and seamless travel—on one integrated platform.",
      cards: [
        {
          title: "Mission",
          text: "To simplify and enhance global access to world-class healthcare and rich travel experiences by providing ethical, seamless, and personalised solutions."
        },
        {
          title: "Vision",
          text: "To become a leading global travel and medical consultancy recognised for transforming patient journeys with trusted medical expertise and seamless travel solutions."
        }
      ]
    },
    services: [
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
    ]
  },
  med: {
    hero: {
      title: "Your Trusted Medical Facilitator in India",
      subtitle: "Connect to India's top healthcare facilities for world-class treatment and wellness. We're with you every step of the way."
    },
    about: {
      title: "About Sayr Med",
      subtitle: "Your Gateway to World-Class Healthcare in India.",
      cards: [
        {
          title: "Our Promise",
          text: "To connect you with the best medical minds and facilities in India, ensuring your journey to recovery is smooth, transparent, and worry-free."
        },
        {
          title: "Why India?",
          text: "India offers advanced medical treatments at a fraction of global costs, without compromising on quality or expertise. We make accessing this easy for you."
        }
      ]
    },
    services: [
      {
        title: "Online Consultation",
        points: [
          "Connect with top specialists remotely",
          "Get second opinions before you travel",
          "Easy scheduling and secure follow-ups"
        ]
      },
      {
        title: "Appointment Booking",
        points: [
          "Priority appointments with leading hospitals",
          "No waiting lines or administrative hassles",
          "Coordinated schedules aligned with your travel"
        ]
      },
      {
        title: "Medical Travel Planning",
        points: [
          "Complete itinerary management",
          "Visa assistance and travel logistics",
          "On-ground patient support and local guidance"
        ]
      }
    ],
    whyChooseUs: {
      title: "Why Choose Sayr Med",
      reasons: [
        "Trusted Hospital Network",
        "Expert Medical Opinions",
        "Seamless Travel & Care",
        "Affordable Treatment Plans",
        "24/7 Patient Support"
      ]
    }
  }
};

export default function App() {
  const [activeVertical, setActiveVertical] = useState('travels'); // 'travels' | 'med'
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const content = DATA[activeVertical];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar
        activeVertical={activeVertical}
        onToggleVertical={setActiveVertical}
        onEnquiryClick={() => setIsEnquiryOpen(true)}
      />
      <Hero
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        onServicesClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        onEnquiryClick={() => setIsEnquiryOpen(true)}
      />
      <About
        title={content.about.title}
        subtitle={content.about.subtitle}
        cards={content.about.cards}
      />
      <Services
        services={content.services}
      />
      <Wellness />
      <WhyChooseUs
        title={content.whyChooseUs?.title}
        reasons={content.whyChooseUs?.reasons}
      />
      <Contact />
      <Footer brandName={activeVertical === 'med' ? "Sayr Med" : "Sayr Travels"} />

      <EnquiryForm
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </div>
  );
}
