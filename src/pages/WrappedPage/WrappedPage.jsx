import React, { useState } from 'react';
import GreekMythologyBackground from '@src/components/ui/GreekMythologyBackground';
import './WrappedPage.css';

const slides = [
  {
    title: "Top Builds",
    description: "Your most impressive hacking drops.",
    gradient: "linear-gradient(135deg, #667eea, #764ba2)",
    content: (
      <div className="slide-content">
        <span className="reveal-line">Anti-Cheat for Online Exams</span>
        <span className="reveal-line">Fortnite & Valorant Hacking</span>
        <span className="reveal-line">Chess.com Stockfish Auto player</span>
        <span className="reveal-line">Clash Royale Enemy Elixr Tracker</span>
      </div>
    ),
  },
  {
    title: "Most Used Tools",
    description: "These tools practically had your fingerprints burned in.",
    gradient: "linear-gradient(135deg, #00c6ff, #0072ff)",
    content: (
      <div className="slide-content">
        <span className="reveal-line">VSCode</span>
        <span className="reveal-line">GitHub</span>
        <span className="reveal-line">Windows Kernel Debugger</span>
        <span className="reveal-line">JCPicker</span>
        <span className="reveal-line">Gemini API</span>
      </div>
    ),
  },
  {
    title: "Total Coding Time",
    description: "You wrote enough code to crash a compiler... or two.",
    gradient: "linear-gradient(135deg, #ff758c, #ff7eb3)",
    content: (
      <div className="slide-content">
        <span className="reveal-line">≈ 1,800+ hours across</span>
        <span className="reveal-line">C++</span>
        <span className="reveal-line">C</span>
        <span className="reveal-line">Java</span>
        <span className="reveal-line">JavaScript</span>
      </div>
    ),
  },
  {
    title: "Favorite Tech Stack",
    description: "Your go-to weaponry for hackathons and solo conquests.",
    gradient: "linear-gradient(135deg, #43e97b, #38f9d7)",
    content: (
      <div className="slide-content">
        <span className="reveal-line">React + Tailwind</span>
        <span className="reveal-line">JavaCV</span>
        <span className="reveal-line">IMGUI</span>
        <span className="reveal-line">and the occasional Claude punch</span>
      </div>
    ),
  },
  {
    title: "AI Overlord Score",
    description: "When AI met Justin... it took notes.",
    gradient: "linear-gradient(135deg, #f7971e, #ffd200)",
    content: (
      <div className="share-card">
        <h2 className="reveal-line">2025 Dev Wrapped</h2>
        <p className="reveal-line">Top Project: Anti-Cheat for Online Exams</p>
        <p className="reveal-line">Most Rogue: Chess.com Auto-Stockfish</p>
        <p className="reveal-line">Total Hours: ~1,800+</p>
        <button
          className="share-btn"
          onClick={() => alert('Real developers deploy. You just did.')}>
          Share
        </button>
      </div>
    ),
  },
];

const WrappedPage = () => {
  const [current, setCurrent] = useState(0);
  const [slideTransition, setSlideTransition] = useState(false);

  // Helper to handle transitions
  const goToSlide = (nextIdx) => {
    setSlideTransition(true);
    setTimeout(() => {
      setCurrent(nextIdx);
      setSlideTransition(false);
    }, 350); // Match animation duration
  };

  const handleNext = () => {
    goToSlide((current + 1) % slides.length);
  };

  const handlePrev = () => {
    goToSlide((current - 1 + slides.length) % slides.length);
  };

  // Touch events for swipe
  let touchStartX = null;
  const onTouchStart = (e) => { touchStartX = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (!touchStartX) return;
    const touchEndX = e.changedTouches[0].clientX;
    if (touchEndX - touchStartX > 50) handlePrev();
    else if (touchStartX - touchEndX > 50) handleNext();
    touchStartX = null;
  };

  return (
  <div
    className="wrapped-story"
    style={{ background: slides[current].gradient }}
    onClick={handleNext}
    onTouchStart={onTouchStart}
    onTouchEnd={onTouchEnd}
  >
    <div className="gradient-animate" />
    <GreekMythologyBackground page="contact" />
    <div className={`story-slide${slideTransition ? ' slide-fade' : ''}`}>
      <h1 className="story-title">{slides[current].title}</h1>
      <p className="story-desc">{slides[current].description}</p>
      <div key={current}>
        {slides[current].content}
      </div>
      <div className="story-progress">
        {slides.map((_, i) => (
          <span key={i} className={i === current ? "dot active" : "dot"} />
        ))}
      </div>
    </div>
  </div>
  );
};

export default WrappedPage;