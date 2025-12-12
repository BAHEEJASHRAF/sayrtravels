import React, { useState } from 'react';

export default function EnquiryForm({ isOpen, onClose }) {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        country: '',
        concern: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Google Form Configuration
        const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSedHbqUG5n60tyTxDyqY-DXimVCwchbGaj7MBhQ7jrsCoOG6Q/formResponse";

        // Mapping form fields to Google Form Entry IDs
        const formBody = new FormData();
        formBody.append("entry.279867625", formData.name);
        formBody.append("entry.388284468", formData.email);
        formBody.append("entry.152275669", formData.mobile);
        formBody.append("entry.1439156857", formData.country);
        formBody.append("entry.530992765", formData.concern);

        try {
            await fetch(GOOGLE_FORM_ACTION_URL, {
                method: "POST",
                mode: "no-cors", // Essential for bypassing CORS restriction on Google Forms
                body: formBody
            });

            alert("Thank you! Your enquiry has been sent. We will contact you shortly.");

            // Reset form
            setFormData({
                name: '',
                email: '',
                mobile: '',
                country: '',
                concern: ''
            });
            onClose();

        } catch (error) {
            console.error("Submission Error:", error);
            alert("Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const countries = [
        "India", "United Arab Emirates", "Saudi Arabia", "Qatar", "Oman",
        "Kuwait", "Bahrain", "Bangladesh", "United States", "United Kingdom",
        "Canada", "Australia", "Other"
    ];

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal Card */}
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in-up">
                {/* Header */}
                <div className="bg-gray-900 px-6 py-4 flex justify-between items-center text-white">
                    <h3 className="text-xl font-bold">Health Enquiry</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Form Body */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                        <input
                            type="tel"
                            name="mobile"
                            required
                            value={formData.mobile}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            placeholder="+91 XXXXX XXXXX"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Select Country</label>
                        <select
                            name="country"
                            required
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
                        >
                            <option value="">-- Select Country --</option>
                            {countries.map(c => (
                                <option key={c} value={c}>{c}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Describe Your Medical Concern</label>
                        <textarea
                            name="concern"
                            required
                            rows="3"
                            value={formData.concern}
                            onChange={handleChange}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                            placeholder="Briefly describe your condition or requirements..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-3 px-4 text-white font-bold rounded-lg shadow-lg transition-all ${isSubmitting
                                ? 'bg-gray-400 cursor-not-allowed'
                                : 'bg-blue-600 hover:bg-blue-700 hover:shadow-xl hover:-translate-y-0.5'
                            }`}
                    >
                        {isSubmitting ? "Sending..." : "Submit Enquiry"}
                    </button>

                    <p className="text-xs text-center text-gray-500 mt-4">
                        Your information is safe with us. We will contact you shortly.
                    </p>
                </form>
            </div>
        </div>
    );
}
