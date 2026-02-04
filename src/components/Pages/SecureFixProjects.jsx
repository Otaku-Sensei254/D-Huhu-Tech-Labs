// SecureFixProjects.jsx
import React from 'react'
import '../styles/WebWorksProjects.css'
import phishnetImage from '../../assets/images/hook3.jpeg'
import { Link } from 'react-router-dom'

const SecureFixProjects = () => {
  return (
    <div className="webworks-projects-container">
      {/* Header Section */}
      <section className="projects-hero">
        <div className="projects-hero-content">
          <div className="hero-badge">SECUREFIX PROJECTS</div>
          <h1 className="projects-hero-title">
            Our Cybersecurity Portfolio
          </h1>
          <p className="projects-hero-description">
            Explore our cutting-edge cybersecurity solutions and threat detection systems. 
            From phishing detection to comprehensive security platforms, we build robust defenses 
            for the digital age.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-main">
        <div className="projects-container">
          <div className="projects-grid">
            {/* PhishNet Exchange */}
            <div className="project-card">
              <div className="project-image">
                <img src={phishnetImage} alt="PhishNet Exchange" />
                <div className="project-overlay">
                  <div className="project-content">
                    <h3>PhishNet Exchange</h3>
                    <p>Advanced cybersecurity platform for detecting and preventing phishing attacks, protecting organizations from sophisticated email threats and social engineering attacks.</p>
                    <a href="https://phish-net-exchange-mk2.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">
                      <span>View Project</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M17 7H7M17 7V17"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h4>PhishNet Exchange</h4>
                <p>Cybersecurity threat detection platform</p>
                <div className="project-tags">
                  <span className="tag">Cybersecurity</span>
                  <span className="tag">Threat Detection</span>
                  <span className="tag">Phishing Protection</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Section */}
          <section className="projects-cta">
            <h2>Ready to Enhance Your Security?</h2>
            <p>
              Partner with SecureFix to protect your digital assets and strengthen your cybersecurity posture. 
              Our expert team delivers tailored solutions for your unique security challenges.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-primary-btn">
                <svg width="16" height="16" viewBox="0 0 448 512" fill="currentColor">
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                </svg>
                Get Security Consultation
              </a>
              <a href="/divisions" className="cta-secondary-btn">
                <svg width="16" height="16" viewBox="0 0 448 512" fill="currentColor">
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
                </svg>
                View All Divisions
              </a>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}

export default SecureFixProjects
