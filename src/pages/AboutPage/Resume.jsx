import Card from '@src/components/ui/Card';
import Button from '@src/components/ui/Button';
import { Container } from '@mui/material';
import resume from '@src/assets/T_JUSTIN_ANGARA.pdf';

const Resume = ({ PERSONAL_INFO }) => {
    return (
        <div className="resume-section">
            <div className="resume-actions">
                <Card className="actions-card">
                    <h4>Justin Angara's Resume</h4>
                    <p>View my complete professional experience, skills, and achievements.</p>
                    <div className="action-buttons">
                    <Button 
                        variant="primary" 
                        size="large"
                        onClick={() => window.open(resume, '_blank')}
                    >
                        Download PDF
                    </Button>
                    <Button 
                        variant="outline" 
                        size="large"
                        onClick={() => window.open(`mailto:${PERSONAL_INFO.email}?subject=Resume Request`, '_blank')}
                    >
                        Request Copy
                    </Button>
                    </div>
                </Card>
                </div>

                <div className="pdf-viewer-container">
                <Card className="pdf-card">
                    <div className="pdf-header">
                        <h4>Resume Preview</h4>
                        <p>View your resume directly in the browser</p>
                    </div>
                    
                    <div className="pdf-viewer">
                        <Container sx={{bgcolor:'#111111', mt:2}} maxWidth="lg">
                            <embed width="100%" height="700" src={resume} type="application/pdf"></embed>
                        </Container>
                
                    </div>
                </Card>
            </div>
        </div>
    );
}


export default Resume;