// Footer.jsx
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <h3 className="footer-logo">D-Huhu Tech Labs</h3>
            <p className="footer-description">
              Delivering cutting-edge solutions across cybersecurity, blockchain, 
              web development, and cloud systems.
            </p>
            <div className="footer-social">
              <a href="https://x.com/dhuhuinc?t=vpbscw1hCC3Bei4sJ1fKXg&s=09" aria-label="Twitter" className="social-link">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/dennis-mwangi-1500722aa/" aria-label="LinkedIn" className="social-link">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="https://github.com/Otaku-Sensei254" aria-label="GitHub" className="social-link">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/dhuhu_techlabs/" aria-label="Instagram" className="social-link">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0-14.9-12-26.8-26.8-26.8c-14.9 0-26.8 12-26.8 26.8s12 26.8 26.8 26.8c14.9 0 26.8-12 26.8-26.8zm76.1-27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.9 1.7-67.7 9.9-93.9 36.2c-26.2 26.2-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9c26.2 26.2 58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.9 0-184.9zm-47.7 217.5c-2.3 16.5-11.1 31.9-29.5 50.3c-18.4 18.4-33.8 27.2-50.3 29.5c-37 2.1-118.5 2.1-155.5 0c-16.5-2.3-31.9-11.1-50.3-29.5c-18.4-18.4-27.2-33.8-29.5-50.3c-2.1-37-2.1-118.5 0-155.5c2.3-16.5 11.1-31.9 29.5-50.3c18.4-18.4 33.8-27.2 50.3-29.5c37-2.1 118.5-2.1 155.5 0c16.5 2.3 31.9 11.1 50.3 29.5c18.4 18.4 27.2 33.8 29.5 50.3c2.1 37 2.1 118.5 0 155.5z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Divisions */}
          <div className="footer-section">
            <h4 className="footer-title">Our Divisions</h4>
            <ul className="footer-links">
              <li><a href="#securefixke">SecureFixKe</a></li>
              <li><a href="#chainforge">ChainForge Labs</a></li>
              <li><a href="#webworks">WebWorks</a></li>
              <li><a href="#research">Innovation & Research</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#cybersecurity">Cybersecurity</a></li>
              <li><a href="#blockchain">Blockchain Development</a></li>
              <li><a href="#webdev">Web Development</a></li>
              <li><a href="#cloud">Cloud Solutions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h4 className="footer-title">Contact Us</h4>
            <ul className="footer-contact">
              <li>
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Nairobi, Kenya</span>
              </li>
              <li>
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>dhuhuinc@gmail.com</span>
              </li>
              <li>
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
                <span>+254 724 064 302</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} D-Huhu Tech Labs. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer