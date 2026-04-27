"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import About from "../../components/About";
import Apps from "../../components/Apps";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import HumanTouch from "../../components/HumanTouch";
import PersonalProjects from "../../components/PersonalProjects";
import PetalBackground from "../../components/PetalBackground";
import { LOCALE_OPTIONS, Locale } from "../../constants/locale";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("about");
  const [locale, setLocale] = useState<Locale>(LOCALE_OPTIONS[0].value);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <PetalBackground />

      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        locale={locale}
        onLocaleChange={setLocale}
      />

      <main className="relative z-10 pt-16">
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
