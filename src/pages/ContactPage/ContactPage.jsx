import { useState } from 'react';
import Card from '@src/components/ui/Card';
import Button from '@src/components/ui/Button';
import GreekMythologyBackground from '@src/components/ui/GreekMythologyBackground';
import { CONTACT_INFO, SOCIAL_LINKS } from '@src/utils/constants';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    // For now, we'll just open the email client
    const mailtoLink = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <div className="contact-page">
      <GreekMythologyBackground page="contact" />
      <div className="page-header">
        <h1 className="page-title">Get In Touch</h1>
        <p className="page-subtitle">Let's discuss your next project in kernel development, security, or AI integration</p>
      </div>

      <div className="contact-content">
        <div className="contact-grid">
          <div className="contact-info-section">
            <Card variant="spacious" className="info-card">
              <h2>Contact Information</h2>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📱</div>
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <a href={`tel:${CONTACT_INFO.phone}`}>{CONTACT_INFO.phone}</a>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <h4>Location</h4>
                    <p>{CONTACT_INFO.location}</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">✅</div>
                  <div className="contact-text">
                    <h4>Availability</h4>
                    <p>{CONTACT_INFO.availability}</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="social-card">
              <h3>Connect With Me</h3>
              <div className="social-links">
                {SOCIAL_LINKS.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="social-link"
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-name">{social.name}</span>
                  </a>
                ))}
              </div>
            </Card>
          </div>

          <div className="contact-form-section">
            <Card variant="spacious" className="form-card">
              <h2>Send Me a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project inquiry, collaboration, etc."
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell me about your project, requirements, or any questions you have..."
                  ></textarea>
                </div>
                <Button type="submit" variant="primary" size="large" className="submit-btn">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>

        <div className="contact-cta">
          <Card className="cta-card">
            <h3>Ready to Start Your Project?</h3>
            <p>
              Whether you need kernel development expertise, security analysis, AI integration, 
              or full-stack development, I'm here to help bring your ideas to life.
            </p>
            <div className="cta-buttons">
              <Button variant="primary" size="large" onClick={() => window.open(`mailto:${CONTACT_INFO.email}`, '_blank')}>
                Start a Conversation
              </Button>
              <Button variant="outline" size="large" onClick={() => window.open(SOCIAL_LINKS[1].url, '_blank')}>
                Connect on LinkedIn
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 