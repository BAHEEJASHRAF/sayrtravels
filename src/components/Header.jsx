import { useState } from 'react';
import './Header.css';

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
    <header className="header">
      <div className="container header-container">
        <div className="header-logo">
          <a href="#">SayrTravels</a>
        </div>
        <nav className="header-nav-desktop">
          <ul>
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-nav-mobile-toggle">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="header-nav-mobile">
          <ul>
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.href} onClick={() => setIsOpen(false)}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;