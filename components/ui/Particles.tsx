"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  refresh?: boolean;
  size?: number;
  vx?: number;
  vy?: number;
  styles?: {
    particles?: React.CSSProperties;
    particle?: React.CSSProperties;
  };
}

interface ParticleType {
  x: number;
  y: number;
  size: number;
  velocity: {
    x: number;
    y: number;
  };
  opacity: number;
  color: string;
}

export const Particles = ({
  className = "",
  quantity = 90,
  staticity = 30,
  ease = 30,
  size = 0.8,
  refresh = false,
  vx = 0,
  vy = 0,
  styles = {
    particles: {},
    particle: {},
  },
}: ParticlesProps) => {
  const [particles, setParticles] = useState<ParticleType[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Generate random particles
  const generateParticles = useCallback((container: HTMLDivElement) => {
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    setDimensions({ width, height });

    // Define color options for the particles - supernova theme colors
    const colors = ["#4D84FF", "#00F5D4", "#6A3093", "#FF3366"];

    const newParticles = Array.from({ length: quantity }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * size + 0.5,
      velocity: {
        x: (Math.random() - 0.5) * 0.5 + vx,
        y: (Math.random() - 0.5) * 0.5 + vy,
      },
      opacity: Math.random() * 0.8 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setParticles(newParticles);
  }, [quantity, size, vx, vy]);

  // Initialize particles
  useEffect(() => {
    if (containerRef.current) {
      generateParticles(containerRef.current);
      
      // Update dimensions on resize
      const handleResize = () => {
        if (containerRef.current) {
          generateParticles(containerRef.current);
        }
      };

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [containerRef, generateParticles, refresh]);

  // Add mouse interaction effect
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      // Apply force to particles based on mouse position
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          const dx = mouseX - particle.x;
          const dy = mouseY - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Only affect particles within a certain radius
          if (distance < 80) {
            const force = (80 - distance) / 80;
            // Move particles away from mouse
            const angle = Math.atan2(dy, dx);
            return {
              ...particle,
              velocity: {
                x: particle.velocity.x - Math.cos(angle) * force * 0.8,
                y: particle.velocity.y - Math.sin(angle) * force * 0.8,
              },
            };
          }
          return particle;
        })
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [particles]);

  // Animation loop
  useEffect(() => {
    if (!containerRef.current || particles.length === 0) return;

    let animationFrameId: number;
    const width = dimensions.width;
    const height = dimensions.height;

    const animate = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          // Calculate new position based on velocity
          let newX = particle.x + particle.velocity.x;
          let newY = particle.y + particle.velocity.y;

          // Boundary checks with bounce effect
          if (newX < 0 || newX > width) {
            particle.velocity.x *= -1;
            newX = particle.x + particle.velocity.x;
          }
          if (newY < 0 || newY > height) {
            particle.velocity.y *= -1;
            newY = particle.y + particle.velocity.y;
          }

          // Apply drag (ease)
          particle.velocity.x *= (100 - ease) / 100;
          particle.velocity.y *= (100 - ease) / 100;

          // Apply random movement based on staticity
          if (Math.random() > staticity / 100) {
            particle.velocity.x += (Math.random() - 0.5) * 0.1;
            particle.velocity.y += (Math.random() - 0.5) * 0.1;
          }

          return {
            ...particle,
            x: newX,
            y: newY,
          };
        })
      );

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [dimensions, particles, ease, staticity]);

  return (
    <div
      className={`supernova-particles ${className}`}
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        zIndex: 0,
        ...styles.particles,
      }}
    >
      {particles.map((particle, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            transform: `translate(${particle.x}px, ${particle.y}px)`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.color,
            borderRadius: "50%",
            boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`,
            opacity: particle.opacity,
            transition: "opacity 0.2s ease",
            zIndex: 1,
            ...styles.particle,
          }}
        />
      ))}
    </div>
  );
}; 