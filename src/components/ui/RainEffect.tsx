import React from 'react';

const RainEffect: React.FC = () => {
  const numberOfDrops = 100; // Adjust for more/fewer raindrops

  const drops = Array.from({ length: numberOfDrops }, (_, i) => {
    const animationDuration = Math.random() * 1 + 1; // 1 to 2 seconds
    const animationDelay = Math.random() * -10; // -10 to 0 seconds (negative for initial spread)
    const leftPosition = Math.random() * 100; // 0 to 100% horizontally
    const size = Math.random() * 2 + 1; // 1 to 3px

    return (
      <div
        key={i}
        className="absolute z-0 rounded-full bg-white opacity-40"
        style={{
          left: `${leftPosition}vw`,
          width: `${size}px`,
          height: `${size * 4}px`,
          animation: `rain ${animationDuration}s linear infinite`,
          animationDelay: `${animationDelay}s`,
        }}
      ></div>
    );
  });

  return <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">{drops}</div>;
};

export default RainEffect;
