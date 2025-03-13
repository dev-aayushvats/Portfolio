import { useState } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="about" smooth={true} duration={500} offset={-100} className="nav-name" onClick={() => setIsOpen(false)}>
          Aayush Vats
        </Link>
        <button className="hamburger" onClick={toggleMenu}>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
      <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <Link to="skills" smooth={true} duration={500} offset={-100} className="nav-item" onClick={() => setIsOpen(false)}>Skills</Link>
        <Link to="education" smooth={true} duration={500} offset={-100} className="nav-item" onClick={() => setIsOpen(false)}>Education</Link>
        <Link to="coursework" smooth={true} duration={500} offset={-100} className="nav-item" onClick={() => setIsOpen(false)}>Coursework</Link>
        <Link to="projects" smooth={true} duration={500} offset={-100} className="nav-item" onClick={() => setIsOpen(false)}>Projects</Link>
        <Link to="experience" smooth={true} duration={500} offset={-100} className="nav-item" onClick={() => setIsOpen(false)}>Experience</Link>
      </div>
    </nav>
  );
}

export default Navbar;