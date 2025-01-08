import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import { useState, useEffect, useRef } from 'react';  // Import hooks

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu
  const menuRef = useRef(null); // Reference for the menu container

  // Close the menu if a click is detected outside the menu
  useEffect(() => {
    // Function to handle click events
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Close menu if clicked outside
      }
    };

    // Add event listener for click outside
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close state
  };

  return (
    <header className="fixed top-0 left-0 w-full shadow-md z-50 bg-black text-white">
      <div className="max-w-screen-xl mx-auto px-4 py-4">
        <nav className="flex justify-between items-center">
          <div className="text-xl font-semibold text-pink-600">My Portfolio</div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-2xl">
              {isMenuOpen ? '✖' : '☰'} {/* Display hamburger icon or close icon */}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <Link to="/" className="hover:text-blue-500 hover:underline">
              About
            </Link>
            <Link to="/projects" className="hover:text-blue-500 hover:underline">
              Projects
            </Link>
            <Link to="/skills" className="hover:text-blue-500 hover:underline pb-4">
              Skills
            </Link>
            <Link to="/contact" className="hover:text-blue-500 hover:underline underline-offset-2">
              Contact
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Links */}
      <div
        ref={menuRef} // Reference to the menu container
        className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-black text-white py-4 px-6`}
      >
        <Link
          to="/"
          className="block hover:text-blue-500 hover:underline py-2"
          onClick={() => setIsMenuOpen(false)} // Close menu on link click
        >
          About
        </Link>
        <Link
          to="/projects"
          className="block hover:text-blue-500 hover:underline py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          Projects
        </Link>
        <Link
          to="/skills"
          className="block hover:text-blue-500 hover:underline py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          Skills
        </Link>
        <Link
          to="/contact"
          className="block hover:text-blue-500 hover:underline py-2"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
