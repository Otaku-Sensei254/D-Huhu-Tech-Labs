// Home.jsx
import React from 'react'
import '../styles/Home.css'
import cyber from '../../assets/images/secure.jpg'
import blockchain from '../../assets/images/maroon.jpg'
import webdev from '../../assets/images/webworks.jpg'
import research from '../../assets/images/inovations.jpg'
import cloud from '../../assets/images/scale.jpg'
import divisionsImage from '../../assets/images/divisions.jpg' // Add your image here

const Home = () => {
  return (
    <div className="Home-container">
      <div className="Home-top">
        <div className="topTxt">
          <h1>D-Huhu Tech Labs: Divisions</h1>
          <p>
            Explore our core divisions: SecureFixKe, ChainForge Labs, WebWorks, and more —  
            delivering innovative technology across cybersecurity, blockchain, web development, and cloud systems.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="bento-grid">
          <div className="grid-top">
            <div className="bento-item item-cyber">
              <img src={cyber} alt="Cybersecurity" />
              <div className="bento-info">
                <h3>SecureFixKe: Cybersecurity</h3>
                <p>Protecting digital assets with advanced security measures and threat intelligence.</p>
              </div>
            </div>
            <div className="bento-item item-blockchain">
              <img src={blockchain} alt="Blockchain" />
              <div className="bento-info">
                <h3>ChainForge Labs: Blockchain</h3>
                <p>Building decentralized applications and secure blockchain solutions for the future.</p>
              </div>
            </div>
          </div>

          <div className="grid-btm">
            <div className="bento-item item-webdev">
              <img src={webdev} alt="Web Development" />
              <div className="bento-info">
                <h3>WebWorks: Web Development</h3>
                <p>Crafting responsive and scalable web platforms for seamless user experiences.</p>
              </div>
            </div>

            <div className="bento-item item-research">
              <img src={research} alt="Research" />
              <div className="bento-info">
                <h3>Innovation & Research</h3>
                <p>Driving technological advancements through continuous research and development.</p>
              </div>
            </div>

            <div className="bento-item item-cloud">
              <img src={cloud} alt="Cloud" />
              <div className="bento-info">
                <h3>Scalable Solutions</h3>
                <p>Designing and implementing solutions that grow with your business needs.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Divisions Section with Image */}
        <section className="core-divisions">
          <div className="divisions-content-wrapper">
            <div className="divisions-text-section">
              <div className="divisions-header">
                <h2>Our Core Divisions</h2>
                <p>
                  D-Huhu Tech Labs is structured into three specialized divisions, 
                  each dedicated to delivering cutting-edge solutions.
                </p>
              </div>

              <div className="divisions-list">
                <div className="division-card">
                  <div className="division-icon">🛡️</div>
                  <h3>Cybersecurity Solutions</h3>
                  <p>
                    Protecting your digital assets with advanced threat detection, 
                    secure infrastructure, and robust data privacy measures.
                  </p>
                </div>

                <div className="division-card">
                  <div className="division-icon">⛓️</div>
                  <h3>Blockchain Innovation</h3>
                  <p>
                    Developing decentralized applications, smart contracts, and secure 
                    ledger technologies for transparent and efficient operations.
                  </p>
                </div>

                <div className="division-card">
                  <div className="division-icon">🌐</div>
                  <h3>Web Development & AI</h3>
                  <p>
                    Crafting dynamic web experiences and integrating intelligent AI 
                    solutions to drive engagement and business growth.
                  </p>
                </div>
              </div>
            </div>

            <div className="divisions-image-section">
              <img src={divisionsImage} alt="Our Team" />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home