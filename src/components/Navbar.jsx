import React, { useState } from "react";

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
  >
    {children}
  </a>
);

export default function Navbar({ activeVertical, onToggleVertical }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Determine brand text based on vertical
  const brandName = activeVertical === 'med' ? "Sayr Med" : "Sayr Travels";

  return (
    <header className="sticky top-0 z-50 border bg-gray-100/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gray-900 text-white grid place-items-center">
              {activeVertical === 'med' ? 'SM' : 'ST'}
            </div>
            <span className="text-lg font-bold tracking-tight">{brandName}</span>
          </a>

          {/* Vertical Toggle */}
          <div className="hidden sm:flex bg-gray-200 rounded-lg p-1">
            <button
              onClick={() => onToggleVertical('travels')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${activeVertical === 'travels'
                  ? 'bg-white shadow-sm text-gray-900'
                  : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              Travels
            </button>
            <button
              onClick={() => onToggleVertical('med')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${activeVertical === 'med'
                  ? 'bg-white shadow-sm text-gray-900'
                  : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              Med
            </button>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#wellness">Wellness</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
        <div className="md:hidden flex items-center gap-2">
          {/* Mobile Toggle (Simplified) */}
          <button
            onClick={() => onToggleVertical(activeVertical === 'travels' ? 'med' : 'travels')}
            className="px-3 py-2 text-xs font-bold rounded-lg border bg-gray-50 uppercase"
          >
            {activeVertical === 'travels' ? 'GO TO MED' : 'GO TO TRAVELS'}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="px-3 py-2 rounded-lg border bg-white"
          >
            Menu
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t bg-white px-4 py-2 flex flex-col">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#wellness">Wellness</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
      )}
    </header>
  );
}
