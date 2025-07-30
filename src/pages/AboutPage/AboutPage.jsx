import Card from '@src/components/ui/Card';

import WorkExperience from './WorkExperience';
import Education from './Education';
import Resume from './Resume';

import GreekMythologyBackground from '@src/components/ui/GreekMythologyBackground';
import { PERSONAL_INFO, WORK_EXPERIENCE, EDUCATION } from '@src/utils/constants';
import './AboutPage.css';
import { useState } from 'react';

const AboutPage = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
  

  return (
    <div className="about-page">
      <GreekMythologyBackground page="about" />
      <div className="page-header">
        <h1 className="page-title">About Me</h1>
        <p className="page-subtitle">Get to know me better</p>
      </div>

      <div className="about-content">
        <div className="about-intro">
          <Card variant="spacious" className="intro-card">
            <div className="intro-content">
              <div className="intro-text">
                <h2>Hello! I'm {PERSONAL_INFO.name.split(' ')[0]}</h2>
                <p>
                  I'm a {PERSONAL_INFO.title.toLowerCase()} with a passion for reverse engineering, 
                  kernel development, and automation. Currently pursuing a double major in Computer Science 
                  and Economics at the University of Wisconsin-Madison, I specialize in building 
                  low-level systems and AI-powered solutions.
                </p>
                <p>
                  My expertise spans from Windows kernel driver development to full-stack applications, 
                  with a particular focus on security, computer vision, and process injection techniques. 
                  I love tackling complex technical challenges and creating innovative solutions.
                </p>
              </div>
              <div className="intro-stats">
                <div className="stat">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Pretty Awesome</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="about-sections">
          <div className="section">
            <h3>Resume</h3>
            <Resume PERSONAL_INFO={PERSONAL_INFO} numPages={numPages} pageNumber = {pageNumber} setPageNumber = {setPageNumber}/>
          </div>

          <div className="section">
            <h3>Work Experience</h3>
            <WorkExperience WORK_EXPERIENCE = { WORK_EXPERIENCE }/>
          </div>

          <div className="section">
            <h3>Education</h3>
            <Education EDUCATION={ EDUCATION }/>
          </div>

          <div className="section">
            <h3>What I Do</h3>
            <div className="services-grid">
              <Card className="service-card">
                <div className="service-icon">🔧</div>
                <h4>Kernel Development</h4>
                <p>Windows kernel drivers, memory protection systems, and low-level system programming.</p>
              </Card>
              <Card className="service-card">
                <div className="service-icon">🔍</div>
                <h4>Reverse Engineering</h4>
                <p>Analyzing systems, process injection techniques, and security vulnerability research.</p>
              </Card>
     
              <Card className="service-card">
                <div className="service-icon">🌐</div>
                <h4>Full-Stack Development</h4>
                <p>React applications, Flask backends, and RESTful APIs with modern web technologies.</p>
              </Card>
              <Card className="service-card">
                <div className="service-icon">👨‍🏫</div>
                <h4>Teaching & Mentoring</h4>
                <p>Computer science education, code review, and mentoring students in programming concepts.</p>
              </Card>
            </div>
          </div>

          <div className="section">
            <h3>My Values</h3>
            <div className="values-grid">
              <Card className="value-card">
                <h4>Technical Excellence</h4>
                <p>I strive for the highest quality in every line of code, from kernel drivers to web applications.</p>
              </Card>
              <Card className="value-card">
                <h4>Security-First</h4>
                <p>Understanding system vulnerabilities and building secure, robust solutions is my priority.</p>
              </Card>
 
              <Card className="value-card">
                <h4>Innovation</h4>
                <p>Pushing boundaries and creating solutions that solve real-world problems in unique ways.</p>
              </Card>
              <Card className="value-card">
                <h4>Knowledge Sharing</h4>
                <p>Passionate about teaching and mentoring others in computer science and programming concepts.</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 