import styled from 'styled-components';
import Inset from '@/Common/PagesLayout/Inset.jsx';
import StaffList from './StaffList/StaffList.jsx';
import Video from './Video/Video.jsx';

const Staff = () => {
    return (
        <StaffStyled>
            <Inset>
                <h1>Projects</h1>

                <div className="article-container">
                    <h1>Ethical Analysis of the Honorlock Proctoring System</h1>

                    <h2>Project Motivation</h2>
                    <p>
                        The goal was not to “break” the system maliciously but rather to investigate the assumptions Honorlock makes about client-side control.
                        As a developer and systems researcher, I was curious whether user-end vulnerabilities could be used to weaken or neutralize the proctoring process.
                        This work falls under the category of ethical hacking, where the findings are used to highlight gaps, not exploit them for unfair advantage.
                    </p>

                    <h2>Technical Stack & Methodology</h2>
                    <ul>
                        <li>Java with JNA for native Windows calls</li>
                        <li>Secure overlays using <code>SetWindowDisplayAffinity</code></li>
                        <li>Process detection and UI reflection bypasses</li>
                    </ul>

                    <h2>Key Findings</h2>
                    <ul>
                        <li><strong>Client-Side Vulnerability:</strong> Honorlock assumes full trust in the client execution environment. However, root-level access or reflective API usage can bypass the capture process.</li>
                        <li><strong>No Server Validation:</strong> Visual overlays and keystroke signals can be manipulated without triggering alerts.</li>
                        <li><strong>UI-Based Injection:</strong> Overlays rendered on top of exam sessions can hide user activity while remaining invisible to Honorlock.</li>
                    </ul>

                    <h2>Project Structure</h2>
                    <p>
                        The project began as a research initiative into how client-side proctoring systems could be ethically bypassed.
                        It was developed in Java using JNA to interface with Windows APIs like <code>user32.dll</code>, specifically <code>SetWindowDisplayAffinity</code>.
                    </p>
                    <p>
                        Instead of a <code>JFrame</code>, I used a <code>JWindow</code> to create an invisible overlay on top of exam applications such as Chrome.
                        The window was made click-through, screen-recording proof, and did not require kernel access.
                    </p>
                    <p>
                        Using reflection, I accessed the <code>AWT</code> peer object to retrieve the <code>HWND</code> handle and passed it into native calls to enforce anti-capture behavior.
                        This allowed full control over what the user saw vs. what the proctoring software saw.
                    </p>

                    <h2>Demonstration</h2>
                    <p>
                        I tested this overlay on Notepad. From the user's perspective, Notepad appeared normal. But to Honorlock, the overlay made the screen invisible.
                        This proved that Java overlays can successfully mask screen activity without needing administrator rights or kernel hooks.
                    </p>

                    <h2>Challenges</h2>
                    <ul>
                        <li>Different Windows builds had inconsistent behavior for <code>SetWindowDisplayAffinity</code>.</li>
                        <li>Reflection access required relaxed JVM security policies.</li>
                        <li>Transparent topmost overlays caused rendering glitches that had to be smoothed out.</li>
                    </ul>

                    <h2>Future Work</h2>
                    <ul>
                        <li>A frontend React interface to remotely control the overlay via WebSockets or local HTTP.</li>
                        <li>Docker containerization for controlled test environments.</li>
                        <li>Research into plugin-based anti-cheat systems to detect GUI anomalies and hidden processes.</li>
                    </ul>

                    <h2>Conclusion</h2>
                    <p>
                        This project blends low-level systems programming, ethical security testing, and real-world impact analysis.
                        It demonstrates that client-side enforcement alone is insufficient in hostile environments.
                        Effective remote proctoring must include cryptographic validation, server-side checks, and anti-tamper protocols that assume the client cannot be trusted.
                    </p>

                    <p className="note">
                        All work conducted in isolation, solely for ethical and educational purposes. No exams were tampered with or compromised.
                    </p>

                    <p className="github-link">
                        <a href="https://github.com/JustinAngara/Whitehat-Hacking-Online-Proctoring-Systems" target="_blank" rel="noopener noreferrer">
                            📂 View the GitHub Repository
                        </a>
                    </p>

                    <p className="author">
                        Written by Justin Angara | Ethical Systems Research | Summer 2025
                    </p>
                </div>

                <StaffList />

                <div className="proj">
                    <h2>Chess MiniMax Algorithm <br /> (incorporated with real life moves and a table base)</h2>
                    <iframe
                        width="75%"
                        height="700"
                        src="//jsfiddle.net/AngaraJustin/dxqk26nv/223/embedded/result/"
                        allowFullScreen
                        allow="payment"
                        frameBorder="0"
                    ></iframe>
                </div>

                <div className="videos">
                    {/* Optional: Future videos */}
                </div>
            </Inset>
        </StaffStyled>
    );
};

export default Staff;

const StaffStyled = styled.div`
  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 14px;
  }

  h1 {
    padding-top: 50px;
  }

  .article-container {
    background-color: rgba(30, 30, 30, 0.7);
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    font-family: system-ui, sans-serif;
    font-size: 2rem;
    line-height: 1.6;
    max-width: 900px;
    margin: 2rem auto;
    color: #f1f1f1;

    h1 {
      font-size: 2.2rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    h2 {
      font-size: 2rem;
      margin-top: 2rem;
    }

    p {
      margin-top: 1rem;
    }

    ul {
      margin-left: 1.5rem;
      margin-top: 1rem;
    }

    li {
      margin-bottom: 0.5rem;
    }

    .note {
      margin-top: 1rem;
      font-style: italic;
    }

    .github-link {
      margin-top: 2rem;
    }

    .author {
      margin-top: 2rem;
      font-weight: bold;
    }
  }

  .proj {
    margin-top: 3rem;
    text-align: center;

    h2 {
      margin-bottom: 1rem;
    }
  }

  .videos {
    font-size: 2em;
    width: 70%;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
`;
