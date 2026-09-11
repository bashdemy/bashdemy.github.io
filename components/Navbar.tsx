import { useEffect, useMemo, useState, useRef } from "react";
import { Menu } from "lucide-react";
import { useScrollSpy } from "../hooks/useScrollSpy";
import { LOCALE_COPY, LOCALE_OPTIONS, Locale } from "../constants/locale";

const SCROLL_OFFSET = 100;

interface NavItem {
  id: string;
  label: string;
}

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

const Navbar = ({
  activeSection,
  setActiveSection,
  locale,
  onLocaleChange,
}: NavbarProps) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [brandHeart, setBrandHeart] = useState(0);
  const heartIdRef = useRef(0);
  const heartTimerRef = useRef<number | undefined>(undefined);
  const menuRef = useRef(null);
  const navItems: NavItem[] = useMemo(
    () => [
      { id: "about", label: LOCALE_COPY[locale].nav.about },
      { id: "apps", label: LOCALE_COPY[locale].nav.apps },
      {
        id: "personal-projects",
        label: LOCALE_COPY[locale].nav.personalProjects,
      },
      { id: "contact", label: LOCALE_COPY[locale].nav.contact },
    ],
    [locale]
  );

  const observedActive = useScrollSpy(
    navItems.map(i => i.id),
    SCROLL_OFFSET
  );
  useEffect(() => {
    if (observedActive && observedActive !== activeSection) {
      setActiveSection(observedActive);
    }
  }, [observedActive, activeSection, setActiveSection]);

  useEffect(() => {
    return () => window.clearTimeout(heartTimerRef.current);
  }, []);

  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileOpen(false);
  };

  const showBrandHeart = () => {
    const nextHeart = heartIdRef.current + 1;
    heartIdRef.current = nextHeart;
    window.clearTimeout(heartTimerRef.current);
    setBrandHeart(nextHeart);

    heartTimerRef.current = window.setTimeout(() => {
      setBrandHeart(0);
    }, 900);
  };

  const getNavItemClassName = itemId => {
    const baseClasses =
      "min-h-11 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 font-heading";
    return activeSection === itemId
      ? `${baseClasses} text-theme-accent bg-theme-accent/20`
      : `${baseClasses} text-theme-secondary hover:text-theme-accent hover:bg-theme-accent/10`;
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-theme-background/90 backdrop-blur-sm border-b border-theme-border"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 px-1 sm:px-0">
          <div className="flex items-center space-x-8">
            <button
              type="button"
              onClick={showBrandHeart}
              className="group relative inline-flex h-11 min-w-14 cursor-pointer items-center justify-center overflow-visible rounded-lg border border-theme-primary/25 bg-white/75 px-3 text-[0.8rem] font-bold tracking-[0.18em] text-theme-accent shadow-sm transition hover:border-theme-primary/40 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary/40 font-heading"
              aria-label="Bashdemy easter egg"
            >
              <span aria-hidden="true">BD</span>
              {brandHeart > 0 && (
                <span
                  key={brandHeart}
                  className="brand-heart-pop"
                  aria-hidden="true"
                >
                  ♥
                </span>
              )}
            </button>
            <div className="hidden md:flex space-x-6" role="menubar">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={getNavItemClassName(item.id)}
                  aria-current={activeSection === item.id ? "page" : undefined}
                  role="menuitem"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <div className="inline-flex rounded-full border border-theme-border bg-white/70 shadow-sm">
              {LOCALE_OPTIONS.map(option => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => onLocaleChange(option.value)}
                  className={`min-h-10 min-w-11 px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                    option.value === locale
                      ? "bg-theme-primary text-white"
                      : "text-theme-primary hover:bg-theme-accent/60"
                  }`}
                  aria-pressed={option.value === locale}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              className="flex min-h-11 min-w-11 items-center justify-center rounded-md text-theme-secondary hover:text-theme-accent"
              aria-label={
                isMobileOpen ? "Close mobile menu" : "Open mobile menu"
              }
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMobileOpen(open => !open)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        <div
          id="mobile-menu"
          ref={menuRef}
          className={`${
            isMobileOpen ? "block" : "hidden"
          } md:hidden py-3 border-t border-theme-border`}
          role="menubar"
        >
          <div className="flex justify-end pb-2">
            <div className="inline-flex rounded-full border border-theme-border bg-white/70 shadow-sm">
              {LOCALE_OPTIONS.map(option => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => onLocaleChange(option.value)}
                  className={`min-h-10 min-w-11 px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                    option.value === locale
                      ? "bg-theme-primary text-white"
                      : "text-theme-primary hover:bg-theme-accent/60"
                  }`}
                  aria-pressed={option.value === locale}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col space-y-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={getNavItemClassName(item.id)}
                aria-current={activeSection === item.id ? "page" : undefined}
                role="menuitem"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
