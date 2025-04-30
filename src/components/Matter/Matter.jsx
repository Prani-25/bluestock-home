import React from 'react'
import '../Matter/Matter.css'

const Matter = () => {
  return (
    <div>
      <div className="landing-wrapper">
      <div className="top-section">
        <div className="left-content">
          <div className="badge-row">
            <span className="badge">NEW</span>
            <span className="app-link">App 2.0 →</span>
          </div>
          <h1 className="main-heading">
            Free & Open <br />
            Stock Market Analytics <br />
            For GenZ
          </h1>
          <p className="subtext">
            Thousands of traders and investors in India use our <br />
            stable and reliable mobile app regularly.
          </p>
          <div className="access-box">
            <p>Get early access</p>
            <div className="input-row">
              <span>+91</span>
              <input type="text" placeholder="Enter mobile number" />
              <button>📨</button>
            </div>
          </div>
        </div>
        <div className="right-placeholder" />
      </div>

      <div className="mid-section">
        <p className="tagline">Built for a growing India.</p>
        <div className="features">
          <h2>
            <span className="purple features-color">It’s easy</span> <br />
            <span className="bold features-color">It’s powerful</span> <br />
            <span className="purple features-color">It’s beautiful</span>
          </h2>

          <div className="ui-text">
          <div className="emoji">👍🏼</div>
            <p>
              <strong>Beautiful UI</strong> for the modern trader, <br />
              with access on all platforms, <br />
              to <strong>trade on the go</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="bottom-section">
        <p className="light-text">Power-packed with everything you need.</p>
        <h2 className="highlight-title">Bluestock Highlights</h2>
        <p className="light-desc">
          Simplified enough for beginners, Detailed enough for experts. <br />
          Track upcoming IPOs, Leverage advanced tools to <br />
          make the best decisions.
        </p>
      </div>
    </div>
    </div>
  )
}

export default Matter
