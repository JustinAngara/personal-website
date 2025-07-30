import Card from '@src/components/ui/Card';

const MyActions = () => {
    return (
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
    );
}
export default MyActions