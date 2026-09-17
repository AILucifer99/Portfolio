import { useEffect, useMemo, useState } from "react";
import { profile } from "../data/content.js";
import useScrollSpy from "../hooks/useScrollSpy.js";
import "./Header.css";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useScrollSpy(LINKS.map((link) => link.href.replace("#", "")));

  const navLinks = useMemo(() => LINKS, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="shell site-header__row">
        <a href="#top" className="site-header__mark" onClick={closeMenu}>
          SB<span className="site-header__mark-dot">.</span>
        </a>

        <nav className="site-header__nav site-header__nav--desktop" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeSection === link.href.replace("#", "") ? "is-active" : ""}
              aria-current={activeSection === link.href.replace("#", "") ? "page" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <a className="btn btn-ghost site-header__resume" href={profile.resumeFile} download>
            Résumé
          </a>
          <button
            className={`site-header__burger ${open ? "is-open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        className={`site-header__nav--mobile ${open ? "is-open" : ""}`}
        aria-label="Mobile"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            className={activeSection === link.href.replace("#", "") ? "is-active" : ""}
            aria-current={activeSection === link.href.replace("#", "") ? "page" : undefined}
          >
            {link.label}
          </a>
        ))}
        <a href={profile.resumeFile} download onClick={closeMenu}>
          Download résumé
        </a>
      </nav>
    </header>
  );
}
