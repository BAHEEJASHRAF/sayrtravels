import React from "react";
import SectionTitle from "./SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {

  return (
    <section id="contact" className="py-20 border-t bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle
          title="Contact Us"
          subtitle="Tell us your treatment needs and travel preferences."
        />
        <div className="flex justify-center">
          {/* Contact Info */}
          <div className="w-full max-w-lg p-8 rounded-2xl border bg-white shadow-sm">
            <h4 className="text-xl font-bold mb-6 text-gray-900">Contact Details</h4>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <a href="tel:+919400960166" className="font-medium hover:text-blue-600 transition-colors">94009 60166</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <a href="mailto:sayrtravels.in@gmail.com" className="font-medium hover:text-blue-600 transition-colors">sayrtravels.in@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <span className="font-medium">Kerala, India</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                  <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
                </div>
                <a href="https://wa.me/919400960166" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-green-700 transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pink-50 text-pink-500 flex items-center justify-center">
                  <FontAwesomeIcon icon={faInstagram} className="text-lg" />
                </div>
                <a href="https://www.instagram.com/sayrtravels?igsh=MXNibmVyZnhwY2E2MA==" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-pink-600 transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
