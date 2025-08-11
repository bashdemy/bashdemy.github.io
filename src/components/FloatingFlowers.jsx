import { useState, useEffect } from 'react';

const FloatingFlowers = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    const newFlowers = Array.from({ length: 20 }, (_, index) => ({
      id: index,
      x: Math.random() * 100,
      y: Math.random() * 80,
      delay: Math.random() * 15,
      duration: 20 + Math.random() * 15,
      size: 40 + Math.random() * 30,
    }));
    setFlowers(newFlowers);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: '80px',
        left: 0,
        width: '100%',
        height: 'calc(100vh - 80px)',
        zIndex: -1,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {flowers.map(flower => (
        <div
          key={flower.id}
          className="floating-flower"
          style={{
            position: 'absolute',
            left: `${flower.x}%`,
            top: `${flower.y}%`,
            fontSize: `${flower.size}px`,
            animationDuration: `${flower.duration}s`,
            animationDelay: `${flower.delay}s`,
            opacity: 0.4,
            color: 'var(--color-accent)',
            transform: 'translate(-50%, -50%)',
            filter: 'blur(0.5px)',
          }}
        >
          🌸
        </div>
      ))}
    </div>
  );
};

export default FloatingFlowers;
