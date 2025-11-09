// About.jsx
import React from 'react'
import '../styles/About.css'
import CEO from '../../assets/images/dtech.jpeg'
import gift from '../../assets/images/gift.jpeg'
import teamImage3 from '../../assets/images/team.jpg'
import heroImage from '../../assets/images/decent.jpg'
import innovationImage1 from '../../assets/images/ai.jpg'
import innovationImage2 from '../../assets/images/decent.jpg'
import innovationImage3 from '../../assets/images/web.jpg'
import avatarImage1 from '../../assets/images/avator.jpg'
import avatarImage2 from '../../assets/images/avator.jpg'
import avatarImage3 from '../../assets/images/avator.jpg'
import avatarImage4 from '../../assets/images/avator.jpg'
import avatarImage5 from '../../assets/images/avator.jpg'

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section with Badge */}
      <section className="about-hero-modern">
        <div className="about-hero-content">
          {/* Badge */}
          <div className="title-badge">
            <span className="badge-new">NEW</span>
            <span className="badge-text">Showcasing tech innovation</span>
            <svg width="16" height="16" viewBox="0 0 320 512" fill="currentColor">
              <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
            </svg>
          </div>

          <h1 className="about-hero-title">
            Discover D-Huhu Tech's innovation philosophy.
          </h1>
          
          <p className="about-hero-description">
            D-Huhu Tech Labs specializes in creating secure, scalable, and intelligent technology 
            solutions tailored for businesses and developers. We aim to innovate, connect, and 
            impact industries through groundbreaking projects in cybersecurity, blockchain, and 
            web development.
          </p>

          {/* Avatar List */}
          <div className="avatar-list">
            <img src={avatarImage1} alt="Team member" className="avatar-img" />
            <img src={avatarImage2} alt="Team member" className="avatar-img" />
            <img src={avatarImage3} alt="Team member" className="avatar-img" />
            <img src={avatarImage4} alt="Team member" className="avatar-img" />
            <img src={avatarImage5} alt="Team member" className="avatar-img" />
            <div className="avatar-overflow">5+</div>
          </div>

          {/* Buttons */}
          <div className="hero-buttons">
            <button className="rainbow-button">
              <div className="button-text-wrapper">
                <span className="button-text">Learn More</span>
                <span className="button-text">Learn More</span>
              </div>
            </button>
            <button className="secondary-button">
              <svg width="16" height="16" viewBox="0 0 448 512" fill="currentColor">
                <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/>
              </svg>
              <span>Add New</span>
            </button>
          </div>
        </div>
      </section>

      {/* Innovation Section with Image */}
      <section className="innovation-section">
        <div className="innovation-container">
          <div className="innovation-content">
            <div className="innovation-text">
              <h2 className="gradient-heading">Innovation shapes our future</h2>
              <p className="innovation-description">
                D-Huhu Tech Labs redefines technological innovation by embracing intelligent, 
                scalable, and secure solutions. Experience a journey driven by our mission to 
                empower businesses and foster innovation through cutting-edge advancements and 
                a commitment to excellence.
              </p>
              <div className="innovation-buttons">
                <button className="rainbow-button">
                  <div className="button-text-wrapper">
                    <span className="button-text">Discover More</span>
                    <span className="button-text">Discover More</span>
                  </div>
                </button>
                <button className="outline-button">Learn More</button>
              </div>
            </div>
            <div className="innovation-image">
              <img src={heroImage} alt="Innovation" />
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Philosophy Section */}
      <section className="philosophy-section">
        <div className="philosophy-container">
          <div className="philosophy-header">
            <div className="philosophy-header-content">
              <div className="title-badge">
                <span className="badge-new">NEW</span>
                <span className="badge-text">Innovation</span>
              </div>
              <h2 className="gradient-heading">Our Innovation Philosophy</h2>
            </div>
            <button className="rainbow-button">
              <div className="button-text-wrapper">
                <span className="button-text">Explore More</span>
                <span className="button-text">Explore More</span>
              </div>
            </button>
          </div>

          {/* Timeline Items */}
          <div className="timeline-list">
            <div className="timeline-item">
              <div className="timeline-date">MARCH 15, 2025</div>
              <div className="timeline-content">
                <div className="timeline-text">
                  <h3 className="timeline-title">Pioneering Secure AI</h3>
                  <p className="timeline-description">
                    Discover our latest breakthroughs in AI, focusing on robust security and 
                    intelligent, ethical development.
                  </p>
                  <a href="#" className="timeline-link">Learn More</a>
                </div>
                <div className="timeline-image">
                  <img src={innovationImage1} alt="Pioneering Secure AI" />
                </div>
              </div>
            </div>

            <div className="timeline-divider"></div>

            <div className="timeline-item">
              <div className="timeline-date">APRIL 22, 2025</div>
              <div className="timeline-content">
                <div className="timeline-text">
                  <h3 className="timeline-title">Decentralized Solutions</h3>
                  <p className="timeline-description">
                    Explore how our blockchain initiatives are creating secure and scalable 
                    decentralized ecosystems.
                  </p>
                  <a href="#" className="timeline-link">View Projects</a>
                </div>
                <div className="timeline-image">
                  <img src={innovationImage2} alt="Decentralized Solutions" />
                </div>
              </div>
            </div>

            <div className="timeline-divider"></div>

            <div className="timeline-item">
              <div className="timeline-date">MAY 10, 2025</div>
              <div className="timeline-content">
                <div className="timeline-text">
                  <h3 className="timeline-title">Future of Web Development</h3>
                  <p className="timeline-description">
                    Our vision for the next generation of web experiences, combining innovation 
                    with user-centric design.
                  </p>
                  <a href="#" className="timeline-link">Read Article</a>
                </div>
                <div className="timeline-image">
                  <img src={innovationImage3} alt="Future of Web Development" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Stats Section */}
      <section className="vision-stats-section">
        <div className="vision-stats-container">
          <div className="vision-content">
            <h2 className="vision-title">Our Vision & Innovation</h2>
            <p className="vision-description">
              At D-Huhu Tech Labs, our mission is to pioneer secure, scalable, and intelligent 
              solutions that empower businesses and drive technological advancement. We envision 
              a future where innovation seamlessly integrates with everyday operations, fostering 
              growth and efficiency across all sectors.
            </p>

            {/* Stats */}
            <div className="stats-row">
              <div className="stat-item">
                <div className="stat-number gradient-text">10+</div>
                <div className="stat-title">Years of innovation</div>
                <div className="stat-subtitle">Leading the tech frontier</div>
              </div>
              <div className="stat-item">
                <div className="stat-number gradient-text">50+</div>
                <div className="stat-title">Successful projects</div>
                <div className="stat-subtitle">Delivering impactful solutions</div>
              </div>
              <div className="stat-item">
                <div className="stat-number gradient-text">99%</div>
                <div className="stat-title">Client satisfaction</div>
                <div className="stat-subtitle">Building lasting partnerships</div>
              </div>
            </div>
          </div>

          {/* Team Cards */}
          <div className="team-cards-grid">
            <div className="team-card-modern">
              <img src={CEO} alt="Dr. Anya Sharma" />
              <div className="team-card-overlay"></div>
              <div className="team-card-info">
                <h4 className="team-card-name">Mwangi Dennis Huhu</h4>
                <p className="team-card-role">Chief Executive Officer</p>
              </div>
            </div>

            <div className="team-card-modern">
              <img src={gift} alt="Mark Chen" />
              <div className="team-card-overlay"></div>
              <div className="team-card-info">
                <h4 className="team-card-name">Gift Saisi</h4>
                <p className="team-card-role">Head of WebWorks</p>
              </div>
            </div>

            <div className="team-card-modern">
              <img src={teamImage3} alt="Sarah Lee" />
              <div className="team-card-overlay"></div>
              <div className="team-card-info">
                <h4 className="team-card-name">Sarah Lee</h4>
                <p className="team-card-role">Lead Solutions Architect</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About