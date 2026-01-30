import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/EnvelopeAnimation.css';

const EnvelopeAnimation = ({ onOpen }) => {
  const [isFading, setIsFading] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Check if screen is desktop (hide envelope on desktop)
    const isDesktop = window.innerWidth > 768;
    if (isDesktop) {
      setIsHidden(true);
    }
  }, []);

  const handleClick = () => {
    setIsFading(true);
    
    // Wait for fade animation to complete, then hide
    setTimeout(() => {
      setIsHidden(true);
      if (onOpen) onOpen();
    }, 2000);
  };

  if (isHidden) {
    return null;
  }

  return (
    <div className={`h-full invitation-container ${isFading ? 'fade-out' : ''}`} onClick={handleClick}>
      <img 
        src="/images/envelope6.png" 
        alt="Wedding Invitation" 
        className={`invitation-image ${isFading ? 'image-fade-out' : ''}`}
      />
      {!isFading && <div className="click-hint">Click to enter</div>}
    </div>
   
  );
};

export default EnvelopeAnimation;
