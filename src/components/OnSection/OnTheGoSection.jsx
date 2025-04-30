import React from "react";
import "./OnTheGoSection.css";
import qrImage from "../../assets/app-qr.png"; // Replace with actual path
import appScreenshot from "../../assets/s20.png"; // Replace with actual path
// import googlePlay from "../../assets/app-qr.png"; // Replace with actual path
// import appStore from "../../assets/app-qr.png"; // Replace with actual path
import users from "../../assets/app-qr.png"; // Optional user profile icons

const OnTheGoSection = () => {
  return (
    <>
    <div className="on-the-go-wrapper">
      <div className="top-content">
        <div className="left">
          <h2>On The Go</h2>
          <p>
            We believe that everyone should be able to wield technology while
            learn trading. Use Bluestock on the go, on your mobile device.
            Experience the ultimate trading experience on Android or IOS.
          </p>

          <div className="qr-row">
            <img src={qrImage} alt="QR Code" className="qr-img" />
            <div className="qr-text">
              <h4>Scan and download</h4>
              <span>Use your android device <br/>to download the app</span>
            </div>
          </div>
        </div>

        <div className="right">
          <img src={appScreenshot} alt="App Preview" className="app-img" />
        </div>
      </div>

      <div className="bottom-bar">
        <div className="info">
          <span>
            <strong className="highlight">Bluestock App 2.0</strong> is Live
            Now!
          </span>

          <div className="download-app">Download Our App</div>

    <div className="app-icons">
      <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
          alt="Get it on Google Play" style={{ height: '40px' }} />
      </a>

      <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
        <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" 
          alt="Download on the App Store" style={{ height: '40px' }} />
      </a>
    </div>
        </div>
      </div>

      <div className="rating">
          <img src={users} alt="Users" className="users-img" />
          <div className="stars">
            ⭐⭐⭐⭐⭐ <span>(5/5 by 100+ users)</span>
          </div>
        </div>
    </div>
    </>
  );
};

export default OnTheGoSection;
