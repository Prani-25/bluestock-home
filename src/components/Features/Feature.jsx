import React from 'react'
import './Feature.css'

const Feature = () => {
  return (
    <div>
      <div className="features-wrapper">
      <div className="card-section">
        <div className="feature-card purple-card">
          <div className="card-title">
            Learn Chart <span role="img">✏️</span>
          </div>
          <ul>
            <li><span>1</span> Technical, Fundamental</li>
            <li><span>2</span> Finology, Facts, Equity</li>
            <li><span>3</span> Trading Psychology</li>
            <li><span>3</span> Risk Assessment</li>
            <li><span>3</span> Option Trading</li>
          </ul>
        </div>

        <div className="feature-card pink-card">
          <div className="card-title">
            Analytics <span role="img">📨</span>
          </div>
          <ul>
            <li><span>1</span> Live Sector Trend</li>
            <li><span>2</span> IPO DRHP</li>
            <li><span>3</span> Sectoral Distribution</li>
            <li><span>3</span> Stock Overview</li>
            <li><span>3</span> TradingView Chart</li>
            <li><span>3</span> Technical, Fundamental</li>
          </ul>
        </div>

        <div className="feature-card yellow-card">
          <div className="card-title">
            Club <span role="img">⚡</span>
          </div>
          <ul>
            <li><span>1</span> Educational Resources</li>
            <li><span>2</span> Real-time Chat</li>
            <li><span>3</span> Forums</li>
          </ul>
        </div>
      </div>

      <div className="love-section">
        <div className="love-text">
          <h2>Why do traders love bluestock?</h2>
          <p>
            Bluestock caters to traders looking to enhance<br />
            their technical analysis skills, providing a user-friendly<br />
            environment to interpret and leverage charts effectively<br />
            for strategic decision-making in the financial markets.
          </p>
          <div className="icon-row">
            <div className="icon-box">Analytics</div>
            <div className="icon-box">Blogs</div>
            <div className="icon-box">Videos</div>
          </div>
        </div>
        <div className="love-side">
          <div className="confetti">🎊</div>
          <div className="badge">Shark Investor</div>
        </div>
      </div>

      <div className="resources-section">
        <span className="resource-tag">Resources</span>
        <h2>All things finance, right here</h2>
        <p>
          Master the art of investing and secure your financial future<br />
          with Bluestock learning resources.
        </p>
      </div>
    </div>
    
    </div>
  )
}

export default Feature
