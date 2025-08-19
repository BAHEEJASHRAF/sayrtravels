import React, { useState } from "react";

const NavLink = ({ href, children }) => (
  <a
    href={href}
    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
  >
    {children}
  </a>
);

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gray-900 text-white grid place-items-center">
            ST
          </div>
          <span className="text-lg font-bold tracking-tight">Sayr Travels</span>
        </a>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#wellness">Wellness</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
        <div className="md:hidden">
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
