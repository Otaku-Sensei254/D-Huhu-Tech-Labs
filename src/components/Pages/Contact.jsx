import React, { useState } from 'react';
import { 
  FaEnvelope, 
  FaServer,
  FaPhone, 
  FaMapMarkerAlt, 
  FaPaperPlane, 
  FaUser, 
  FaCommentAlt, 
  FaWhatsapp, 
  FaShieldAlt, 
  FaLayerGroup, 
  FaGlobe,
  FaProjectDiagram,
  FaDollarSign
} from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
  const [result, setResult] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: 'cybersecurity',
    message: 'I am interested in learning more about...',
    projectType: 'new-project',
    budget: 'not-sure'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending....");
    const formDataToSend = new FormData();
    
    // Append form data
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });
    
    formDataToSend.append("access_key", "13b0a273-42bb-4565-985f-81dd4234104b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: 'Hello, I would like...',
          package: 'starter'
        });
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setResult("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>Have questions or want to discuss a project? We're here to help you bring your ideas to life!</p>
      </div>
      
      <div className="contact-content">
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="web3form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <div className="input-icon">
                  <FaUser className="input-icon__icon" />
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="John Doe" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="company">Company/Organization</label>
                <div className="input-icon">
                  <FaServer className="input-icon__icon" />
                  <input 
                    type="text" 
                    name="company" 
                    placeholder="Your company name" 
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <div className="input-icon">
                  <FaEnvelope className="input-icon__icon" />
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="your.email@example.com" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <div className="input-icon">
                  <FaPhone className="input-icon__icon" />
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="+254 700 000000" 
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>I'm interested in *</label>
              <div className="service-options">
                <label className="service-option">
                  <input 
                    type="radio" 
                    name="service" 
                    value="cybersecurity" 
                    checked={formData.service === 'cybersecurity'}
                    onChange={handleChange}
                  />
                  <span className="service-option-content">
                    <FaShieldAlt className="service-icon" />
                    <span>Cybersecurity Solutions</span>
                  </span>
                </label>
                
                <label className="service-option">
                  <input 
                    type="radio" 
                    name="service" 
                    value="blockchain" 
                    checked={formData.service === 'blockchain'}
                    onChange={handleChange}
                  />
                  <span className="service-option-content">
                    <FaLayerGroup className="service-icon" />
                    <span>Blockchain Development</span>
                  </span>
                </label>
                
                <label className="service-option">
                  <input 
                    type="radio" 
                    name="service" 
                    value="web" 
                    checked={formData.service === 'web'}
                    onChange={handleChange}
                  />
                  <span className="service-option-content">
                    <FaGlobe className="service-icon" />
                    <span>Web Development</span>
                  </span>
                </label>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="projectType">Project Type</label>
                <div className="input-icon">
                  <FaProjectDiagram className="input-icon__icon" />
                  <select 
                    name="projectType" 
                    value={formData.projectType}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="new-project">New Project</option>
                    <option value="existing-project">Existing Project</option>
                    <option value="consultation">Consultation</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="budget">Estimated Budget</label>
                <div className="input-icon">
                  <FaDollarSign className="input-icon__icon" />
                  <select 
                    name="budget" 
                    value={formData.budget}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="not-sure">Not sure yet</option>
                    <option value="1k-5k">$1,000 - $5,000</option>
                    <option value="5k-20k">$5,000 - $20,000</option>
                    <option value="20k-50k">$20,000 - $50,000</option>
                    <option value="50k-plus">$50,000+</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Tell us about your project *</label>
              <div className="input-icon">
                <FaCommentAlt className="input-icon__icon textarea-icon" />
                <textarea 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Describe your project requirements, timeline, and any specific needs..."
                  required
                ></textarea>
              </div>
            </div>

            <button type="submit" className="submit-btn">
              <FaPaperPlane className="btn-icon" /> Send Message
            </button>
            
            {result && <div className="form-result">{result}</div>}
          </form>
        </div>

        <div className="contact-info">
          <div className="info-item">
            <div className="info-icon">
              <FaEnvelope />
            </div>
            <div className="info-text">
              <h3>Email Us</h3>
              <a href="mailto:dhuhinc@gmail.com" className="contact-link">dhuhinc@gmail.com</a>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">
              <FaPhone />
            </div>
            <div className="info-text">
              <h3>Call Us</h3>
              <a href="tel:+254724064302" className="contact-link">+254 724 064 302</a>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">
              <FaMapMarkerAlt />
            </div>
            <div className="info-text">
              <h3>Visit Us</h3>
              <p>Nairobi, Kenya</p>
              <p>By appointment only</p>
            </div>
          </div>

          <div className="social-links">
            <h3>Visit Our Socials</h3>
            <ul>
              <li>
                <a href="https://www.instagram.com/dhuhuinc?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="social-icon instagram" />
                  <span>D-Huhu Inc</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/254724064302" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="social-icon whatsapp" />
                  <span>+254 724 064302</span>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/share/v/15Ysu628a5/" target="_blank" rel="noopener noreferrer">
                  <BsFacebook className="social-icon facebook" />
                  <span>D-Huhu Inc</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
