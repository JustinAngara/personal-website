import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';
import useScrollToTop from './hooks/useScrollToTop';
import Button from './components/ui/Button';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <ScrollToTopButton />
        <Footer />
      </div>
    </Router>
  );
}

// Component to handle scroll to top
const ScrollToTop = () => {
  useScrollToTop();
  return null;
};

// Floating scroll-to-top button
const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button
      variant="primary"
      size="large"
      className={`scroll-to-top-btn${visible ? ' show' : ''}`}
      onClick={handleClick}
      aria-label="Scroll to top"
      style={{
        position: 'fixed',
        right: '2rem',
        bottom: '2rem',
        zIndex: 1001,
        borderRadius: '50%',
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 0.3s, transform 0.3s',
        transform: visible ? 'scale(1)' : 'scale(0.8)',
      }}
    >
      ↑
    </Button>
  );
};

export default App;
