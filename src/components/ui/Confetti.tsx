import React, { useEffect, useRef } from 'react';
import JSConfetti from 'js-confetti';

const Confetti: React.FC = () => {
  const jsConfetti = useRef<JSConfetti | null>(null);

  useEffect(() => {
    jsConfetti.current = new JSConfetti();
    jsConfetti.current.addConfetti({
      confettiColors: [
        '#3a6b3b', // primary
        '#a0522d', // secondary
        '#f7d08a', // accent
        '#e2e8f0', // text
        '#ffffff', // white
      ],
      confettiRadius: 6,
      confettiNumber: 500,
    });

    return () => {
      // Cleanup if needed, though JSConfetti doesn't have a direct destroy method
    };
  }, []);

  return null; // This component doesn't render anything visible
};

export default Confetti;
