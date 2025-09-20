"use client";

// components/ui/CountUp.js - ReactBits Style CountUp Component
import React from 'react';
import { useCountUp } from '../../hooks/useScrollReveal';

const CountUp = ({
  end,
  start = 0,
  duration = 2000,
  suffix = '',
  prefix = '',
  className = '',
  ...props
}) => {
  const { ref, value } = useCountUp(end, {
    start,
    duration,
    suffix,
    prefix,
  });

  return (
    <span ref={ref} className={className} {...props}>
      {value}
    </span>
  );
};

export default CountUp;