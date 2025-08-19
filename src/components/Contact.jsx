import React, { useState } from "react";
import SectionTitle from "./SectionTitle";

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
          <form
            onSubmit={onSubmit}
            className="p-6 rounded-2xl border bg-gray-50 space-y-4"
          >
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1 w-full rounded-lg border px-3 py-2 bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 w-full rounded-lg border px-3 py-2 bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="mt-1 w-full rounded-lg border px-3 py-2 bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Treatment Required</label>
              <input
                type="text"
                value={form.treatment}
                onChange={(e) => setForm({ ...form, treatment: e.target.value })}
                className="mt-1 w-full rounded-lg border px-3 py-2 bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1 w-full rounded-lg border px-3 py-2 bg-white"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-gray-900 text-white py-3 font-medium"
            >
              Submit Inquiry
            </button>
            {submitted && (
              <p className="text-green-700 text-sm mt-2">
                Thank you! We will contact you soon.
              </p>
            )}
          </form>

          <div className="p-6 rounded-2xl border bg-white">
            <h4 className="text-lg font-semibold">Contact Details</h4>
            <ul className="mt-4 space-y-3 text-gray-700">
              <li>📞 +91 00000 00000</li>
              <li>✉️ hello@sayrtravels.in</li>
              <li>📍 Kerala, India</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
