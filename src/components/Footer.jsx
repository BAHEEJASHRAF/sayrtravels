import React from "react";

export default function Footer({ brandName = "Sayr Travels" }) {
  return (
    <footer className="border-t bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="font-bold text-lg">{brandName}</h2>
          <p className="mt-3 text-sm text-gray-600 max-w-sm">
            Compassionate guidance, trusted medical expertise, and seamless
            travel—designed for healing and exploration.
          </p>
        </div>
        <div className="text-sm">
          <h6 className="font-semibold">Quick Links</h6>
          <ul className="mt-3 space-y-2 text-gray-700">
            <li>
              <a href="#services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#wellness" className="hover:underline">
                Wellness & Tourism
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <h6 className="font-semibold">Disclaimer</h6>
          <p className="mt-3 text-gray-600">
            {brandName} is a facilitator and not a medical provider. Treatments
            are delivered by partner hospitals and licensed practitioners.
          </p>
        </div>
      </div>
      <div className="px-4 py-6 border-t text-center text-xs text-gray-500">
        © {new Date().getFullYear()} {brandName}. All rights reserved.
      </div>
    </footer>
  );
}
