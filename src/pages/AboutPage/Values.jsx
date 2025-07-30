import Card from '@src/components/ui/Card';

const Values = () =>{
    return (
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
    );
}
export default Values;