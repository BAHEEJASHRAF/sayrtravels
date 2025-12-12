import React from "react";

export default function ServiceCard({ title, points }) {
  return (
    <div className="group p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300 hover:translate-y-[-4px]">
      <h3 className="text-xl font-bold text-gray-900 group-hover:text-sky-600 transition-colors">{title}</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1 mt-3">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
