import { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero/Hero";
import Projects from "./components/sections/Projects/Projects";
import AboutSection from "./components/sections/About/About";
import Postcard from "./components/sections/Contact/Postcard";
import Footer from "./components/layout/Footer";
import CaseStudy from "./pages/CaseStudy";
import About from "./pages/About";

import "./styles/globals.css";

function App() {
  const path = window.location.pathname;

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);

      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 0);
    }
  }, []);

  if (path.startsWith("/projects/")) {
    const slug = path.replace("/projects/", "");

    return (
      <>
        <Navbar />
        <CaseStudy slug={slug} />
        <Footer />
      </>
    );
  }

  if (path === "/about") {
  return (
    <>
      <Navbar />
      <About />
      <Footer />
    </>
  );
}

  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <AboutSection />
      <Postcard />
      <Footer />
    </>
  );
}

export default App;