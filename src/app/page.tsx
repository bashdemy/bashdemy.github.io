"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Apps from "@/components/Apps";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HumanTouch from "@/components/HumanTouch";
import PersonalProjects from "@/components/PersonalProjects";
import PetalBackground from "@/components/PetalBackground";
import { LOCALE_OPTIONS, Locale } from "@/constants/locale";

const LOCALE_STORAGE_KEY = "bashdemy-locale";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("about");
  const [locale, setLocale] = useState<Locale>(LOCALE_OPTIONS[0].value);

  // Initialize locale from localStorage or browser preferences
  useEffect(() => {
    try {
      const savedLocale = localStorage.getItem(
        LOCALE_STORAGE_KEY
      ) as Locale | null;
      if (savedLocale && (savedLocale === "en" || savedLocale === "ru")) {
        setLocale(savedLocale);
      } else if (
        typeof navigator !== "undefined" &&
        navigator.language?.startsWith("ru")
      ) {
        setLocale("ru");
      }
    } catch {
      // localStorage may fail in restricted/private browsing modes
    }
  }, []);

  const handleLocaleChange = (newLocale: Locale) => {
    setLocale(newLocale);
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
    } catch {
      // Ignore write errors
    }
  };

  // Keep document html lang attribute in sync
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-theme-primary focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none font-medium text-sm"
      >
        Skip to main content
      </a>

      <PetalBackground />

      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        locale={locale}
        onLocaleChange={handleLocaleChange}
      />

      <main id="main-content" className="relative z-10 pt-16">
        <About id="about" locale={locale} />
        <Apps id="apps" locale={locale} />
        <PersonalProjects id="personal-projects" locale={locale} />
        <Contact id="contact" locale={locale} />
        <HumanTouch id="human-touch" locale={locale} />
      </main>

      <div className="relative z-10">
        <Footer locale={locale} />
      </div>
    </div>
  );
}
