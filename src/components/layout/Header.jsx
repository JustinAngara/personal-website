import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PERSONAL_INFO } from '../../utils/constants';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-text">{PERSONAL_INFO.name.split(' ')[0]}</span>
        </Link>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li><Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link to="/projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>Projects</Link></li>
            <li><Link to="/skills" className="nav-link" onClick={() => setIsMenuOpen(false)}>Skills</Link></li>
            <li><Link to="/wrapped" className="nav-link" onClick={() => setIsMenuOpen(false)}>Wrapped</Link></li>
            <li><Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>

        <button 
          className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header; 