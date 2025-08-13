import { useState } from 'react';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import About from './components/About';
import Apps from './components/Apps';
import Blog from './components/Blog';
import HumanTouch from './components/HumanTouch';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingFlowers from './components/FloatingFlowers';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="min-h-screen">
      <SEO />

      <FloatingFlowers />
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <main className="pt-16">
        <About id="about" />
        <Apps id="apps" />
        <Blog id="blog" />
        <Contact id="contact" />
        <HumanTouch id="human-touch" />
      </main>

      <Footer />
    </div>
  );
}

export default App;
