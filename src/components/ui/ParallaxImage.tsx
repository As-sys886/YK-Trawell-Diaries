import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number; // How fast the parallax effect is, 0.1 to 0.5 is good
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({ src, alt, className, speed = 0.3 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 50}px`, `${speed * 50}px`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className || ''}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="absolute h-[calc(100%+100px)] w-full object-cover"
      />
    </div>
  );
};

export default ParallaxImage;
