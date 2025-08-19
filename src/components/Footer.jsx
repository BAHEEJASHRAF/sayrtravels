const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} SayrTravels. All rights reserved.</p>
        <p className="mt-2 text-sm text-gray-400">
          Your Trusted Partner in Health & Wellness
        </p>
      </div>
    </footer>
  );
};

export default Footer;
