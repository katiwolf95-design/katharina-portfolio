import Button from "../ui/Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { getLanguageFromPath, getLocalizedPath, type Language } from "../../i18n/language";
import { translations } from "../../i18n/translations";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const path = window.location.pathname;
  const language = getLanguageFromPath(path);
  const t = translations[language].nav;
  const otherLanguage: Language = language === "de" ? "en" : "de";

  const currentPath = path.replace(/^\/(de|en)(?=\/|$)/, "") || "/";
  const languagePath = getLocalizedPath(currentPath, otherLanguage);

  const navItems = [
    { label: t.projects, href: "/#projects" },
    { label: t.about, href: "/#about" },
    { label: t.contact, href: "/#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 h-24 navbar">
      <nav className="page-container flex h-full items-center justify-between py-6">
        <a href="/" className="logo">
          Katharina
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={`/${language}${item.href}`} className="nav-link">{item.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href={languagePath}
            className="nav-link"
            aria-label={otherLanguage === "de" ? "Auf Deutsch wechseln" : "Switch to English"}
          >
            {language === "de" ? "EN" : "DE"}
          </a>

          <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
          >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <a 
            href="https://t.me/KaWo25"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block"
          >
            <Button variant="filled">
                {t.letsTalk}
            </Button>
          </a>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden mobile-menu">
            <ul className="flex flex-col gap-6">
              {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                        href={`/${language}${item.href}`}
                        className="nav-link"
                        onClick={() => setIsOpen(false)}
                    >
                        {item.label}
                    </a>
                  </li>
              ))}

              <li>
                <a
                  href={languagePath}
                  className="nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  {language === "de" ? "English" : "Deutsch"}
                </a>
              </li>

              <li>
                <a
                    href="https://t.me/KaWo25"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                  >
                  <Button variant="filled" className="w-full">
                      {t.letsTalk}
                  </Button>
                </a>
              </li>

            </ul>
        </div>
        )}

    </header>
  );
}