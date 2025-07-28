import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import GreekMythologyBackground from '../components/ui/GreekMythologyBackground';
import { PERSONAL_INFO } from '../utils/constants';
import './ProjectsPage.css';

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Kernel-level Windows Game State Analysis & Memory Protection System",
      description: "A sophisticated Windows kernel driver that intercepts memory operations across 10+ games with <0ms latency. Features advanced memory virtualization layer for security testing and scans 10,000+ memory structures to detect overflows and corruption vectors.",
      technologies: ["C/C++", "Ring-0 Programming", "Windows Kernel Development", "SSDT Hooking"],
      image: "🔧",
      liveUrl: "#",
      githubUrl: "https://github.com/JustinAngara/Kernel-based-Windows-State-System",
      featured: true,
      category: "Kernel Development"
    },
    {
      id: 2,
      title: "Full-stack & Low-level Anti-Cheat for Online Exams",
      description: "Comprehensive anti-cheat system with defensive and offensive testing capabilities. Monitors 100+ processes for injection techniques and implements 15+ evasion methods achieving 96% detection rate. Features React frontend with WebSocket monitoring.",
      technologies: ["Java", "C", "React TS", "Springboot", "OpenAI Integration", "Reverse Engineering"],
      image: "🛡️",
      liveUrl: "https://www.youtube.com/shorts/G9aQb5mFjbo",
      githubUrl: "https://github.com/JustinAngara/Whitehat-Hacking-Honorlock",
      featured: true,
      category: "Security"
    },
    {
      id: 3,
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Vite. Features smooth animations, vertical scrolling design, and cartoonish artwork inspired by HackIllinois.",
      technologies: ["React", "Vite", "CSS3", "JavaScript", "React Router"],
      image: "🎨",
      liveUrl: '#',
      githubUrl: 'https://github.com/JustinAngara?tab=repositories',
      featured: false,
      category: "Web Apps"
    },
    {
      id: 4,
      title: "Telecom Data Tools & AI/GPT Integration",
      description: "Python-based tools for parsing, cleaning, and transforming network configuration files in XML. Analyzes telecom parameters for 1000+ IDs and creates GPT-powered scripts for technical configuration explanations.",
      technologies: ["Python", "XML Processing", "OpenAI/GPT", "Data Visualization", "Telecom Systems"],
      image: "📡",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      category: "AI/ML"
    },
    {
      id: 5,
      title: "AR/CV Vehicle Condition Detection System",
      description: "Research project using AR/Computer Vision stacks (OpenCV & Unity) for vehicle condition detection in rental workflows. Built AI-assisted AR check-in flow demos and conducted user interviews for validation.",
      technologies: ["OpenCV", "Unity", "AR Development", "Computer Vision", "User Research"],
      image: "🚗",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      category: "AI/ML"
    },
    {
      id: 6,
      title: "Flask WebSocket Applications with AI Integration",
      description: "Modular Flask applications with HTML/Jinja, JavaScript, and WebSockets that integrate OpenAI tools. Includes authentication systems and SQLAlchemy database integration.",
      technologies: ["Flask", "WebSockets", "OpenAI", "SQLAlchemy", "JavaScript", "HTML/Jinja"],
      image: "🌐",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      category: "Full-Stack"
    }
  ];

  return (
    <div className="projects-page">
      <GreekMythologyBackground page="projects" />
      <div className="page-header">
        <h1 className="page-title">My Projects</h1>
        <p className="page-subtitle">Showcasing my latest work in kernel development, security, and AI integration</p>
      </div>

      <div className="projects-content">
        <div className="projects-intro">
          <Card variant="spacious" className="intro-card">
            <h2>Featured Projects</h2>
            <p>
              Here are some of my recent projects that demonstrate my expertise in kernel development, 
              reverse engineering, security systems, and AI integration. Each project showcases different 
              aspects of my technical skills and problem-solving approach.
            </p>
          </Card>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <Card key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <div className="project-image">
                <span className="project-emoji">{project.image}</span>
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-category">{project.category}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.liveUrl =='#' ? <div></div>: <Button variant="outline" size="small" onClick={() => window.open(project.liveUrl, '_blank')}>View Demo</Button>}
                  {project.githubUrl =='#' ? <div></div>: <Button variant="outline" size="small" onClick={() => window.open(project.githubUrl, '_blank')}>View Code</Button>}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="projects-cta">
          <Card className="cta-card">
            <h3>Interested in working together?</h3>
            <p>Let's discuss your next project in kernel development, security, or AI integration!</p>
            <Button variant="primary" size="large" onClick={() => window.open(`mailto:${PERSONAL_INFO.email}`, '_blank')}>
              Get In Touch
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage; 