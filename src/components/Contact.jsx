import React from "react";
import SectionTitle from "./SectionTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
  faLinkedin,
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
            <div className="space-y-6 text-gray-700">

              {/* Phone Numbers */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-1">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold w-14 text-gray-900">IND:</span>
                    <a href="tel:+919400960166" className="hover:text-blue-600 transition-colors">+91 94009 60166</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold w-14 text-gray-900">UAE:</span>
                    <a href="tel:+971562757331" className="hover:text-blue-600 transition-colors">+971 56 275 7331</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold w-14 text-gray-900">OMAN:</span>
                    <a href="tel:+96878217214" className="hover:text-blue-600 transition-colors">+968 78 217 214</a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <a href="mailto:sayrtravels.in@gmail.com" className="hover:text-blue-600 transition-colors">sayrtravels.in@gmail.com</a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <span className="font-medium">Kerala, India</span>
              </div>

              {/* Divider */}
              <hr className="border-gray-300 border-t-2 my-6" />

              {/* Social Media Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <a
                  href="https://wa.me/919400960166"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2 px-4 rounded-full bg-green-50 text-green-700 hover:bg-green-100 transition-colors text-sm font-medium"
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                  WhatsApp
                </a>
                <a
                  href="https://www.instagram.com/sayrtravels"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2 px-4 rounded-full bg-pink-50 text-pink-600 hover:bg-pink-100 transition-colors text-sm font-medium"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/share/1DiaUZsM3z/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2 px-4 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors text-sm font-medium"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                  Facebook
                </a>
                <a
                  href="https://linkedin.com/company/sayrmed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2 px-4 rounded-full bg-blue-50 text-blue-800 hover:bg-blue-100 transition-colors text-sm font-medium"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                  LinkedIn
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
