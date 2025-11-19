"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import About from "../../components/About";
import Apps from "../../components/Apps";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import FloatingFlowers from "../../components/FloatingFlowers";
import HumanTouch from "../../components/HumanTouch";
import PersonalProjects from "../../components/PersonalProjects";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="min-h-screen">
      <FloatingFlowers />
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main className="pt-16">
        <About id="about" />
        <Apps id="apps" />
        <PersonalProjects id="personal-projects" />
        <Contact id="contact" />
        <HumanTouch id="human-touch" />
      </main>

      <Footer />
    </div>
  );
}
