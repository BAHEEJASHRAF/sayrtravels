import React, { useState } from "react";

<a
  href={href}
  className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
>
  {children}
</a>
);

export default function Navbar({ activeVertical, onToggleVertical, onEnquiryClick }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Determine brand text based on vertical
  const brandName = activeVertical === 'med' ? "Sayr Med" : "Sayr Travels";

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="#home" className="flex items-center gap-2">
            <div className={`w-9 h-9 rounded-xl text-white grid place-items-center font-bold shadow-md bg-gradient-to-br ${activeVertical === 'med' ? 'from-blue-600 to-teal-500' : 'from-orange-500 to-yellow-500'}`}>
              {activeVertical === 'med' ? 'SM' : 'ST'}
            </div>
            <span className={`text-lg font-bold tracking-tight ${activeVertical === 'med' ? 'text-blue-900' : 'text-gray-900'}`}>{brandName}</span>
          </a>

          {/* Vertical Toggle */}
          <div className="hidden sm:flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => onToggleVertical('med')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${activeVertical === 'med'
                ? 'bg-white shadow-sm text-blue-700'
                : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              Med
            </button>
            <button
              onClick={() => onToggleVertical('travels')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-all ${activeVertical === 'travels'
                ? 'bg-white shadow-sm text-orange-600'
                : 'text-gray-500 hover:text-gray-700'
                }`}
            >
              Travels
            </button>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#wellness">Wellness</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <button
            onClick={onEnquiryClick}
            className="ml-2 px-5 py-2.5 rounded-lg bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 shadow-md shadow-teal-200 transition-all hover:translate-y-[-1px]"
          >
            Enquire Now
          </button>
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
            className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t bg-white px-4 py-2 flex flex-col">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#wellness">Wellness</NavLink>
          <NavLink href="#contact">Contact</NavLink>
          <button
            onClick={() => {
              setMobileOpen(false);
              onEnquiryClick();
            }}
            className="mt-2 w-full px-4 py-2 rounded-lg bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-colors"
          >
            Enquire Now
          </button>
        </div>
      )}
    </header>
  );
}
