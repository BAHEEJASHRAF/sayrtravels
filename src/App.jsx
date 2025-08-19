import React from "react";
import "./App.css"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Wellness from "./components/Wellness";
import WhyChooseUs from "./components/WhyChooseUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Wellness />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}
