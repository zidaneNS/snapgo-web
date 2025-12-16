import Navbar from "./components/Navbar";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import PortfolioSection from "./sections/PortfolioSection";
import ServiceSection from "./sections/ServiceSection";
import TestimonialSection from "./sections/TestimonialSection";

export default function App() {
  return (
    <div className="flex flex-col relative min-h-screen">
      <Navbar />
      <Home />
      <AboutSection />
      <ServiceSection />
      <PortfolioSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </div>
  )
}