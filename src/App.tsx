import Navbar from "./components/Navbar";
import AboutSection from "./sections/AboutSection";
import Home from "./sections/Home";

export default function App() {
  return (
    <div className="flex flex-col relative min-h-screen">
      <Navbar />
      <Home />
      <AboutSection />
    </div>
  )
}