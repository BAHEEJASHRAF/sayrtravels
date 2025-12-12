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

import MedInfo from "./components/MedInfo";

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
      title: "SayrMed",
      subtitle: "Your Trusted partner for global healthcare. India & Dubai’s Leading Medical Tourism Facilitator."
    },
    about: {
      title: "About Sayr Med",
      subtitle: "Your Trusted partner for global healthcare / شريكك الموثوق للرعاية الصحية العالمية",
      cards: [
        {
          title: "Global Standards / معايير عالمية",
          text: "India offers international-standard treatment at nearly one-tenth of the global cost. / توفر الهند رعاية بمعايير دولية وبأسعار أقل بكثير."
        },
        {
          title: "Seamless Journey / رحلة سلسة",
          text: "We connect you with trusted hospitals and ensure a hassle-free journey. / نقوم بربطكم بأفضل المستشفيات ونضمن رحلة علاجية مريحة."
        }
      ]
    },
    medInfo: {
      india: {
        reasons: [
          "JCI-accredited hospitals equipped with cutting-edge technologies",
          "Highly qualified doctors with international training and expertise",
          "70–80% cost savings on major medical procedures",
          "English-speaking medical staff for smooth communication"
        ],
        destinations: [
          "Kerala", "Hyderabad", "Bangalore", "Chennai", "Delhi", "Mumbai"
        ]
      },
      dubai: {
        reasons: [
          "State-of-the-art medical infrastructure",
          "Leading specialists from around the world",
          "Premium healthcare combined with hospitality excellence",
          "Strategic global location connecting the East & West",
          "Expertise in Cosmetic Surgery, Fertility Treatments, Advanced Diagnostics",
          "Luxury recovery and wellness options",
          "Medical tourism-friendly visa services",
          "Multilingual healthcare teams"
        ]
      }
    },
    services: [
      {
        title: "End-to-end Facilitation / تسهيل طبي شامل",
        points: [
          "Complete medical facilitation and accompaniment",
          "تسهيل طبي شامل ومرافقة في كل خطوة"
        ]
      },
      {
        title: "Visa Assistance / مساعدة التأشيرة",
        points: [
          "Visa assistance and documentation support",
          "مساعدة في التأشيرات وجميع المستندات"
        ]
      },
      {
        title: "Wellness & Tours / رحلات استشفائية",
        points: [
          "Wellness, yoga, and Kerala heritage tours",
          "رحلات استشفائية تشمل اليوغا وتجارب كيرالا"
        ]
      },
      {
        title: "Personalised Care / عناية شخصية",
        points: [
          "Care in your language (Arabic, English, Urdu, etc.)",
          "عناية شخصية بلغتك (العربية، الإنجليزية، الأوردو)"
        ]
      },
      {
        title: "Translation & Guide / مترجم ومرافقة",
        points: [
          "Dedicated translator and personal guide",
          "مترجم ومرافق شخصي لضمان تواصل واضح"
        ]
      },
      {
        title: "Trusted Partners / شركاء موثوقون",
        points: [
          "Partnership with accredited hospitals and wellness centres",
          "شراكات مع مستشفيات ومراكز عافية معتمدة"
        ]
      }
    ],
    whyChooseUs: {
      title: "Why Choose Sayr Med",
      reasons: [
        {
          title: "Doctor Selection & Planning",
          description: "Our team will help you with doctor selection, consultation booking, and treatment planning."
        },
        {
          title: "Visa & Travel Guidance",
          description: "Smooth documentation support for medical visas and travel requirements."
        },
        {
          title: "Flight & Accommodation Booking",
          description: "Affordable and premium options tailored to your comfort."
        },
        {
          title: "Airport Pickup & Transfers",
          description: "Safe and reliable transportation from arrival to departure."
        },
        {
          title: "Local Support & Concierge Assistance",
          description: "24/7 assistance to make your stay stress-free and comfortable."
        }
      ]
    }
  }
};

export default function App() {
  const [activeVertical, setActiveVertical] = useState('med'); // 'travels' | 'med'
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
      {activeVertical === 'med' && content.medInfo && (
        <MedInfo india={content.medInfo.india} dubai={content.medInfo.dubai} />
      )}
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
