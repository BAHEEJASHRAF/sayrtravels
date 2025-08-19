
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Kerala', href: '#why-kerala' },
    { name: 'Mission', href: '#mission-vision' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-teal-600">
            <a href="#">SayrTravels</a>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-teal-600 transition duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-teal-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-teal-600 transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
