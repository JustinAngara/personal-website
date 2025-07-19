import './CartoonBackground.css';

const CartoonBackground = ({ page }) => {
  const backgrounds = {
    home: (
      <div className="cartoon-background home-bg">
        {/* Circuit board pattern */}
        <div className="circuit-pattern">
          <svg viewBox="0 0 400 300" className="circuit-svg">
            <path d="M50 50 L150 50 L150 100 L200 100 L200 150 L250 150" stroke="#667eea" strokeWidth="3" fill="none" opacity="0.1"/>
            <path d="M300 50 L350 50 L350 200 L100 200 L100 250" stroke="#764ba2" strokeWidth="3" fill="none" opacity="0.1"/>
            <circle cx="150" cy="50" r="4" fill="#667eea" opacity="0.2"/>
            <circle cx="200" cy="100" r="4" fill="#667eea" opacity="0.2"/>
            <circle cx="250" cy="150" r="4" fill="#667eea" opacity="0.2"/>
            <circle cx="350" cy="50" r="4" fill="#764ba2" opacity="0.2"/>
            <circle cx="100" cy="200" r="4" fill="#764ba2" opacity="0.2"/>
          </svg>
        </div>
        
        {/* Floating code blocks */}
        <div className="code-block code-1">
          <div className="code-line"></div>
          <div className="code-line"></div>
          <div className="code-line"></div>
        </div>
        <div className="code-block code-2">
          <div className="code-line"></div>
          <div className="code-line"></div>
        </div>
        
        {/* Robot character */}
        <div className="robot-character">
          <div className="robot-head">
            <div className="robot-eye left"></div>
            <div className="robot-eye right"></div>
            <div className="robot-mouth"></div>
          </div>
          <div className="robot-body">
            <div className="robot-arm left"></div>
            <div className="robot-arm right"></div>
          </div>
        </div>
        
        {/* Floating shapes */}
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>
    ),
    
    about: (
      <div className="cartoon-background about-bg">
        {/* Brain illustration */}
        <div className="brain-illustration">
          <svg viewBox="0 0 200 150" className="brain-svg">
            <path d="M50 75 Q100 30 150 75 Q160 100 150 125 Q100 140 50 125 Q40 100 50 75" 
                  fill="#667eea" opacity="0.1" stroke="#667eea" strokeWidth="2"/>
            <path d="M60 80 Q100 40 140 80 Q145 95 140 110 Q100 125 60 110 Q55 95 60 80" 
                  fill="#764ba2" opacity="0.1" stroke="#764ba2" strokeWidth="2"/>
            <circle cx="70" cy="85" r="3" fill="#667eea" opacity="0.3"/>
            <circle cx="130" cy="85" r="3" fill="#667eea" opacity="0.3"/>
            <circle cx="100" cy="105" r="3" fill="#667eea" opacity="0.3"/>
          </svg>
        </div>
        
        {/* Graduation cap */}
        <div className="graduation-cap">
          <div className="cap-top"></div>
          <div className="cap-tassel"></div>
          <div className="cap-base"></div>
        </div>
        
        {/* Floating icons */}
        <div className="floating-icon icon-1">🎓</div>
        <div className="floating-icon icon-2">💻</div>
        <div className="floating-icon icon-3">🔧</div>
        
        {/* Dotted connections */}
        <div className="connection-dots">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    ),
    
    projects: (
      <div className="cartoon-background projects-bg">
        {/* Rocket ship */}
        <div className="rocket-ship">
          <div className="rocket-body">
            <div className="rocket-window"></div>
          </div>
          <div className="rocket-nose"></div>
          <div className="rocket-fins">
            <div className="fin left"></div>
            <div className="fin right"></div>
          </div>
          <div className="rocket-flame"></div>
        </div>
        
        {/* Project icons */}
        <div className="project-icon icon-1">🚀</div>
        <div className="project-icon icon-2">⚡</div>
        <div className="project-icon icon-3">🎯</div>
        
        {/* Code blocks */}
        <div className="code-block project-code-1">
          <div className="code-line"></div>
          <div className="code-line"></div>
          <div className="code-line"></div>
        </div>
        <div className="code-block project-code-2">
          <div className="code-line"></div>
          <div className="code-line"></div>
        </div>
        
        {/* Success indicators */}
        <div className="success-check check-1">✓</div>
        <div className="success-check check-2">✓</div>
        <div className="success-check check-3">✓</div>
      </div>
    ),
    
    skills: (
      <div className="cartoon-background skills-bg">
        {/* Gear system */}
        <div className="gear-system">
          <div className="gear gear-1">
            <div className="gear-tooth"></div>
            <div className="gear-tooth"></div>
            <div className="gear-tooth"></div>
            <div className="gear-tooth"></div>
            <div className="gear-tooth"></div>
            <div className="gear-tooth"></div>
            <div className="gear-tooth"></div>
            <div className="gear-tooth"></div>
          </div>
          <div className="gear gear-2">
            <div className="gear-tooth"></div>
            <div className="gear-tooth"></div>
            <div className="gear-tooth"></div>
            <div className="gear-tooth"></div>
            <div className="gear-tooth"></div>
            <div className="gear-tooth"></div>
          </div>
        </div>
        
        {/* Skill icons */}
        <div className="skill-icon icon-1">⚙️</div>
        <div className="skill-icon icon-2">🔧</div>
        <div className="skill-icon icon-3">💡</div>
        <div className="skill-icon icon-4">🎨</div>
        
        {/* Progress bars */}
        <div className="progress-bar bar-1">
          <div className="progress-fill"></div>
        </div>
        <div className="progress-bar bar-2">
          <div className="progress-fill"></div>
        </div>
        <div className="progress-bar bar-3">
          <div className="progress-fill"></div>
        </div>
      </div>
    ),
    
    contact: (
      <div className="cartoon-background contact-bg">
        {/* Mail envelope */}
        <div className="mail-envelope">
          <div className="envelope-body"></div>
          <div className="envelope-flap"></div>
          <div className="envelope-seal"></div>
        </div>
        
        {/* Contact icons */}
        <div className="contact-icon icon-1">📧</div>
        <div className="contact-icon icon-2">💬</div>
        <div className="contact-icon icon-3">📱</div>
        
        {/* Connection lines */}
        <div className="connection-line line-1"></div>
        <div className="connection-line line-2"></div>
        <div className="connection-line line-3"></div>
        
        {/* Message bubbles */}
        <div className="message-bubble bubble-1">
          <div className="bubble-text">Hi!</div>
        </div>
        <div className="message-bubble bubble-2">
          <div className="bubble-text">Let's talk!</div>
        </div>
      </div>
    )
  };

  return (
    <div className="cartoon-background-container">
      {backgrounds[page]}
    </div>
  );
};

export default CartoonBackground; 