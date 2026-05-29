import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  const [copied, setCopied] = useState(false);
  const [showText, setShowText] = useState(false);

  const handleEmailClick = async () => {
    const email = 'contact@pixelvoices.com';
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert('Failed to copy email.');
    }
  };

  return (
    <header className="site-header">
      <div className="logo-container">
        <Link to="/">
          <img src={require('../assets/pixelvoices.png')} alt="Pixel Voices Logo" className="logo" />
        </Link>
      </div>
      <h1 className="header-title">
        <span className="pix">PIXEL</span> VOICES
      </h1>

      <div
        className={`email-container ${copied ? 'copied' : ''} ${showText ? 'show-text' : ''}`}
        onClick={handleEmailClick}
        onMouseEnter={() => setShowText(true)}
        onMouseLeave={() => setShowText(false)}
        title="Click to copy email"
      >
        <img
          src="https://pixelvoices.com/media/images/social/mail.png"
          alt="Email Icon"
          className="email-icon"
        />
        <span className="email-text">contact@pixelvoices.com</span>
        <div className="copied-message">Copied!</div>
      </div>
    </header>
  );
}

export default Header;
