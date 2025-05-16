"use client";

import React, { useEffect, useRef, useState } from "react";

interface SupernovaBurstProps {
  className?: string;
  burstColor?: string;
  coreColor?: string;
  particleCount?: number;
  maxRadius?: number;
  duration?: number;
  repeating?: boolean;
  repeatDelay?: number;
  intensity?: number;
}

export const SupernovaBurst: React.FC<SupernovaBurstProps> = ({
  className = "",
  burstColor = "#FF3366",
  coreColor = "#FFFFFF",
  particleCount = 100,
  maxRadius = 1000,
  duration = 8,
  repeating = false,
  repeatDelay = 15,
  intensity = 0.75,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isExploding, setIsExploding] = useState(false);
  const [hasExploded, setHasExploded] = useState(false); // Track if explosion happened
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Set dimensions based on container size
  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      const height = containerRef.current.offsetHeight;
      setDimensions({ width, height });

      const handleResize = () => {
        if (containerRef.current) {
          setDimensions({
            width: containerRef.current.offsetWidth,
            height: containerRef.current.offsetHeight,
          });
        }
      };

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  // Manage explosion timing
  useEffect(() => {
    const triggerExplosion = () => {
      setIsExploding(true);
      
      if (repeating) {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        
        timeoutRef.current = setTimeout(() => {
          setIsExploding(false);
          // Small delay before next explosion
          setTimeout(() => triggerExplosion(), 300);
        }, duration * 1000);
      } else {
        // For non-repeating, just mark as exploded after duration
        timeoutRef.current = setTimeout(() => {
          setHasExploded(true);
          setIsExploding(false);
        }, duration * 1000);
      }
    };

    triggerExplosion();

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [duration, repeating, repeatDelay]);

  // Generate random particles
  const createParticles = () => {
    return Array.from({ length: particleCount }).map(() => {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * maxRadius;
      const speed = 0.2 + Math.random() * 0.4; // Random speed
      const size = 0.8 + Math.random() * 2; // Reduced particle size
      const opacity = (0.2 + Math.random() * 0.5) * intensity; // Reduced opacity
      
      return {
        angle,
        distance,
        speed,
        size,
        opacity,
        color: burstColor,
      };
    });
  };

  const renderContent = isExploding || hasExploded;

  return (
    <div
      ref={containerRef}
      className={`supernova-burst-container ${className}`}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      {renderContent && (
        <>
          {/* Core glow */}
          <div
            className="supernova-core"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "8px", // Smaller core
              height: "8px", // Smaller core
              borderRadius: "50%",
              backgroundColor: coreColor,
              boxShadow: `0 0 ${15 * intensity}px ${10 * intensity}px ${coreColor}, 0 0 ${40 * intensity}px ${25 * intensity}px ${burstColor}`,
              opacity: intensity,
              transition: `opacity ${duration * 0.2}s ease-out`,
            }}
          />
          
          {/* Shockwave rings */}
          {[...Array(3)].map((_, i) => (
            <div
              key={`ring-${i}`}
              className="supernova-ring"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: hasExploded ? `${(i + 1) * 20}%` : "10px",
                height: hasExploded ? `${(i + 1) * 20}%` : "10px",
                borderRadius: "50%",
                border: `1px solid ${burstColor}`, // Thinner border
                opacity: hasExploded ? (0.3 * intensity) / (i + 1) : isExploding ? 0 : (0.6 * intensity),
                scale: isExploding && !hasExploded ? 100 : 1, 
                transition: `all ${duration * (0.5 + i * 0.2)}s cubic-bezier(0.215, 0.610, 0.355, 1.000)`,
                transitionDelay: `${i * 0.2}s`,
              }}
            />
          ))}
          
          {/* Explosion particles */}
          <svg
            width="100%"
            height="100%"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
            }}
          >
            {createParticles().map((particle, index) => {
              const centerX = dimensions.width / 2;
              const centerY = dimensions.height / 2;
              const endX = centerX + Math.cos(particle.angle) * particle.distance;
              const endY = centerY + Math.sin(particle.angle) * particle.distance;
              
              return (
                <line
                  key={`particle-${index}`}
                  x1={centerX}
                  y1={centerY}
                  x2={endX}
                  y2={endY}
                  stroke={particle.color}
                  strokeWidth={particle.size}
                  opacity={hasExploded ? particle.opacity * 0.7 : particle.opacity}
                  style={{
                    strokeDasharray: "1, 10", // More space between dashes
                    transition: `all ${duration * particle.speed}s cubic-bezier(0.215, 0.610, 0.355, 1.000)`,
                    transform: isExploding || hasExploded ? "scale(1)" : "scale(0)",
                    transformOrigin: `${centerX}px ${centerY}px`,
                  }}
                />
              );
            })}
          </svg>
        </>
      )}
      
      <style jsx>{`
        @keyframes fadeInOut {
          0% { opacity: 0; }
          15% { opacity: ${intensity}; }
          85% { opacity: ${intensity}; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}; 