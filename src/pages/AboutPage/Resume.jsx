import Card from '@src/components/ui/Card';
import Button from '@src/components/ui/Button';

const Resume = (props) => {
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
                    onClick={() => window.open('/T_JUSTIN_ANGARA.pdf', '_blank')}
                >
                    Download PDF
                </Button>
                <Button 
                    variant="outline" 
                    size="large"
                    onClick={() => window.open(`mailto:${props.PERSONAL_INFO.email}?subject=Resume Request`, '_blank')}
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
                <Button 
                    variant="primary" 
                    size="large"
                    onClick={() => window.open('https://justinangara.github.io/personal-website/T_JUSTIN_ANGARA.pdf', '_blank')}
                >
                    Download PDF
                </Button>
                {props.numPages && (
                    <div className="pdf-pagination">
                    <Button
                        variant="outline"
                        size="small"
                        onClick={() => props.setPageNumber(prev => Math.max(prev - 1, 1))}
                        disabled={props.pageNumber <= 1}
                    >
                        Previous
                    </Button>
                    <span style={{ margin: '0 8px' }}>Page {props.pageNumber} of {props.numPages}</span>
                    <Button
                        variant="outline"
                        size="small"
                        onClick={() => props.setPageNumber(prev => Math.min(prev + 1, props.numPages))}
                        disabled={props.pageNumber >= props.numPages}
                    >
                        Next
                    </Button>
                    </div>
                )}
                </div>
            </Card>
            </div>
        </div>
    );
}


export default Resume;