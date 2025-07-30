import Card from '@src/components/ui/Card';

const Education = ({ EDUCATION }) =>{
    
    return (
        <div className="education-grid">
            <Card className="education-card">
            <div className="education-icon">🎓</div>
            <h4>{EDUCATION.university}</h4>
            <p className="degree">{EDUCATION.degree}</p>
            <p className="graduation">Expected: {EDUCATION.graduation}</p>
            <ul className="education-highlights">
                {EDUCATION.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
                ))}
            </ul>
            </Card>
            <Card className="education-card">
            <div className="education-icon">⚡</div>
            <h4>{EDUCATION.bootcamp.name}</h4>
            <p className="degree">Software Engineering Bootcamp</p>
            <p className="graduation">Status: {EDUCATION.bootcamp.status}</p>
            </Card>
        </div>
    );
}
export default Education