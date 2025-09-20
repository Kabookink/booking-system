"use client";

// components/ui/ScrollReveal.js - Simplified Scroll Reveal Component
import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const ScrollReveal = ({
  children,
  className = '',
  threshold = 0.1,
  delay = 0,
  duration = 600,
  distance = 60,
  origin = 'bottom',
  triggerOnce = true,
  stagger = 0,
  index = 0,
  ...props
}) => {
  const { ref, style } = useScrollReveal({
    threshold,
    delay: delay + (stagger * index),
    duration,
    distance,
    origin,
    triggerOnce,
  });

  return (
    <div
      ref={ref}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

// Staggered Children Animation Component
export const StaggerContainer = ({
  children,
  stagger = 100,
  className = '',
  ...scrollRevealProps
}) => {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          ...scrollRevealProps,
          stagger,
          index,
        })
      )}
    </div>
  );
};

export default ScrollReveal;