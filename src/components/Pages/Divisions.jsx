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
import jabaliImage from '../../assets/images/jabali.jpeg'
import vibeflowImage from '../../assets/images/VF.png'
import phishnetImage from '../../assets/images/hook3.jpeg'
import kuzanaImage from '../../assets/images/Kuzana.png'

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
                <div className="webworks-projects-preview">
                  <h4>Featured Projects:</h4>
                  <div className="mini-projects">
                    <div className="mini-project">
                      <img src={phishnetImage} alt="PhishNet Exchange" />
                      <div className="mini-project-info">
                        <h5>PhishNet Exchange</h5>
                        <p>Cybersecurity threat detection platform</p>
                        <a href="https://phish-net-exchange-mk2.vercel.app/" target="_blank" rel="noopener noreferrer">View →</a>
                      </div>
                    </div>
                  </div>
                  <Link to="/securefix-projects" className="view-all-projects">
                    View All Projects
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* ChainForge Labs Card */}
            <div className="solution-card solution-card-large">
              <div className="solution-image">
                <img src={blockchainImg} alt="ChainForge Labs - Blockchain Innovators" />
              </div>
              <div className="solution-content">
                <h3 className="solution-card-title">ChainForge Labs - Blockchain Innovators</h3>
                <p className="solution-card-description">
                  Building decentralized applications and autonomous agent ecosystems
                  for the next generation of secure, intelligent interaction.
                </p>
                <div className="webworks-projects-preview">
                  <h4>Featured Projects:</h4>
                  <div className="mini-projects">
                    <div className="mini-project">
                      <img src={kuzanaImage} alt="Handshake.ai" />
                      <div className="mini-project-info">
                        <h5>Handshake.ai</h5>
                        <p>Agent-to-agent autonomous connection platform for innovators</p>
                        <a href="https://web-xi-cyan-64.vercel.app/" target="_blank" rel="noopener noreferrer">View →</a>
                      </div>
                    </div>
                  </div>
                  <Link to="/chainforge-projects" className="view-all-projects">
                    View All Projects
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                  </Link>
                </div>
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
                <div className="webworks-projects-preview">
                  <h4>Featured Projects:</h4>
                  <div className="mini-projects">
                    <div className="mini-project">
                      <img src={jabaliImage} alt="Jabali Web App" />
                      <div className="mini-project-info">
                        <h5>Jabali Web App</h5>
                        <p>Educational platform for autistic children</p>
                        <a href="https://jabali-web-app.vercel.app/home" target="_blank" rel="noopener noreferrer">View →</a>
                      </div>
                    </div>
                    <div className="mini-project">
                      <img src={vibeflowImage} alt="VibeFlow" />
                      <div className="mini-project-info">
                        <h5>VibeFlow</h5>
                        <p>Social media platform</p>
                        <a href="https://vibeflow.gigalixirapp.com" target="_blank" rel="noopener noreferrer">View →</a>
                      </div>
                    </div>
                  </div>
                  <Link to="/webworks-projects" className="view-all-projects">
                    View All Projects
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                  </Link>
                </div>
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
            {/* Career Launch Portfolio Package */}
            <div className="package-card">
              <div className="package-header">
                <h4 className="package-name">🌟 Career Launch Portfolio</h4>
                <div className="package-price">
                  <span className="price-amount">From KES 10,000</span>
                </div>
              </div>
              <div className="package-features">
                <h5 className="features-title">Includes</h5>
                <ul className="features-list">
                  <li>✅ Modern Portfolio Website</li>
                  <li>✅ Up to 4 Sections (Home, About Me, Projects, Contact)</li>
                  <li>✅ Mobile Responsive Design</li>
                  <li>✅ CV/Resume Download Button</li>
                  <li>✅ Social Media Links</li>
                  <li>✅ GitHub Integration</li>
                  <li>✅ Contact Form</li>
                  <li>✅ Basic SEO Setup</li>
                  <li>✅ Free Deployment Assistance</li>
                </ul>
              </div>
              <div className="package-ideal">
                <h5 className="ideal-title">Ideal For</h5>
                <p className="ideal-text">University Students, Graduates, Developers, Designers, Cybersecurity Students, Data Analysts</p>
              </div>
              <button className="package-button">Get Started</button>
            </div>

            {/* Basic Starter Package */}
            <div className="package-card">
              <div className="package-header">
                <div className="package-price">
                  <span className="price-amount">KES 25,000</span>
                  <span className="price-student">(Student: KES 15,000)</span>
                </div>
                <p className="package-maintenance">Maintenance: KES 2,000/month</p>
              </div>
              <div className="package-features">
                <h5 className="features-title">Includes</h5>
                <ul className="features-list">
                  <li>✅ Up to 5 Pages</li>
                  <li>✅ Mobile Responsive Design</li>
                  <li>✅ Contact Form</li>
                  <li>✅ WhatsApp Integration</li>
                  <li>✅ Social Media Links</li>
                  <li>✅ Basic SEO Setup</li>
                  <li>✅ SSL Security Setup</li>
                  <li>✅ Google Maps Integration</li>
                  <li>✅ 1 Month Free Support</li>
                </ul>
              </div>
              <div className="package-ideal">
                <h5 className="ideal-title">Ideal For</h5>
                <p className="ideal-text">Small businesses, Personal brands, Startups, Local shops</p>
              </div>
              <button className="package-button">Get Started</button>
            </div>

            {/* Pro Package */}
            <div className="package-card package-card-featured">
              <div className="package-popular-badge">
                <span className='tier-tag'>Most Popular</span>
              </div>
              <div className="package-header">
                <div className="package-price">
                  <span className="price-amount">KES 60,000</span>
                  <span className="price-student">(Student: KES 40,000)</span>
                </div>
                <p className="package-maintenance">Maintenance: KES 5,000/month</p>
              </div>
              <div className="package-features">
                <h5 className="features-title">Includes Everything in Starter Plus</h5>
                <ul className="features-list">
                  <li>✅ Up to 15 Pages</li>
                  <li>✅ Custom UI/UX Design</li>
                  <li>✅ Blog/News System</li>
                  <li>✅ Admin Dashboard</li>
                  <li>✅ User Registration & Login</li>
                  <li>✅ Email Notifications</li>
                  <li>✅ Advanced SEO Optimization</li>
                  <li>✅ Google Analytics Integration</li>
                  <li>✅ Performance Optimization</li>
                  <li>✅ Content Management System (CMS)</li>
                  <li>✅ 3 Months Support</li>
                </ul>
              </div>
              <div className="package-ideal">
                <h5 className="ideal-title">Ideal For</h5>
                <p className="ideal-text">Growing businesses, Schools, NGOs, Professional service firms, E-commerce startups</p>
              </div>
              <button className="package-button package-button-primary">Get Pro</button>
            </div>

            {/* Enterprise Package */}
            <div className="package-card">
              <div className="package-header">
                <h4 className="package-name">🏢 Enterprise Package</h4>
                <div className="package-price">
                  <span className="price-amount">KES 150,000+</span>
                </div>
                <p className="package-maintenance">Maintenance: KES 12,000/month</p>
              </div>
              <div className="package-features">
                <h5 className="features-title">Includes Everything in Pro Plus</h5>
                <ul className="features-list">
                  <li>✅ Unlimited Pages</li>
                  <li>✅ Custom Web Application Features</li>
                  <li>✅ Multi-user Admin Roles</li>
                  <li>✅ API Integrations</li>
                  <li>✅ Payment Gateway Integration (M-Pesa, Card, Bank)</li>
                  <li>✅ Database Design & Management</li>
                  <li>✅ Advanced Security Features</li>
                  <li>✅ Custom Reports & Analytics</li>
                  <li>✅ Priority Support</li>
                  <li>✅ Cloud Deployment</li>
                  <li>✅ Staff Training</li>
                  <li>✅ Dedicated Account Manager</li>
                  <li>✅ 6 Months Support</li>
                </ul>
              </div>
              <div className="package-ideal">
                <h5 className="ideal-title">Ideal For</h5>
                <p className="ideal-text">Corporates, SACCOs, Universities, Hospitals, Government Projects, Large NGOs, SaaS Platforms</p>
              </div>
              <button className="package-button">Contact Us</button>
            </div>
          </div>

          {/* Optional Add-ons */}
          <div className="addons-section">
            <h3 className="addons-title">Optional Add-ons</h3>
            <div className="addons-table">
              <div className="addon-row">
                <span className="addon-name">Domain Registration</span>
                <span className="addon-price">KES 2,000/year</span>
              </div>
              <div className="addon-row">
                <span className="addon-name">Hosting Setup</span>
                <span className="addon-price">KES 5,000/year</span>
              </div>
              <div className="addon-row">
                <span className="addon-name">Business Email Setup</span>
                <span className="addon-price">KES 5,000</span>
              </div>
              <div className="addon-row">
                <span className="addon-name">Additional Page</span>
                <span className="addon-price">KES 2,500</span>
              </div>
              <div className="addon-row">
                <span className="addon-name">E-Commerce Store</span>
                <span className="addon-price">From KES 35,000</span>
              </div>
              <div className="addon-row">
                <span className="addon-name">M-Pesa Integration</span>
                <span className="addon-price">KES 15,000</span>
              </div>
              <div className="addon-row">
                <span className="addon-name">Live Chat Integration</span>
                <span className="addon-price">KES 5,000</span>
              </div>
              <div className="addon-row">
                <span className="addon-name">AI Chatbot</span>
                <span className="addon-price">From KES 20,000</span>
              </div>
              <div className="addon-row">
                <span className="addon-name">Logo Design</span>
                <span className="addon-price">KES 8,000</span>
              </div>
              <div className="addon-row">
                <span className="addon-name">SEO Monthly Package</span>
                <span className="addon-price">KES 10,000/month</span>
              </div>
            </div>
          </div>

          {/* Student Discount Program */}
          <div className="student-discount-section">
            <div className="student-discount-badge">🎓 Verified Student Discount Available</div>
            <h3 className="student-discount-title">Student Discount Program</h3>
            <p className="student-discount-description">
              We believe every student deserves a professional online presence. Verified students can access 
              discounted rates on selected web development packages.
            </p>

            <div className="student-requirements">
              <h4 className="student-req-title">Eligibility Requirements</h4>
              <p className="student-req-subtitle">Submit any one of the following for verification:</p>
              <ul className="student-req-list">
                <li>🎓 Valid Student ID</li>
                <li>📄 Admission Letter</li>
                <li>📧 Official School/University Email Address</li>
              </ul>
            </div>

            <div className="student-pricing">
              <h4 className="student-pricing-title">Discounted Pricing</h4>
              <div className="student-pricing-table">
                <div className="student-pricing-row">
                  <span className="student-pkg-name">🌟 Career Launch Portfolio</span>
                  <span className="student-pkg-price">KES 10,000</span>
                </div>
                <div className="student-pricing-row">
                  <span className="student-pkg-name">🚀 Basic Starter Package</span>
                  <span className="student-pkg-price">
                    <span className="price-original">KES 25,000</span>
                    <span className="student-price-highlight">KES 15,000</span>
                  </span>
                </div>
                <div className="student-pricing-row">
                  <span className="student-pkg-name">💼 Pro Package</span>
                  <span className="student-pkg-price">
                    <span className="price-original">KES 60,000</span>
                    <span className="student-price-highlight">KES 40,000</span>
                  </span>
                </div>
              </div>
            </div>

            <p className="student-discount-note">
              * Valid for students currently enrolled in accredited institutions. Verification required.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Divisions