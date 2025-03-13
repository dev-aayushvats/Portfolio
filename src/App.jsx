import { useEffect } from 'react';
import { Link } from 'react-scroll';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Education from './components/Education';
import Coursework from './components/Coursework';
import Projects from './components/Projects';
import Experience from './components/Experience';
import './App.css';

function App() {
  useEffect(() => {
    const glow = document.querySelector('.glow');

    const handleMouseMove = (e) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };

    const handleMouseEnter = () => {
      glow.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      glow.style.opacity = '0';
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="frosted-background">
      <div className="glow"></div>
      <Navbar />
      <div className="content-wrapper">
        <Header id="about" />
        <hr className="section-divider" />
        <Skills id="skills" />
        <hr className="section-divider" />
        <Education id="education" />
        <hr className="section-divider" />
        <Coursework id="coursework" />
        <hr className="section-divider" />
        <Projects id="projects" />
        <hr className="section-divider" />
        <Experience id="experience" />
      </div>
    </div>
  );
}

export default App;