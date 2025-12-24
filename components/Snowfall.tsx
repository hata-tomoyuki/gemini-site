
import React, { useEffect, useRef } from 'react';

const Snowfall: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let flakes: { x: number; y: number; r: number; d: number; s: number }[] = [];
    const count = 30;

    const init = () => {
      flakes = [];
      for (let i = 0; i < count; i++) {
        flakes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.5 + 0.5,
          d: Math.random() * count,
          s: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.beginPath();
      flakes.forEach((f) => {
        ctx.moveTo(f.x, f.y);
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
        f.y += f.s;
        f.x += Math.sin(f.d) * 0.5;
        if (f.y > canvas.height) {
          f.y = -10;
          f.x = Math.random() * canvas.width;
        }
      });
      ctx.fill();
      requestAnimationFrame(draw);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    draw();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-10" />;
};

export default Snowfall;
