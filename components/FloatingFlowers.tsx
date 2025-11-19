import { useState, useEffect } from "react";

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
    const newFlowers = Array.from({ length: 25 }, (_, index) => ({
      id: index,
      x: Math.random() * 100,
      y: -10 + Math.random() * 110,
      delay: Math.random() * 20,
      duration: 25 + Math.random() * 20,
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
