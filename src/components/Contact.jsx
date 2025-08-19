import React, { useState } from "react";
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
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    treatment: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Inquiry submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", treatment: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 border-t bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <SectionTitle
          title="Contact Us"
          subtitle="Tell us your treatment needs and travel preferences."
        />
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form
            onSubmit={onSubmit}
            className="p-6 rounded-2xl border bg-gray-50 space-y-4"
          >
            {/* form fields unchanged... */}
          </form>

          {/* Contact Info */}
          <div className="p-6 rounded-2xl border bg-white">
            <h4 className="text-lg font-semibold">Contact Details</h4>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPhone} className="text-gray-700" />
                +91 00000 00000
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} className="text-gray-700" />
                hello@sayrtravels.in
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faLocationDot} className="text-gray-700" />
                Kerala, India
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faWhatsapp} className="text-green-600 text-xl" />
                <a href="https://wa.me/9194009601666" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FontAwesomeIcon icon={faInstagram} className="text-pink-500 text-xl" />
                <a href="https://instagram.com/sayrtravels.in" target="_blank" rel="noopener noreferrer">
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
