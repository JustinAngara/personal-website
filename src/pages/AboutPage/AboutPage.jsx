
// imports for child components
import WorkExperience from './WorkExperience';
import Education from './Education';
import Resume from './Resume';
import Values from './Values';
import Intro from './Intro';
import MyActions from './MyActions';

// imports for background and constants
import GreekMythologyBackground from '@src/components/ui/GreekMythologyBackground';
import { PERSONAL_INFO, WORK_EXPERIENCE, EDUCATION } from '@src/utils/constants';
import './AboutPage.css';

const AboutPage = () => {


  return (
    
    <div className="about-page">
      <GreekMythologyBackground page="about" />
      <div className="page-header">
        <h1 className="page-title">About Me</h1>
        <p className="page-subtitle">Get to know me better</p>
      </div>


      <div className="about-content">
        {/* Introductory section */}
        <div className="about-intro">
          <Intro PERSONAL_INFO={PERSONAL_INFO} />
        </div>


        {/* Main sections of the About Page */}
        <div className="about-sections">
          <div className="section">
            <h3>Resume</h3>
            <Resume PERSONAL_INFO={PERSONAL_INFO} />

          </div>

          {/* WORK EXPERIENCE */}
          <div className="section">
            <h3>Work Experience</h3>
            <WorkExperience WORK_EXPERIENCE = { WORK_EXPERIENCE }/>
          </div>


          {/* EDUCATION */}
          <div className="section">
            <h3>Education</h3>
            <Education EDUCATION={ EDUCATION }/>
          </div>

          {/* MY ACTIONS */}
          <div className="section">
            <h3>What I Do</h3>
            <MyActions />
          </div>

          {/* VALUES */}
          <div className="section">
            <h3>My Values</h3>
            <Values />
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutPage; 