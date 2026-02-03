// WebWorksProjects.jsx
import React from 'react'
import '../styles/WebWorksProjects.css'
import jabaliImage from '../../assets/images/jabali.jpeg'
import vibeflowImage from '../../assets/images/VF.png'
import { Link } from 'react-router-dom'

const WebWorksProjects = () => {
  return (
    <div className="webworks-projects-container">
      {/* Header Section */}
      <section className="projects-hero">
        <div className="projects-hero-content">
          <div className="hero-badge">WEBWORKS PROJECTS</div>
          <h1 className="projects-hero-title">
            Our Web Development Portfolio
          </h1>
          <p className="projects-hero-description">
            Explore our innovative web applications and platforms built with cutting-edge technologies. 
            From educational tools to social platforms, we create digital experiences that make an impact.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-main">
        <div className="projects-container">
          <div className="projects-grid">
            {/* Jabali Web App */}
            <div className="project-card">
              <div className="project-image">
                <img src={jabaliImage} alt="Jabali Web App" />
                <div className="project-overlay">
                  <div className="project-content">
                    <h3>Jabali Web App</h3>
                    <p>Interactive web application for autistic children, providing engaging learning experiences and therapeutic activities.</p>
                    <a href="https://jabali-web-app.vercel.app/home" target="_blank" rel="noopener noreferrer" className="project-link">
                      <span>View Project</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M17 7H7M17 7V17"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h4>Jabali Web App</h4>
                <p>Educational platform for autistic children</p>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">Education</span>
                  <span className="tag">Accessibility</span>
                </div>
              </div>
            </div>

            {/* VibeFlow Social Platform */}
            <div className="project-card">
              <div className="project-image">
                <img src={vibeflowImage} alt="VibeFlow Social Platform" />
                <div className="project-overlay">
                  <div className="project-content">
                    <h3>VibeFlow</h3>
                    <p>Social media platform connecting communities through seamless sharing, real-time interactions, and engaging content discovery.</p>
                    <a href="https://vibeflow.gigalixirapp.com" target="_blank" rel="noopener noreferrer" className="project-link">
                      <span>View Project</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M17 7H7M17 7V17"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h4>VibeFlow</h4>
                <p>Social media platform</p>
                <div className="project-tags">
                  <span className="tag">Social</span>
                  <span className="tag">Real-time</span>
                  <span className="tag">Community</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="projects-cta">
            <h2>Have a project in mind?</h2>
            <p>Let's build something amazing together</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-primary-btn">Start a Project</Link>
              <Link to="/divisions" className="cta-secondary-btn">Back to Divisions</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WebWorksProjects
