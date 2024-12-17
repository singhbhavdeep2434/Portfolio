import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects/Projects';
import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <Skills />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>© 2024 Bhavdeep Singh. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;