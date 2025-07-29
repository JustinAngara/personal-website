import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import GreekMythologyBackground from '../components/ui/GreekMythologyBackground';
import { PERSONAL_INFO } from '../utils/constants';
import './ProjectsPage.css';
import projects from './ProjectData';

const ProjectsPage = () => {
   
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