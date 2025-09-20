"use client";

// hooks/useScrollReveal.js - Simplified Scroll and Animation Hooks
import { useState, useEffect, useRef } from 'react';

export const useScrollReveal = (options = {}) => {
  const {
    threshold = 0.1,
    delay = 0,
    duration = 600,
    distance = 60,
    origin = 'bottom',
    triggerOnce = true,
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, triggerOnce]);

  const getInitialTransform = () => {
    switch (origin) {
      case 'top':
        return `translateY(-${distance}px)`;
      case 'bottom':
        return `translateY(${distance}px)`;
      case 'left':
        return `translateX(-${distance}px)`;
      case 'right':
        return `translateX(${distance}px)`;
      default:
        return `translateY(${distance}px)`;
    }
  };

  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0px) translateX(0px)' : getInitialTransform(),
    transition: `all ${duration}ms ease-out ${delay}ms`,
  };

  return { ref: elementRef, style, isVisible };
};

export const useCountUp = (end, options = {}) => {
  const {
    start = 0,
    duration = 2000,
    threshold = 0.3,
    prefix = '',
    suffix = ''
  } = options;

  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out exponential function for smooth animation
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentCount = start + (end - start) * easeOutExpo;
      
      setCount(currentCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, start, end, duration]);

  const displayValue = `${prefix}${Math.floor(count).toLocaleString()}${suffix}`;

  return { ref: elementRef, value: displayValue, count };
};