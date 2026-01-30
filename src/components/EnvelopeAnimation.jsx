import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/EnvelopeAnimation.css';

const EnvelopeAnimation = ({ onOpen }) => {
  const [isFading, setIsFading] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsFading(true);
    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <div className={`h-full invitation-container ${isFading ? 'fade-out' : ''}`} onClick={handleClick}>
      <img 
        src="/images/envelope2.png" 
        alt="Wedding Invitation" 
        className={`invitation-image ${isFading ? 'image-fade-out' : ''}`}
      />
      {!isFading && <div className="click-hint">Click to enter</div>}
    </div>
   
  );
};

export default EnvelopeAnimation;
