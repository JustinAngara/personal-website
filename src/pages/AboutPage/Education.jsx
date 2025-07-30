import Card from '@src/components/ui/Card';

const Education = (props) =>{
    
    return (
        <div className="education-grid">
            <Card className="education-card">
            <div className="education-icon">🎓</div>
            <h4>{props.EDUCATION.university}</h4>
            <p className="degree">{props.EDUCATION.degree}</p>
            <p className="graduation">Expected: {props.EDUCATION.graduation}</p>
            <ul className="education-highlights">
                {props.EDUCATION.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
                ))}
            </ul>
            </Card>
            <Card className="education-card">
            <div className="education-icon">⚡</div>
            <h4>{props.EDUCATION.bootcamp.name}</h4>
            <p className="degree">Software Engineering Bootcamp</p>
            <p className="graduation">Status: {props.EDUCATION.bootcamp.status}</p>
            </Card>
        </div>
    );
}
export default Education