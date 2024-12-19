import React, { useState } from 'react';
import '../assets/styles/Header.css';

const Header = ({ onSectionChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <h1>My Portfolio</h1>
      <nav>
        {/* Regular menu for larger screens */}
        <ul className="desktop-nav">
          <li><a href="#about" onClick={() => onSectionChange('about')}>About</a></li>
          <li><a href="#projects" onClick={() => onSectionChange('projects')}>Projects</a></li>
          <li><a href="#skills" onClick={() => onSectionChange('skills')}>Skills</a></li>
          <li><a href="#contact" onClick={() => onSectionChange('contact')}>Contact</a></li>
        </ul>

        {/* Hamburger icon for smaller screens */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Menu for mobile view */}
        <ul className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#about" onClick={() => onSectionChange('about')}>About</a></li>
          <li><a href="#projects" onClick={() => onSectionChange('projects')}>Projects</a></li>
          <li><a href="#skills" onClick={() => onSectionChange('skills')}>Skills</a></li>
          <li><a href="#contact" onClick={() => onSectionChange('contact')}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
