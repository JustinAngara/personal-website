import Card from '@src/components/ui/Card';

const Intro = ({ PERSONAL_INFO }) =>{
    return (
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
    );
}
export default Intro;