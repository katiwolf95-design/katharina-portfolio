import { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero/Hero";
import Projects from "./components/sections/Projects/Projects";
import AboutSection from "./components/sections/About/About";
import Postcard from "./components/sections/Contact/Postcard";
import Footer from "./components/layout/Footer";
import CaseStudy from "./pages/CaseStudy/CaseStudy";
import About from "./pages/About";

import "./styles/globals.css";

import {
  detectBrowserLanguage,
  getLanguageFromPath,
} from "./i18n/language";

function App() {
  const path = window.location.pathname;

  console.log("Aktueller Pfad:", path);
  console.log("Browser-Sprache:", navigator.language);

  // Beim Aufruf der Startseite die Browsersprache erkennen.
  useEffect(() => {
    if (path === "/") {
      const language = detectBrowserLanguage();

      window.location.replace(
        `/${language}/${window.location.hash}`
      );
    }
  }, [path]);

  // Bei einem Hash-Link zum passenden Abschnitt scrollen.
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

  // Sprachpräfix aus dem Pfad entfernen, damit das Routing
  // weiterhin mit den bisherigen Pfaden arbeiten kann.
  const language = getLanguageFromPath(path);

  const routePath = path.replace(/^\/(de|en)(?=\/|$)/, "") || "/";

  // Projektseiten
  if (routePath.startsWith("/projects/")) {
    const slug = routePath.replace("/projects/", "");

    return (
      <>
        <Navbar />
        <CaseStudy slug={slug} />
        <Footer />
      </>
    );
  }

  // Über-mich-Seite
  if (routePath === "/about") {
  return (
    <>
      <Navbar />
      <About />
      <Footer />
    </>
  );
}

  // Startseite
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