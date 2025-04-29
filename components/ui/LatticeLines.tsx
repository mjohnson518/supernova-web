"use client";

import React, { useEffect, useRef, useState } from "react";

interface LatticePoint {
  x: number;
  y: number;
  id: number;
}

interface LatticeLineProps {
  className?: string;
  numPoints?: number;
  minDistance?: number;
  maxDistance?: number;
  lineColor?: string;
  lineOpacity?: number;
  lineDuration?: number;
  connectionFrequency?: number;
}

interface Connection {
  from: number;
  to: number;
  opacity: number;
  startTime: number;
}

export const LatticeLines: React.FC<LatticeLineProps> = ({
  className = "",
  numPoints = 25,
  minDistance = 100,
  maxDistance = 250,
  lineColor = "#4D84FF",
  lineOpacity = 0.2,
  lineDuration = 3,
  connectionFrequency = 0.1
}) => {
  const [points, setPoints] = useState<LatticePoint[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Generate invisible anchor points
  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      const height = containerRef.current.offsetHeight;
      setDimensions({ width, height });

      const newPoints = Array.from({ length: numPoints }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        id: i,
      }));

      setPoints(newPoints);

      // Update on resize
      const handleResize = () => {
        if (containerRef.current) {
          const width = containerRef.current.offsetWidth;
          const height = containerRef.current.offsetHeight;
          setDimensions({ width, height });

          // Update points positions on resize
          setPoints(prev => 
            prev.map(point => ({
              ...point,
              x: (point.x / dimensions.width) * width,
              y: (point.y / dimensions.height) * height,
            }))
          );
        }
      };

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [numPoints, dimensions.width, dimensions.height]);

  // Animation loop for connections
  useEffect(() => {
    if (points.length === 0) return;

    const animate = () => {
      // Randomly create new connections
      if (Math.random() < connectionFrequency && connections.length < 20) { // Limit connections
        const fromIndex = Math.floor(Math.random() * points.length);
        let toIndex;
        do {
          toIndex = Math.floor(Math.random() * points.length);
        } while (toIndex === fromIndex);

        const fromPoint = points[fromIndex];
        const toPoint = points[toIndex];
        
        // Calculate distance between points
        const distance = Math.sqrt(
          Math.pow(fromPoint.x - toPoint.x, 2) + 
          Math.pow(fromPoint.y - toPoint.y, 2)
        );

        // Only create connection if within distance range
        if (distance >= minDistance && distance <= maxDistance) {
          setConnections(prev => [
            ...prev,
            { 
              from: fromIndex, 
              to: toIndex, 
              opacity: 0, // Start invisible
              startTime: Date.now()
            }
          ]);
        }
      }

      // Update existing connections
      setConnections(prev => {
        const now = Date.now();
        
        // First create a temporary array with nullable items
        const updated = prev.map(conn => {
          const elapsed = (now - conn.startTime) / 1000; // seconds
          const halfDuration = lineDuration / 2;
          
          // First half: fade in
          if (elapsed < halfDuration) {
            return {
              ...conn,
              opacity: Math.min(lineOpacity, (elapsed / halfDuration) * lineOpacity)
            };
          } 
          // Second half: fade out
          else if (elapsed < lineDuration) {
            return {
              ...conn,
              opacity: Math.max(0, lineOpacity - ((elapsed - halfDuration) / halfDuration * lineOpacity))
            };
          }
          // Remove if animation completed
          return null;
        });
        
        // Then filter out null values and cast the result
        return updated.filter((conn): conn is Connection => conn !== null);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [points, connections, lineDuration, lineOpacity, minDistance, maxDistance, connectionFrequency]);

  return (
    <div
      ref={containerRef}
      className={`lattice-lines-container ${className}`}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        zIndex: 0,
      }}
    >
      <svg
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none"
        }}
      >
        {/* Draw lines between connected points */}
        {connections.map((conn, index) => {
          const fromPoint = points[conn.from];
          const toPoint = points[conn.to];
          return (
            <line
              key={`${conn.from}-${conn.to}-${index}`}
              x1={fromPoint.x}
              y1={fromPoint.y}
              x2={toPoint.x}
              y2={toPoint.y}
              stroke={lineColor}
              strokeWidth="1"
              opacity={conn.opacity}
            />
          );
        })}
      </svg>
    </div>
  );
}; 