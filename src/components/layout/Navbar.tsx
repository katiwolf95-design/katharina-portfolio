import Button from "../ui/Button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
    
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-24 navbar">
      <nav className="page-container flex h-full items-center justify-between py-6">
        <a href="/" className="logo">
          Katharina
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="nav-link">{item.label}</a>
            </li>
          ))}
        </ul>

        <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menü öffnen"
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
              Let's talk
          </Button>
        </a>
      </nav>

      {isOpen && (
        <div className="md:hidden mobile-menu">
            <ul className="flex flex-col gap-6">
              {navItems.map((item) => (
                  <li key={item.href}>
                  <a
                      href={item.href}
                      className="nav-link"
                      onClick={() => setIsOpen(false)}
                  >
                      {item.label}
                  </a>
                  </li>
              ))}
              <li>
                <a
                    href="https://t.me/KaWo25"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsOpen(false)}
                  >
                  <Button variant="filled" className="w-full">
                      Let's talk
                  </Button>
                </a>
              </li>

            </ul>
        </div>
        )}

    </header>
  );
}