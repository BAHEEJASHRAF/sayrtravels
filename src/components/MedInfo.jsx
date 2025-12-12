import React from "react";
import SectionTitle from "./SectionTitle";

export default function MedInfo({ india, dubai }) {
    return (
        <section className="py-20 border-t bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <SectionTitle
                    title="Top Medical Destinations"
                    subtitle="World-class healthcare hubs in India and Dubai."
                />

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* India Section */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-blue-50 hover:border-blue-100 transition-colors">
                        <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-3">
                            {/* India Flag Gradient: Saffron, White, Green */}
                            <span className="w-8 h-1 bg-gradient-to-r from-orange-500 via-white to-green-600 border border-gray-100 rounded-full"></span>
                            India
                        </h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            A leading destination for global healthcare, offering international standards
                            at affordable costs.
                        </p>

                        <h4 className="font-bold text-lg text-gray-900 mb-4">Why Choose India?</h4>
                        <ul className="space-y-3 text-gray-700 mb-8">
                            {india.reasons.map((r, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-teal-500 shrink-0"></span>
                                    <span>{r}</span>
                                </li>
                            ))}
                        </ul>

                        <h4 className="font-bold text-lg text-gray-900 mb-4">Top Destinations</h4>
                        <div className="flex flex-wrap gap-2">
                            {india.destinations.map((city, i) => (
                                <span key={i} className="px-4 py-1.5 bg-blue-50 text-blue-700 border border-blue-100 rounded-full text-sm font-semibold hover:bg-blue-100 transition-colors">
                                    {city}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Dubai Section */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-amber-50 hover:border-amber-100 transition-colors">
                        <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-3">
                            {/* UAE Flag Gradient: Red, Green, White, Black - simplified as linear gradient */}
                            <span className="w-8 h-1 bg-gradient-to-r from-red-600 via-green-600 to-black rounded-full"></span>
                            Dubai
                        </h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            A trusted global medical destination known for world-class healthcare systems
                            and hospitality excellence.
                        </p>

                        <h4 className="font-bold text-lg text-gray-900 mb-4">Why Choose Dubai?</h4>
                        <ul className="space-y-3 text-gray-700">
                            {dubai.reasons.map((r, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-amber-500 shrink-0"></span>
                                    <span>{r}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section >
    );
}
