import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container footer-container">
        <p>&copy; {new Date().getFullYear()} SayrTravels. All rights reserved.</p>
        <p className="footer-tagline">
          Your Trusted Partner in Health & Wellness
        </p>
      </div>
    </footer>
  );
};

export default Footer;