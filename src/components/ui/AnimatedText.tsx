import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className, delay = 0 }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger animation once
    threshold: 0.5, // Trigger when 50% of the component is visible
  });

  const sentenceVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.02, delayChildren: delay } },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { ease: 'easeOut', duration: 0.5 } },
  };

  return (
    <motion.h2
      className={className}
      ref={ref}
      variants={sentenceVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {text.split('').map((char, index) => (
        <motion.span key={char + '-' + index} variants={letterVariants} className="inline-block">
          {char === ' ' ? '\u00A0' : char} {/* Render space as non-breaking space */}
        </motion.span>
      ))}
    </motion.h2>
  );
};

export default AnimatedText;
