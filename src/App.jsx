import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import WhyKerala from "./components/WhyKerala"
import MissionVision from "./components/MissionVision"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="bg-slate-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyKerala />
        <MissionVision />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

