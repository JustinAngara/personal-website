import { useState, useEffect } from 'react';
import './GreekMythologyBackground.css';

const GreekMythologyBackground = ({ page }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const backgrounds = {
    home: (
      <div className="greek-background greek-background-blur home-bg" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
        {/* Colosseum/Amphitheater */}
        <div className="colosseum" style={{ transform: `translateY(${scrollY * 0.05}px)` }}>
          <div className="colosseum-base">
            <div className="colosseum-arch arch-1"></div>
            <div className="colosseum-arch arch-2"></div>
            <div className="colosseum-arch arch-3"></div>
            <div className="colosseum-arch arch-4"></div>
            <div className="colosseum-arch arch-5"></div>
            <div className="colosseum-arch arch-6"></div>
            <div className="colosseum-arch arch-7"></div>
            <div className="colosseum-arch arch-8"></div>
          </div>
          <div className="colosseum-top">
            <div className="colosseum-pillar pillar-1"></div>
            <div className="colosseum-pillar pillar-2"></div>
            <div className="colosseum-pillar pillar-3"></div>
            <div className="colosseum-pillar pillar-4"></div>
            <div className="colosseum-pillar pillar-5"></div>
          </div>
        </div>
        
        {/* Athena Goddess */}
        <div className="goddess athena" style={{ transform: `translateY(${scrollY * 0.15}px)` }}>
          <div className="goddess-head">
            <div className="goddess-helmet">
              <div className="helmet-plume"></div>
            </div>
            <div className="goddess-face">
              <div className="goddess-eye left"></div>
              <div className="goddess-eye right"></div>
            </div>
          </div>
          <div className="goddess-body">
            <div className="goddess-toga"></div>
            <div className="goddess-armor">
              <div className="breastplate"></div>
              <div className="arm-band left"></div>
              <div className="arm-band right"></div>
            </div>
          </div>
          <div className="goddess-weapons">
            <div className="spear"></div>
            <div className="shield"></div>
          </div>
        </div>
        
        {/* Additional Greek Elements */}
        <div className="greek-columns" style={{ transform: `translateY(${scrollY * 0.08}px)` }}>
          <div className="column column-1"></div>
          <div className="column column-2"></div>
          <div className="column column-3"></div>
          <div className="column column-4"></div>
        </div>
        
        {/* Floating clouds */}
        <div className="cloud cloud-1" style={{ transform: `translateY(${scrollY * 0.2}px)` }}></div>
        <div className="cloud cloud-2" style={{ transform: `translateY(${scrollY * 0.12}px)` }}></div>
        <div className="cloud cloud-3" style={{ transform: `translateY(${scrollY * 0.18}px)` }}></div>
        <div className="cloud cloud-4" style={{ transform: `translateY(${scrollY * 0.25}px)` }}></div>
        
        {/* Lightning bolts */}
        <div className="lightning lightning-1" style={{ transform: `translateY(${scrollY * 0.3}px)` }}></div>
        <div className="lightning lightning-2" style={{ transform: `translateY(${scrollY * 0.22}px)` }}></div>
        
        {/* Floating laurel wreaths */}
        <div className="laurel-wreath wreath-1" style={{ transform: `translateY(${scrollY * 0.35}px)` }}>🏆</div>
        <div className="laurel-wreath wreath-2" style={{ transform: `translateY(${scrollY * 0.28}px)` }}>⚡</div>
        <div className="laurel-wreath wreath-3" style={{ transform: `translateY(${scrollY * 0.32}px)` }}>🔱</div>
        
        {/* Scroll-based additional elements */}
        {scrollY > 500 && (
          <div className="scroll-revealed scroll-element-1">
            <div className="floating-temple"></div>
          </div>
        )}
        
        {scrollY > 800 && (
          <div className="scroll-revealed scroll-element-2">
            <div className="floating-statue">🗿</div>
          </div>
        )}
        
        {scrollY > 1200 && (
          <div className="scroll-revealed scroll-element-3">
            <div className="floating-fire">🔥</div>
          </div>
        )}
      </div>
    ),
    
    about: (
      <div className="greek-background greek-background-blur about-bg" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
        {/* Temple of Knowledge */}
        <div className="temple" style={{ transform: `translateY(${scrollY * 0.05}px)` }}>
          <div className="temple-roof">
            <div className="temple-pediment"></div>
          </div>
          <div className="temple-columns">
            <div className="column column-1"></div>
            <div className="column column-2"></div>
            <div className="column column-3"></div>
            <div className="column column-4"></div>
            <div className="column column-5"></div>
            <div className="column column-6"></div>
          </div>
          <div className="temple-base"></div>
        </div>
        
        {/* Hermes Messenger God */}
        <div className="goddess hermes" style={{ transform: `translateY(${scrollY * 0.15}px)` }}>
          <div className="goddess-head">
            <div className="goddess-helmet">
              <div className="winged-helmet"></div>
            </div>
            <div className="goddess-face">
              <div className="goddess-eye left"></div>
              <div className="goddess-eye right"></div>
            </div>
          </div>
          <div className="goddess-body">
            <div className="goddess-toga"></div>
            <div className="winged-sandals">
              <div className="wing left"></div>
              <div className="wing right"></div>
            </div>
          </div>
          <div className="goddess-weapons">
            <div className="caduceus"></div>
          </div>
        </div>
        
        {/* Scroll of Knowledge */}
        <div className="scroll" style={{ transform: `translateY(${scrollY * 0.08}px)` }}>
          <div className="scroll-paper">
            <div className="scroll-text">Knowledge</div>
          </div>
          <div className="scroll-ends">
            <div className="scroll-end left"></div>
            <div className="scroll-end right"></div>
          </div>
        </div>
        
        {/* Floating symbols */}
        <div className="greek-symbol symbol-1" style={{ transform: `translateY(${scrollY * 0.2}px)` }}>📚</div>
        <div className="greek-symbol symbol-2" style={{ transform: `translateY(${scrollY * 0.12}px)` }}>🎓</div>
        <div className="greek-symbol symbol-3" style={{ transform: `translateY(${scrollY * 0.18}px)` }}>⚖️</div>
        
        {/* Scroll-based additional elements */}
        {scrollY > 500 && (
          <div className="scroll-revealed scroll-element-1">
            <div className="floating-scroll">📜</div>
          </div>
        )}
        
        {scrollY > 800 && (
          <div className="scroll-revealed scroll-element-2">
            <div className="floating-quill">✒️</div>
          </div>
        )}
        
        {scrollY > 1200 && (
          <div className="scroll-revealed scroll-element-3">
            <div className="floating-book">📖</div>
          </div>
        )}
      </div>
    ),
    
    projects: (
      <div className="greek-background greek-background-blur projects-bg" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
        {/* Mount Olympus */}
        <div className="mount-olympus" style={{ transform: `translateY(${scrollY * 0.05}px)` }}>
          <div className="mountain-peak peak-1"></div>
          <div className="mountain-peak peak-2"></div>
          <div className="mountain-peak peak-3"></div>
          <div className="mountain-base"></div>
        </div>
        
        {/* Zeus God of Thunder */}
        <div className="goddess zeus" style={{ transform: `translateY(${scrollY * 0.15}px)` }}>
          <div className="goddess-head">
            <div className="goddess-helmet">
              <div className="crown"></div>
            </div>
            <div className="goddess-face">
              <div className="goddess-eye left"></div>
              <div className="goddess-eye right"></div>
              <div className="goddess-beard"></div>
            </div>
          </div>
          <div className="goddess-body">
            <div className="goddess-toga"></div>
            <div className="thunder-clouds">
              <div className="cloud-bolt"></div>
            </div>
          </div>
          <div className="goddess-weapons">
            <div className="thunderbolt"></div>
          </div>
        </div>
        
        {/* Floating project achievements */}
        <div className="achievement achievement-1" style={{ transform: `translateY(${scrollY * 0.08}px)` }}>
          <div className="achievement-medal">🥇</div>
          <div className="achievement-text">Kernel Dev</div>
        </div>
        <div className="achievement achievement-2" style={{ transform: `translateY(${scrollY * 0.12}px)` }}>
          <div className="achievement-medal">🥈</div>
          <div className="achievement-text">Security</div>
        </div>
        <div className="achievement achievement-3" style={{ transform: `translateY(${scrollY * 0.18}px)` }}>
          <div className="achievement-medal">🥉</div>
          <div className="achievement-text">AI/ML</div>
        </div>
        
        {/* Lightning effects */}
        <div className="lightning-effect lightning-1" style={{ transform: `translateY(${scrollY * 0.25}px)` }}></div>
        <div className="lightning-effect lightning-2" style={{ transform: `translateY(${scrollY * 0.22}px)` }}></div>
        <div className="lightning-effect lightning-3" style={{ transform: `translateY(${scrollY * 0.28}px)` }}></div>
        
        {/* Scroll-based additional elements */}
        {scrollY > 500 && (
          <div className="scroll-revealed scroll-element-1">
            <div className="floating-trophy">🏆</div>
          </div>
        )}
        
        {scrollY > 800 && (
          <div className="scroll-revealed scroll-element-2">
            <div className="floating-code">💻</div>
          </div>
        )}
        
        {scrollY > 1200 && (
          <div className="scroll-revealed scroll-element-3">
            <div className="floating-rocket">🚀</div>
          </div>
        )}
      </div>
    ),
    
    skills: (
      <div className="greek-background greek-background-blur skills-bg" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
        {/* Forge of Hephaestus */}
        <div className="forge" style={{ transform: `translateY(${scrollY * 0.05}px)` }}>
          <div className="forge-building">
            <div className="forge-roof"></div>
            <div className="forge-walls">
              <div className="forge-door"></div>
              <div className="forge-window"></div>
            </div>
          </div>
          <div className="forge-fire">
            <div className="fire-flame flame-1"></div>
            <div className="fire-flame flame-2"></div>
            <div className="fire-flame flame-3"></div>
          </div>
        </div>
        
        {/* Hephaestus God of Craftsmanship */}
        <div className="goddess hephaestus" style={{ transform: `translateY(${scrollY * 0.15}px)` }}>
          <div className="goddess-head">
            <div className="goddess-helmet">
              <div className="smith-cap"></div>
            </div>
            <div className="goddess-face">
              <div className="goddess-eye left"></div>
              <div className="goddess-eye right"></div>
            </div>
          </div>
          <div className="goddess-body">
            <div className="goddess-toga"></div>
            <div className="smith-apron"></div>
          </div>
          <div className="goddess-weapons">
            <div className="hammer"></div>
            <div className="anvil"></div>
          </div>
        </div>
        
        {/* Floating tools and skills */}
        <div className="skill-tool tool-1" style={{ transform: `translateY(${scrollY * 0.08}px)` }}>⚙️</div>
        <div className="skill-tool tool-2" style={{ transform: `translateY(${scrollY * 0.12}px)` }}>🔧</div>
        <div className="skill-tool tool-3" style={{ transform: `translateY(${scrollY * 0.18}px)` }}>💡</div>
        <div className="skill-tool tool-4" style={{ transform: `translateY(${scrollY * 0.22}px)` }}>🎨</div>
        
        {/* Skill progress bars styled as Greek columns */}
        <div className="skill-column column-1" style={{ transform: `translateY(${scrollY * 0.25}px)` }}>
          <div className="column-fill"></div>
        </div>
        <div className="skill-column column-2" style={{ transform: `translateY(${scrollY * 0.28}px)` }}>
          <div className="column-fill"></div>
        </div>
        <div className="skill-column column-3" style={{ transform: `translateY(${scrollY * 0.32}px)` }}>
          <div className="column-fill"></div>
        </div>
        
        {/* Scroll-based additional elements */}
        {scrollY > 500 && (
          <div className="scroll-revealed scroll-element-1">
            <div className="floating-gear">⚙️</div>
          </div>
        )}
        
        {scrollY > 800 && (
          <div className="scroll-revealed scroll-element-2">
            <div className="floating-wrench">🔧</div>
          </div>
        )}
        
        {scrollY > 1200 && (
          <div className="scroll-revealed scroll-element-3">
            <div className="floating-lightbulb">💡</div>
          </div>
        )}
      </div>
    ),
    
    contact: (
      <div className="greek-background greek-background-blur contact-bg" style={{ transform: `translateY(${scrollY * 0.1}px)` }}>
        {/* Temple of Communication */}
        <div className="communication-temple" style={{ transform: `translateY(${scrollY * 0.05}px)` }}>
          <div className="temple-roof">
            <div className="temple-pediment"></div>
          </div>
          <div className="temple-columns">
            <div className="column column-1"></div>
            <div className="column column-2"></div>
            <div className="column column-3"></div>
            <div className="column column-4"></div>
          </div>
          <div className="temple-base"></div>
        </div>
        
        {/* Iris Goddess of Messages */}
        <div className="goddess iris" style={{ transform: `translateY(${scrollY * 0.15}px)` }}>
          <div className="goddess-head">
            <div className="goddess-helmet">
              <div className="rainbow-crown"></div>
            </div>
            <div className="goddess-face">
              <div className="goddess-eye left"></div>
              <div className="goddess-eye right"></div>
            </div>
          </div>
          <div className="goddess-body">
            <div className="goddess-toga"></div>
            <div className="rainbow-wings">
              <div className="wing left"></div>
              <div className="wing right"></div>
            </div>
          </div>
          <div className="goddess-weapons">
            <div className="message-scroll"></div>
          </div>
        </div>
        
        {/* Message bubbles styled as Greek vases */}
        <div className="message-vase vase-1" style={{ transform: `translateY(${scrollY * 0.08}px)` }}>
          <div className="vase-body">
            <div className="vase-text">Hello!</div>
          </div>
        </div>
        <div className="message-vase vase-2" style={{ transform: `translateY(${scrollY * 0.12}px)` }}>
          <div className="vase-body">
            <div className="vase-text">Let's talk!</div>
          </div>
        </div>
        
        {/* Connection lines as rainbow bridges */}
        <div className="rainbow-bridge bridge-1" style={{ transform: `translateY(${scrollY * 0.18}px)` }}></div>
        <div className="rainbow-bridge bridge-2" style={{ transform: `translateY(${scrollY * 0.22}px)` }}></div>
        <div className="rainbow-bridge bridge-3" style={{ transform: `translateY(${scrollY * 0.25}px)` }}></div>
        
        {/* Scroll-based additional elements */}
        {scrollY > 500 && (
          <div className="scroll-revealed scroll-element-1">
            <div className="floating-envelope">✉️</div>
          </div>
        )}
        
        {scrollY > 800 && (
          <div className="scroll-revealed scroll-element-2">
            <div className="floating-phone">📞</div>
          </div>
        )}
        
        {scrollY > 1200 && (
          <div className="scroll-revealed scroll-element-3">
            <div className="floating-chat">💬</div>
          </div>
        )}
      </div>
    )
  };

  return (
    <div className="greek-background-container">
      {backgrounds[page]}
    </div>
  );
};

export default GreekMythologyBackground; 