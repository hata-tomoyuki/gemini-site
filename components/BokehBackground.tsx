
import React, { useEffect, useRef } from 'react';
import { BOKEH_COLORS } from '../constants';
import { Particle } from '../types';

const BokehBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const init = () => {
      particles = [];
      const particleCount = Math.floor((window.innerWidth * window.innerHeight) / 15000);
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 80 + 20, // Large bokeh spots
          color: BOKEH_COLORS[Math.floor(Math.random() * BOKEH_COLORS.length)],
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          opacity: Math.random() * 0.5,
          breathSpeed: 0.005 + Math.random() * 0.01,
          breathPhase: Math.random() * Math.PI * 2,
        });
      }
      
      // Small twinkling particles
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          color: 'rgba(255, 253, 245, 0.8)',
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random(),
          breathSpeed: 0.02 + Math.random() * 0.03,
          breathPhase: Math.random() * Math.PI * 2,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        const currentOpacity = (Math.sin(p.breathPhase) + 1) / 2 * p.opacity;
        
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        
        // Handle large bokeh differently from small stars
        if (p.size > 10) {
            gradient.addColorStop(0, p.color.replace('0.3', currentOpacity.toString()).replace('0.4', currentOpacity.toString()));
            gradient.addColorStop(1, 'transparent');
        } else {
            ctx.shadowBlur = 10;
            ctx.shadowColor = p.color;
            ctx.fillStyle = `rgba(255, 253, 245, ${currentOpacity})`;
        }
        
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Update position
        p.x += p.speedX;
        p.y += p.speedY;
        p.breathPhase += p.breathSpeed;

        // Wrap around screen
        if (p.x < -p.size) p.x = canvas.width + p.size;
        if (p.x > canvas.width + p.size) p.x = -p.size;
        if (p.y < -p.size) p.y = canvas.height + p.size;
        if (p.y > canvas.height + p.size) p.y = -p.size;
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ filter: 'blur(2px)' }}
    />
  );
};

export default BokehBackground;
