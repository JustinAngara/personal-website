import Card from '@src/components/ui/Card';
import GreekMythologyBackground from '@src/components/ui/GreekMythologyBackground';
import { SKILLS_DATA } from '@src/utils/constants';
import './SkillsPage.css';

const SkillsPage = () => {
  return (
    <div className="skills-page">
      <GreekMythologyBackground page="skills" />
      <div className="page-header">
        <h1 className="page-title">Skills & Expertise</h1>
        <p className="page-subtitle">My technical skills and areas of specialization</p>
      </div>

      <div className="skills-content">
        <div className="skills-intro">
          <Card variant="spacious" className="intro-card">
            <h2>Technical Proficiency</h2>
            <p>
              My skills span from low-level kernel development to modern web technologies, 
              with a strong focus on security, reverse engineering, and AI integration. 
              I'm constantly expanding my knowledge in emerging technologies and techniques.
            </p>
          </Card>
        </div>

        <div className="skills-sections">
          <div className="section">
            <h3>Programming Languages</h3>
            <div className="skills-grid">
              {SKILLS_DATA.languages.map((skill, index) => (
                <Card key={index} className="skill-card">
                  <div className="skill-icon">
                    {skill === 'C/C++' && '🔧'}
                    {skill === 'Java' && '☕'}
                    {skill === 'JavaScript/TypeScript' && '📜'}
                    {skill === 'Python' && '🐍'}
                  </div>
                  <h4>{skill}</h4>
                  
                </Card>
              ))}
            </div>
          </div>

          <div className="section">
            <h3>Technologies & Frameworks</h3>
            <div className="skills-grid">
              {SKILLS_DATA.technologies.map((skill, index) => (
                <Card key={index} className="skill-card">
                  <div className="skill-icon">
                    {skill === 'AWS' && '☁️'}
                    {skill === 'ReactJS' && '⚛️'}
                    {skill === 'Springboot' && '🍃'}
                    {skill === 'Flask' && '🔥'}
                    {skill === 'MongoDB' && '🍃'}
                    {skill === 'MySQL' && '🐬'}
                    {skill === 'RESTful API' && '🔗'}
                    {skill === 'WebSocket' && '📡'}
                    {skill === 'OpenCV' && '👁️'}
                    {skill === 'Unity' && '🎮'}
                    {skill === 'OpenAI/GPT' && '🤖'}
                  </div>
                  <h4>{skill}</h4>
                  
                </Card>
              ))}
            </div>
          </div>

          <div className="section">
            <h3>Concepts & Expertise</h3>
            <div className="skills-grid">
              {SKILLS_DATA.concepts.map((skill, index) => (
                <Card key={index} className="skill-card">
                  <div className="skill-icon">
                    {skill === 'Database Theory & Security' && '🔒'}
                    {skill === 'Git' && '📚'}
                    {skill === 'Image Processing' && '🖼️'}
                    {skill === 'Computer Vision' && '👁️'}
                    {skill === 'Process Injection' && '💉'}
                    {skill === 'Kernel Development' && '⚙️'}
                    {skill === 'Reverse Engineering' && '🔍'}
                    {skill === 'Automation' && '⚡'}
                    {skill === 'AR/VR Development' && '🥽'}
                  </div>
                  <h4>{skill}</h4>
            
                </Card>
              ))}
            </div>
          </div>

          <div className="section">
            <h3>Areas of Specialization</h3>
            <div className="specialization-grid">
      
              <Card className="specialization-card">
                <div className="specialization-icon">🌐</div>
                <h4>Full-Stack Development</h4>
                <p>Modern web applications using React, Flask backends, RESTful APIs, WebSockets, and database integration with security best practices.</p>
              </Card>
              
              <Card className="specialization-card">
                <div className="specialization-icon">🔧</div>
                <h4>Kernel Development</h4>
                <p>Windows kernel drivers, memory protection systems, SSDT hooking, and low-level system programming with expertise in Ring-0 operations.</p>
              </Card>
              <Card className="specialization-card">
                <div className="specialization-icon">🔍</div>
                <h4>Reverse Engineering</h4>
                <p>System analysis, process injection techniques, memory manipulation, and security vulnerability research with hands-on experience in anti-cheat systems.</p>
              </Card>
      
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage; 