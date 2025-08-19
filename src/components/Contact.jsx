import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container contact-container">
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-text">
          Ready to begin your journey to wellness? Contact us today for a free
          consultation. We are here to answer all your questions and help you
          plan your trip.
        </p>
        <div className="contact-details">
          <p>
            <strong>Email:</strong>
            <a href="mailto:contact@sayrtravels.com">
              contact@sayrtravels.com
            </a>
            <span className="placeholder-text"> (Placeholder)</span>
          </p>
          <p>
            <strong>Phone:</strong>
            <a href="tel:+919876543210">+91 98765 43210</a>
            <span className="placeholder-text"> (Placeholder)</span>
          </p>
          <p>
            <strong>Address:</strong>
            <span>Kozhikode, Kerala, India</span>
            <span className="placeholder-text"> (Placeholder)</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;