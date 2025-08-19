import React from "react";

export default function ServiceCard({ title, points }) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-sm border">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1 mt-3">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
