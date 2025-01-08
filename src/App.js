import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About'; // About component
import Projects from './components/Projects'; 
import Skills from './components/Skills'; 
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App bg-gray-50 min-h-screen flex flex-col">
      {/* Fixed Header */}
      <Header />

      {/* Main content with padding to avoid overlap with the fixed header */}
      <main className="flex-1 pt-16 pb-12">
        <Routes>
          {/* Define the route for the About section */}
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Sticky Footer */}
      <Footer />
    </div>
  );
};

export default App;
