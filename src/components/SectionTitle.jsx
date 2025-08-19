import React from "react";

export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-gray-600 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
