"use client";

import React, { useEffect, useRef } from "react";

// Define proper interface for nebula points
interface NebulaPoint {
  x: number;
  y: number;
  radius: number;
  color: string;
  speed: number;
  offset: number;
}

interface NebulaProps {
  className?: string;
  colors?: string[];
  density?: number;
  speed?: number;
  opacity?: number;
}

export const Nebula: React.FC<NebulaProps> = ({
  className = "",
  colors = ["#4D84FF", "#FF3366", "#6A3093", "#00F5D4"],
  density = 12,
  speed = 0.25, // Reduced speed from 0.5 to 0.25
  opacity = 0.5,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<number>(0);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;
    
    // Define createNebula function first before using it
    const createNebula = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      // Generate some nebula cloud points with proper typing
      const nebulaPoints: NebulaPoint[] = [];
      for (let i = 0; i < density; i++) {
        nebulaPoints.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: 50 + Math.random() * 200,
          color: colors[Math.floor(Math.random() * colors.length)],
          speed: (Math.random() - 0.5) * speed,
          offset: Math.random() * Math.PI * 2,
        });
      }
      
      // Animation loop
      let time = 0;
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw each nebula cloud with a gradient
        for (const point of nebulaPoints) {
          const gradient = ctx.createRadialGradient(
            point.x + Math.cos(time + point.offset) * 10, 
            point.y + Math.sin(time + point.offset) * 10, 
            0, 
            point.x + Math.cos(time + point.offset) * 10, 
            point.y + Math.sin(time + point.offset) * 10, 
            point.radius
          );
          
          // Fix color formatting with proper 2-digit hex values
          const alpha100 = Math.floor(opacity * 100).toString(16).padStart(2, '0');
          const alpha50 = Math.floor(opacity * 50).toString(16).padStart(2, '0');
          
          gradient.addColorStop(0, `${point.color}${alpha100}`);
          gradient.addColorStop(0.5, `${point.color}${alpha50}`);
          gradient.addColorStop(1, `${point.color}00`);
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(
            point.x + Math.cos(time + point.offset) * 10, 
            point.y + Math.sin(time + point.offset) * 10, 
            point.radius, 
            0, 
            Math.PI * 2
          );
          ctx.fill();
          
          // Slowly move the points (reduced movement speed)
          point.x += point.speed * 0.5;
          point.y += point.speed * 0.25;
          
          // Wrap around edges
          if (point.x < -point.radius) point.x = canvas.width + point.radius;
          if (point.x > canvas.width + point.radius) point.x = -point.radius;
          if (point.y < -point.radius) point.y = canvas.height + point.radius;
          if (point.y > canvas.height + point.radius) point.y = -point.radius;
        }
        
        time += 0.002; // Reduced from 0.005 for slower movement
        frameRef.current = requestAnimationFrame(animate);
      };
      
      animate();
    };
    
    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createNebula(ctx, canvas);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameRef.current);
    };
  }, [colors, density, speed, opacity]);
  
  return (
    <canvas
      ref={canvasRef}
      className={`nebula-canvas ${className}`}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        mixBlendMode: 'screen',
      }}
    />
  );
}; 