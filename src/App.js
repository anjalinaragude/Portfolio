import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [currentSection, setCurrentSection] = useState('about');

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="App">
      <Header onSectionChange={handleSectionChange} />
      <main>
        {currentSection === 'about' && <About />}
        {currentSection === 'projects' && <Projects />}
        {currentSection === 'skills' && <Skills />}
        {currentSection === 'contact' && <Contact />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
