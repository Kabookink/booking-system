"use client";

// components/ui/GlareCard.js - Simplified Glare Effect Component (No 3D)
import React, { useRef, useState } from 'react';

const GlareCard = ({ 
  children, 
  className = '', 
  glareColor = 'rgba(255, 255, 255, 0.3)',
  glareSize = 200,
  intensity = 0.8,
  ...props 
}) => {
  const [glareStyle, setGlareStyle] = useState({});
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    
    setGlareStyle({
      background: `radial-gradient(${glareSize}px circle at ${glareX}% ${glareY}%, ${glareColor} 0%, transparent 70%)`,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setGlareStyle({
      background: 'transparent',
    });
  };

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
      
      {/* Glare overlay - simplified without 3D transforms */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: glareStyle.background || 'transparent',
          opacity: isHovered ? intensity : 0,
        }}
      />
    </div>
  );
};

export default GlareCard;