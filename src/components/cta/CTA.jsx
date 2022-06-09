import React from 'react'
import './cta.css'

const Cta = () => {
  return (
    <div className="cta" id="search">
      <div className="cta-content">
        <p id="explore-tools-id">Begin Exploring Our Tools</p>
        <h3>Explore our search feature</h3>
      </div>
      <div className="cta-btn">
        <button type="button"><a id="get-started-link" href="/search">Get Started</a></button>
      </div>
    </div>
  )
}

export default Cta