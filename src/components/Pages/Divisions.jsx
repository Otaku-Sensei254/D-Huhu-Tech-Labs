// Divisions.jsx
import React from 'react'
import '../styles/divisions.css'
import cyberSecurityImg from '../../assets/images/cyber-defence.jpg'
import blockchainImg from '../../assets/images/blockchain.jpg'
import webWorksImg from '../../assets/images/webworks-dev.jpg'
import techSolutionsImg from '../../assets/images/tech-solutions.jpg'
import revolutionizingImg from '../../assets/images/revolutionizing.jpg'
import innovatingImg from '../../assets/images/innovating.jpg'
import empoweringImg from '../../assets/images/empowering.jpg'
import scalabilityImg from '../../assets/images/scalability.jpg'
import avatar1 from '../../assets/images/avator.jpg'
import avatar2 from '../../assets/images/avator.jpg'
import avatar3 from '../../assets/images/avator.jpg'
import avatar4 from '../../assets/images/avator.jpg'
import avatar5 from '../../assets/images/avator.jpg'
import { Link } from 'react-router-dom'

const Divisions = () => {
  return (
    <div className="divisions-page">
      {/* Hero Section */}
      <section className="divisions-hero">
        <div className="divisions-hero-content">
          <div className="hero-badge">DIVISION OVERVIEW</div>
          
          <h1 className="divisions-hero-title">
            SECUREFIX.KE, CHAINFORGE LABS, WEBWORKS
          </h1>
          
          <p className="divisions-hero-description">
            Explore our specialized divisions: SecureFixKe for robust cybersecurity, ChainForge Labs for 
            cutting-edge blockchain, and WebWorks for dynamic web development. Each offers innovative 
            solutions tailored for modern business challenges.
          </p>

          {/* Avatar List */}
          <div className="divisions-avatar-list">
            <img src={avatar1} alt="Team member" className="divisions-avatar" />
            <img src={avatar2} alt="Team member" className="divisions-avatar" />
            <img src={avatar3} alt="Team member" className="divisions-avatar" />
            <img src={avatar4} alt="Team member" className="divisions-avatar" />
            <img src={avatar5} alt="Team member" className="divisions-avatar" />
          </div>

          {/* Hero Buttons */}
          <div className="divisions-hero-buttons">
            <button className="divisions-primary-btn">
              <svg width="16" height="16" viewBox="0 0 448 512" fill="currentColor">
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
              </svg>
              <span><Link to='/about'>Learn More</Link></span>
            </button>
            <button className="divisions-secondary-btn">
              <svg width="16" height="16" viewBox="0 0 448 512" fill="currentColor">
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
              </svg>
              <span><Link to='/contact'>Contact Us</Link></span>
            </button>
          </div>
        </div>
      </section>

      {/* Cybersecurity Solutions Section */}
      <section className="divisions-solutions">
        <div className="solutions-container">
          <div className="solutions-header">
            <h2 className="solutions-title">Explore Cybersecurity Solutions</h2>
            <p className="solutions-subtitle">Innovative Digital Security Services</p>
            <p className="solutions-description">
              SecureFixKe, ChainForge Labs, and WebWorks offer cybersecurity solutions, blockchain 
              innovations, and scalable web services tailored for modern businesses.
            </p>
          </div>

          <div className="solutions-grid">
            {/* SecureFixKe Card */}
            <div className="solution-card">
              <div className="solution-image">
                <img src={cyberSecurityImg} alt="SecureFixKe - Cyber Defense Leader" />
              </div>
              <div className="solution-content">
                <h3 className="solution-card-title">SecureFixKe - Cyber Defense Leader</h3>
                <p className="solution-card-description">
                  Comprehensive cybersecurity services for endpoint protection, risk assessments, 
                  and enhanced digital safety.
                </p>
              </div>
            </div>

            {/* ChainForge Labs Card */}
            <div className="solution-card solution-card-large">
              <div className="solution-image">
                <img src={blockchainImg} alt="ChainForge Labs - Blockchain Innovators" />
              </div>
              <div className="solution-content">
                <h3 className="solution-card-title">ChainForge Labs - Blockchain Innovators</h3>
              </div>
            </div>

            {/* WebWorks Card */}
            <div className="solution-card">
              <div className="solution-image">
                <img src={webWorksImg} alt="WebWorks - Scalable Web Services" />
              </div>
              <div className="solution-content">
                <h3 className="solution-card-title">WebWorks - Scalable Web Services</h3>
                <p className="solution-card-description">
                  Providing versatile web development and maintenance for businesses seeking 
                  growth and security.
                </p>
              </div>
            </div>

            {/* Tailored Tech Solutions Card */}
            <div className="solution-card">
              <div className="solution-image">
                <img src={techSolutionsImg} alt="Discover Tailored Tech Solutions" />
              </div>
              <div className="solution-content">
                <h3 className="solution-card-title">Discover Tailored Tech Solutions</h3>
                <p className="solution-card-description">
                  Partner with us for customized technology solutions driving success and 
                  security for your ventures.
                </p>
              </div>
            </div>
          </div>

          <button className="solutions-learn-more">Learn More</button>
        </div>
      </section>

      {/* Blockchain Technology Section */}
      <section className="blockchain-section">
        <div className="blockchain-container">
          <div className="blockchain-header">
            <h2 className="blockchain-title">Powering blockchain technology</h2>
            <p className="blockchain-description">
              Explore SecureFixKe's pioneering security solutions, ChainForge Labs' advanced blockchain 
              innovation, and WebWorks' digital transformations tailored for modern enterprises.
            </p>
          </div>

          <div className="blockchain-grid">
            {/* Revolutionizing Cybersecurity */}
            <div className="blockchain-card">
              <div className="blockchain-image">
                <img src={revolutionizingImg} alt="Revolutionizing Cybersecurity with Blockchain" />
              </div>
              <div className="blockchain-content">
                <h3 className="blockchain-card-title">Revolutionizing Cybersecurity with Blockchain</h3>
                <p className="blockchain-card-description">
                  SecureFixKe delivers advanced cybersecurity solutions leveraging blockchain to 
                  ensure ultimate data protection.
                </p>
              </div>
            </div>

            {/* Innovating Decentralized Applications */}
            <div className="blockchain-card blockchain-card-large">
              <div className="blockchain-image">
                <img src={innovatingImg} alt="Innovating Decentralized Applications" />
              </div>
              <div className="blockchain-content">
                <h3 className="blockchain-card-title">Innovating Decentralized Applications</h3>
                <p className="blockchain-card-description">
                  ChainForge Labs crafts state-of-the-art DApps and robust blockchain ecosystems 
                  for futuristic enterprise applications.
                </p>
              </div>
            </div>

            {/* Empowering Businesses Online */}
            <div className="blockchain-card">
              <div className="blockchain-image">
                <img src={empoweringImg} alt="Empowering Businesses Online" />
              </div>
              <div className="blockchain-content">
                <h3 className="blockchain-card-title">Empowering Businesses Online</h3>
                <p className="blockchain-card-description">
                  WebWorks specializes in scalable web development, transforming businesses with 
                  innovative and intelligent solutions.
                </p>
              </div>
            </div>

            {/* Seamless Integration */}
            <div className="blockchain-card">
              <div className="blockchain-image">
                <img src={scalabilityImg} alt="Seamless Integration and Scalability" />
              </div>
              <div className="blockchain-content">
                <h3 className="blockchain-card-title">Seamless Integration and Scalability</h3>
                <p className="blockchain-card-description">
                  Our cutting-edge blockchain and web technologies ensure seamless integration 
                  and unmatched scalability.
                </p>
              </div>
            </div>
          </div>

          <button className="blockchain-learn-more">Learn More</button>
        </div>
      </section>

      {/* WebWorks Packages Section */}
      <section className="packages-section">
        <div className="packages-container">
          <div className="packages-header">
            <div className="packages-badge">
              <span className="badge-new">NEW</span>
              <span className="badge-text">Web Development Services</span>
            </div>
            <h2 className="packages-title">WebWorks Packages</h2>
            <p className="packages-subtitle">Basics to Solutions</p>
            <p className="packages-description">
              Explore our range of tailored WebWorks packages designed to meet the diverse needs of 
              businesses, from startups to established enterprises. Each package is crafted to deliver 
              scalable and innovative web development solutions, ensuring your online presence is both 
              secure and efficient.
            </p>
          </div>

          <div className="packages-grid">
            {/* Basic Starter Package */}
            <div className="package-card">
              <div className="package-header">
                <h4 className="package-name">Basic Starter</h4>
                <div className="package-price">
                  <span className="price-amount">$15</span>
                  <span className="price-period">per month</span>
                </div>
                <p className="package-tagline">Ideal for small businesses and independent projects.</p>
              </div>
              <button className="package-button">Get Started</button>
              <div className="package-features">
                <h5 className="features-title">INCLUSIONS</h5>
                <p className="features-subtitle">Perfect for starting your web development journey...</p>
                <ul className="features-list">
                  <li>✓ Custom website up to 5 pages</li>
                  <li>✓ Basic SEO optimization</li>
                  <li>✓ Up to 5 GB hosting space</li>
                  <li>✓ Email support</li>
                  <li>✓ Responsive designs</li>
                </ul>
              </div>
            </div>

            {/* Pro Package */}
            <div className="package-card package-card-featured">
              <div className="package-popular-badge">
                <span>Pro Package</span>
                <span className="most-popular">Most Popular</span>
              </div>
              <div className="package-header">
                <div className="package-price">
                  <span className="price-amount">$50</span>
                  <span className="price-period">per month</span>
                </div>
                <p className="package-tagline">Advanced plan suitable for scaling businesses.</p>
              </div>
              <button className="package-button package-button-primary">Get Pro</button>
              <div className="package-features">
                <h5 className="features-title">INCLUSIONS</h5>
                <p className="features-subtitle">Take your business to the next level...</p>
                <ul className="features-list">
                  <li>✓ Custom website up to 15 pages</li>
                  <li>✓ Advanced SEO optimization</li>
                  <li>✓ Up to 50 GB hosting space</li>
                  <li>✓ Priority email support</li>
                  <li>✓ Custom analytics dashboard</li>
                </ul>
              </div>
            </div>

            {/* Enterprise Package */}
            <div className="package-card">
              <div className="package-header">
                <h4 className="package-name">Enterprise</h4>
                <div className="package-price">
                  <span className="price-amount">$100</span>
                  <span className="price-period">per month</span>
                </div>
                <p className="package-tagline">Comprehensive solutions for enterprises.</p>
              </div>
              <button className="package-button">Contact Us</button>
              <div className="package-features">
                <h5 className="features-title">INCLUSIONS</h5>
                <p className="features-subtitle">Customization and scalability at its best...</p>
                <ul className="features-list">
                  <li>✓ Unlimited webpages</li>
                  <li>✓ Full-stack web development</li>
                  <li>✓ Dedicated hosting and support</li>
                  <li>✓ Advanced reporting and analytics</li>
                  <li>✓ Custom integrations for business tools</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Divisions