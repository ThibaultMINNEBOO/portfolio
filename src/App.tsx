import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import Stack from "./components/sections/Stack";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

export default function App() {
  return (
    <div className="grain min-h-screen bg-neutral-950 text-neutral-200 font-heading">
      <Navbar />
      <Hero />
      <Stack />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
