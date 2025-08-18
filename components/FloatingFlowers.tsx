import { useState, useEffect } from 'react';

interface Flower {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
  size: number;
}

const FloatingFlowers = () => {
  const [flowers, setFlowers] = useState<Flower[]>([]);

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
    <div className="floating-flowers-container" aria-hidden="true">
      {flowers.map(flower => (
        <div
          key={flower.id}
          className="floating-flower absolute"
          style={{
            left: `${flower.x}%`,
            top: `${flower.y}%`,
            fontSize: `${flower.size}px`,
            animationDuration: `${flower.duration}s`,
            animationDelay: `${flower.delay}s`,
          }}
        >
          🌸
        </div>
      ))}
    </div>
  );
};

export default FloatingFlowers;
