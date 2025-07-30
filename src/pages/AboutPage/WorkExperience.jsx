const WorkExperience = (props) => {
    // this annoying bug, WORK_EXPERIENCE alone is an object, you must go to the WORK_EXPERIENCE attribute

    return (
        <div className="timeline">
            {
                props.WORK_EXPERIENCE.map((job, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                        <h4>{job.period}</h4>
                        <h5>{job.title}</h5>
                        <p className="company-info">{job.company} • {job.location}</p>
                        <ul className="job-highlights">
                            {job.highlights.map((highlight, hIndex) => (
                            <li key={hIndex}>{highlight}</li>
                            ))}
                        </ul>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default WorkExperience;