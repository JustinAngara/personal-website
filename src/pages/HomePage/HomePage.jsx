import { useState, useEffect, useRef } from 'react';
import Button from '@src/components/ui/Button';
import GreekMythologyBackground from '@src/components/ui/GreekMythologyBackground';
import { PERSONAL_INFO, SKILLS_DATA } from '@src/utils/constants';
import './HomePage.css';

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showSplash, setShowSplash] = useState(() => !sessionStorage.getItem('splashShown'));
  const [fadeSplash, setFadeSplash] = useState(false);
  const [typedText, setTypedText] = useState("");
  const splashTimeout = useRef();
  const fullText = 'System.out.println("Hello, World!");';

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typing effect
  useEffect(() => {
    if (!showSplash) return;
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 25); // was 40
      return () => clearTimeout(timeout);
    } else {
      // Start fade after typing is done
      splashTimeout.current = setTimeout(() => setFadeSplash(true), 700);
      return () => clearTimeout(splashTimeout.current);
    }
  }, [typedText, showSplash]);

  useEffect(() => {
    if (fadeSplash) {
      splashTimeout.current = setTimeout(() => setShowSplash(false), 600);
      return () => clearTimeout(splashTimeout.current);
    }
  }, [fadeSplash]);

  useEffect(() => {
    if (!showSplash) {
      sessionStorage.setItem('splashShown', 'true');
    }
  }, [showSplash]);

  return (
    <div className="home-page">
      {showSplash && (
        <div className={`splash-screen${fadeSplash ? ' fade-out' : ''}`}>
          <span className="splash-text">{typedText}<span className="splash-cursor">|</span></span>
        </div>
      )}
      <GreekMythologyBackground page="home" />
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1" style={{ transform: `translateY(${scrollY * 0.1}px)` }}></div>
            <div className="shape shape-2" style={{ transform: `translateY(${scrollY * 0.15}px)` }}></div>
            <div className="shape shape-3" style={{ transform: `translateY(${scrollY * 0.2}px)` }}></div>
            <div className="shape shape-4" style={{ transform: `translateY(${scrollY * 0.05}px)` }}></div>
          </div>
        </div>
        
        <div className="hero-content">
          <div className="profile-container">
            <div className="profile-avatar">
              <div className="avatar-circle">
                <div className="avatar-eyes">
                  <div className="eye left-eye"></div>
                  <div className="eye right-eye"></div>
                </div>
                <div className="avatar-smile"></div>
              </div>
            </div>
            <h1 className="hero-title">
              <span className="title-line">Hi, I'm</span>
              <span className="title-name">{PERSONAL_INFO.name}</span>
              <span className="title-subtitle">{PERSONAL_INFO.title}</span>
            </h1>
            <p className="hero-description">
              {PERSONAL_INFO.description}
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="section-background">
          <div className="code-elements">
            <div className="code-line" style={{ transform: `translateX(${scrollY * 0.1}px)` }}>
              <span className="code-keyword">const</span> <span className="code-variable">developer</span> = <span className="code-string">"{PERSONAL_INFO.name}"</span>;
            </div>
            <div className="code-line" style={{ transform: `translateX(${scrollY * 0.15}px)` }}>
              <span className="code-keyword">let</span> <span className="code-variable">skills</span> = [<span className="code-string">"C/C++"</span>, <span className="code-string">"Kernel Dev"</span>, <span className="code-string">"AI/ML"</span>];
            </div>
            <div className="code-line" style={{ transform: `translateX(${scrollY * 0.2}px)` }}>
              <span className="code-keyword">function</span> <span className="code-function">reverseEngineer</span>() { <span className="code-comment">// Security & Automation</span> }
            </div>
          </div>
        </div>
        
        <div className="section-content">
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div className="about-card">
              <div className="card-icon">🔍</div>
              <h3>Reverse Engineering Expert</h3>
              <p>Passionate about analyzing systems, understanding how they work, and building innovative solutions through reverse engineering.</p>
            </div>
            <div className="about-card">
              <div className="card-icon">⚡</div>
              <h3>Kernel & Systems Developer</h3>
              <p>Deep expertise in low-level programming, kernel development, and system-level security with hands-on experience in Windows kernel drivers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="section-background">
          <div className="tech-bubbles">
            <div className="bubble" style={{ transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.01}deg)` }}>C/C++</div>
            <div className="bubble" style={{ transform: `translateY(${scrollY * 0.15}px) rotate(${scrollY * -0.01}deg)` }}>Kernel</div>
            <div className="bubble" style={{ transform: `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.02}deg)` }}>Python</div>
            <div className="bubble" style={{ transform: `translateY(${scrollY * 0.05}px) rotate(${scrollY * -0.02}deg)` }}>React</div>
            <div className="bubble" style={{ transform: `translateY(${scrollY * 0.12}px) rotate(${scrollY * 0.015}deg)` }}>OpenCV</div>
            <div className="bubble" style={{ transform: `translateY(${scrollY * 0.18}px) rotate(${scrollY * -0.015}deg)` }}>AI/ML</div>
          </div>
        </div>
        
        <div className="section-content">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-container">
            <div className="skill-category">
              <h3>Languages</h3>
              <div className="skill-items">
                {SKILLS_DATA.languages.map((skill, index) => (
                  <span key={index} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Technologies</h3>
              <div className="skill-items">
                {SKILLS_DATA.technologies.slice(0, 6).map((skill, index) => (
                  <span key={index} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>Concepts & Expertise</h3>
              <div className="skill-items">
                {SKILLS_DATA.concepts.slice(0, 5).map((skill, index) => (
                  <span key={index} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="section-content">
          <h2 className="section-title">Experience & Impact</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">40+</div>
              <div className="stat-label">Students Mentored</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="section-background">
          <div className="contact-elements">
            <div className="envelope" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
              <div className="envelope-body"></div>
              <div className="envelope-flap"></div>
            </div>
            <div className="phone" style={{ transform: `translateY(${scrollY * 0.15}px)` }}>
              <div className="phone-body"></div>
              <div className="phone-screen"></div>
            </div>
          </div>
        </div>
        
        <div className="section-content">
          <h2 className="section-title">Let's Connect</h2>
          <p className="contact-description">
            Interested in kernel development, reverse engineering, or AI integration? Let's discuss your next project!
          </p>
          <div className="contact-buttons">
            <Button variant="primary" size="large" onClick={() => window.open(`mailto:${PERSONAL_INFO.email}`, '_blank')}>
              Send Email
            </Button>
            <Button variant="secondary" size="large" onClick={() => window.open(PERSONAL_INFO.linkedin, '_blank')}>
              LinkedIn
            </Button>
            <Button variant="secondary" size="large" onClick={() => window.open(PERSONAL_INFO.github, '_blank')}>
              GitHub
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 