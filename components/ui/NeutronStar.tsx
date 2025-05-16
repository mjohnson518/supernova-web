"use client";

import React, { useEffect, useRef } from "react";

interface NeutronStarProps {
  className?: string;
  position?: { x: number; y: number };
  radius?: number;
  coreColor?: string;
  pulseColor?: string;
  pulseFrequency?: number;
  rotationSpeed?: number;
}

export const NeutronStar: React.FC<NeutronStarProps> = ({
  className = "",
  position = { x: 50, y: 80 }, // Position in percentage of parent
  radius = 5,
  coreColor = "#FFFFFF",
  pulseColor = "#4D84FF",
  pulseFrequency = 0.5 + Math.random() * 2, // Random pulses per second between 1.5 and 3.5
  rotationSpeed = 3 + Math.random() * 10, // Random rotation speed between 5-15 degrees per second
}) => {
  const starRef = useRef<HTMLDivElement>(null);
  const beamRef = useRef<HTMLDivElement>(null);
  const angleRef = useRef(0);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    // Animation loop for rotation and pulsing
    const animate = () => {
      if (starRef.current && beamRef.current) {
        // Update rotation
        angleRef.current += rotationSpeed / 60; // At 60fps
        beamRef.current.style.transform = `translate(-50%, -50%) rotate(${angleRef.current}deg)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [rotationSpeed]);

  return (
    <div 
      className={`neutron-star-container ${className}`}
      style={{
        position: "absolute",
        top: `${position.y}%`,
        left: `${position.x}%`,
        width: 0,
        height: 0,
        zIndex: 2,
      }}
    >
      {/* Radiation beams */}
      <div
        ref={beamRef}
        className="radiation-beams"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(0deg)",
          width: `${radius * 60}px`,
          height: `${radius * 60}px`,
          pointerEvents: "none",
        }}
      >
        <div 
          className="beam beam-1"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "100%",
            height: "2px",
            background: `linear-gradient(90deg, transparent, ${pulseColor}, transparent)`,
            transform: "translate(-50%, -50%)",
            animation: `neutronPulse ${1 / pulseFrequency}s ease-in-out infinite`,
            opacity: 0.6,
          }}
        />
        <div 
          className="beam beam-2"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "2px",
            height: "100%",
            background: `linear-gradient(0deg, transparent, ${pulseColor}, transparent)`,
            transform: "translate(-50%, -50%)",
            animation: `neutronPulse ${1 / pulseFrequency}s ease-in-out infinite`,
            opacity: 0.6,
          }}
        />
      </div>

      {/* Dense core */}
      <div
        ref={starRef}
        className="star-core"
        style={{
          position: "absolute",
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
          borderRadius: "50%",
          backgroundColor: coreColor,
          boxShadow: `0 0 ${radius * 1.5}px ${radius * 0.5}px ${pulseColor}`,
          animation: `neutronGlow ${1 / pulseFrequency}s ease-in-out infinite`,
          transform: "translate(-50%, -50%)",
        }}
      />

      <style jsx>{`
        @keyframes neutronPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.9; }
        }
        
        @keyframes neutronGlow {
          0%, 100% { 
            box-shadow: 0 0 ${radius * 1.5}px ${radius * 0.5}px ${pulseColor};
          }
          50% { 
            box-shadow: 0 0 ${radius * 3}px ${radius}px ${pulseColor};
          }
        }
      `}</style>
    </div>
  );
}; 