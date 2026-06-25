import React from 'react'
import '../styles/WebWorksProjects.css'
import kuzanaImage from '../../assets/images/Kuzana.png'
import { Link } from 'react-router-dom'

const ChainForgeProjects = () => {
  return (
    <div className="webworks-projects-container">
      <section className="projects-hero">
        <div className="projects-hero-content">
          <div className="hero-badge">CHAINFORGE LABS PROJECTS</div>
          <h1 className="projects-hero-title">
            Our Blockchain Portfolio
          </h1>
          <p className="projects-hero-description">
            Explore our decentralized applications, autonomous agent ecosystems, and 
            blockchain-powered solutions that redefine trust, transparency, and efficiency.
          </p>
        </div>
      </section>

      <section className="projects-main">
        <div className="projects-container">
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <img src={kuzanaImage} alt="Handshake.ai" />
                <div className="project-overlay">
                  <div className="project-content">
                    <h3>Handshake.ai</h3>
                    <p>An innovation that leverages agent-to-agent autonomous connection between innovators looking to make meaningful and impactful connections on your behalf.</p>
                    <a href="https://web-xi-cyan-64.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">
                      <span>View Project</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M17 7H7M17 7V17"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h4>Handshake.ai</h4>
                <p>Agent-to-agent autonomous connection platform for innovators</p>
                <div className="project-tags">
                  <span className="tag">Blockchain</span>
                  <span className="tag">AI Agents</span>
                  <span className="tag">Decentralized</span>
                </div>
              </div>
            </div>
          </div>

          <section className="projects-cta">
            <h2>Have a Blockchain Idea?</h2>
            <p>
              Let's build the next decentralized innovation together. From smart contracts 
              to autonomous agents, we turn concepts into reality.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-primary-btn">
                <svg width="16" height="16" viewBox="0 0 448 512" fill="currentColor">
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                </svg>
                Start a Project
              </Link>
              <Link to="/divisions" className="cta-secondary-btn">
                <svg width="16" height="16" viewBox="0 0 448 512" fill="currentColor">
                  <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
                </svg>
                View All Divisions
              </Link>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}

export default ChainForgeProjects
