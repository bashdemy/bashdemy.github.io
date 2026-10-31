import { useEffect, useMemo, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { LOCALE_COPY, LOCALE_OPTIONS, Locale } from "@/constants/locale";

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
  const navContainerRef = useRef<HTMLElement>(null);

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

  const sectionIds = useMemo(() => navItems.map(i => i.id), [navItems]);
  const observedActive = useScrollSpy(sectionIds, SCROLL_OFFSET);

  useEffect(() => {
    if (observedActive && observedActive !== activeSection) {
      setActiveSection(observedActive);
    }
  }, [observedActive, activeSection, setActiveSection]);

  useEffect(() => {
    return () => window.clearTimeout(heartTimerRef.current);
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileOpen) {
        setIsMobileOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileOpen]);

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isMobileOpen &&
        navContainerRef.current &&
        !navContainerRef.current.contains(e.target as Node)
      ) {
        setIsMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      if (typeof window !== "undefined" && window.history?.replaceState) {
        window.history.replaceState(null, "", `#${sectionId}`);
      }
    }
    setIsMobileOpen(false);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (typeof window !== "undefined" && window.history?.replaceState) {
      window.history.replaceState(null, "", window.location.pathname);
    }
    const nextHeart = heartIdRef.current + 1;
    heartIdRef.current = nextHeart;
    window.clearTimeout(heartTimerRef.current);
    setBrandHeart(nextHeart);

    heartTimerRef.current = window.setTimeout(() => {
      setBrandHeart(0);
    }, 900);
  };

  const getNavItemClassName = (itemId: string) => {
    const baseClasses =
      "inline-flex items-center min-h-11 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 font-heading focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary/50";
    return activeSection === itemId
      ? `${baseClasses} text-theme-accent bg-theme-accent/20`
      : `${baseClasses} text-theme-secondary hover:text-theme-accent hover:bg-theme-accent/10`;
  };

  return (
    <nav
      ref={navContainerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-theme-background/90 backdrop-blur-sm border-b border-theme-border"
      aria-label="Main navigation"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 px-1 sm:px-0">
          <div className="flex items-center space-x-8">
            <button
              type="button"
              onClick={handleLogoClick}
              className="group relative inline-flex h-11 min-w-14 cursor-pointer items-center justify-center overflow-visible rounded-lg border border-theme-primary/25 bg-white/75 px-3 text-[0.8rem] font-bold tracking-[0.18em] text-theme-accent shadow-sm transition hover:border-theme-primary/40 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary/40 font-heading"
              aria-label="Return to top of page and show BD easter egg"
              title="Return to top"
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

            <div className="hidden md:flex space-x-4">
              {navItems.map(item => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={e => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={getNavItemClassName(item.id)}
                  aria-current={activeSection === item.id ? "page" : undefined}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <div className="inline-flex rounded-full border border-theme-border bg-white/70 shadow-sm p-0.5">
              {LOCALE_OPTIONS.map(option => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => onLocaleChange(option.value)}
                  className={`min-h-9 min-w-10 px-3 py-1 text-xs font-medium rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary ${
                    option.value === locale
                      ? "bg-theme-primary text-white shadow-xs"
                      : "text-theme-primary hover:bg-theme-accent/20"
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
              className="flex min-h-11 min-w-11 items-center justify-center rounded-md text-theme-secondary hover:text-theme-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary/40"
              aria-label={
                isMobileOpen ? "Close mobile menu" : "Open mobile menu"
              }
              aria-expanded={isMobileOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMobileOpen(open => !open)}
            >
              {isMobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`${
            isMobileOpen ? "block" : "hidden"
          } md:hidden py-3 border-t border-theme-border animate-in fade-in slide-in-from-top-2 duration-200`}
        >
          <div className="flex justify-between items-center pb-3 px-2">
            <span className="text-xs uppercase tracking-wider text-theme-muted font-heading">
              Language
            </span>
            <div className="inline-flex rounded-full border border-theme-border bg-white/70 shadow-sm p-0.5">
              {LOCALE_OPTIONS.map(option => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onLocaleChange(option.value);
                    setIsMobileOpen(false);
                  }}
                  className={`min-h-9 min-w-10 px-3 py-1 text-xs font-medium rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary ${
                    option.value === locale
                      ? "bg-theme-primary text-white shadow-xs"
                      : "text-theme-primary hover:bg-theme-accent/20"
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
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={e => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={getNavItemClassName(item.id)}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
