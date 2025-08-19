const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Get in Touch
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
          Ready to begin your journey to wellness? Contact us today for a free
          consultation. We are here to answer all your questions and help you
          plan your trip.
        </p>
        <div className="space-y-4 text-lg text-gray-700">
          <p>
            <strong>Email:</strong>
            <a
              href="mailto:contact@sayrtravels.com"
              className="ml-2 text-blue-500 hover:text-blue-600"
            >
              contact@sayrtravels.com
            </a>
            <span className="text-sm text-gray-500"> (Placeholder)</span>
          </p>
          <p>
            <strong>Phone:</strong>
            <a href="tel:+919876543210" className="ml-2 text-blue-500 hover:text-blue-600">
              +91 98765 43210
            </a>
            <span className="text-sm text-gray-500"> (Placeholder)</span>
          </p>
          <p>
            <strong>Address:</strong>
            <span className="ml-2">Kozhikode, Kerala, India</span>
            <span className="text-sm text-gray-500"> (Placeholder)</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
