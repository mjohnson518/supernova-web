"use client";

import React, { ReactNode } from "react";

interface AuroraTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  speed?: number;
  size?: "normal" | "large";
  glowOpacity?: number;
}

export const AuroraText: React.FC<AuroraTextProps> = ({
  children,
  className = "",
  colors = ["#4D84FF", "#00F5D4", "#6A3093", "#FF3366"],
  speed = 0.5,
  size = "normal",
  glowOpacity = 0.3,
}) => {
  return (
    <div
      className={`aurora-text-container ${className}`}
      style={{
        position: "relative",
        display: "inline-block",
        isolation: "isolate",
        lineHeight: "1",
        color: "transparent",
      }}
    >
      <div
        className="aurora-glow"
        style={{
          position: "absolute",
          top: "-30%",
          left: "-30%",
          width: "160%",
          height: "160%",
          borderRadius: "30%",
          background: `radial-gradient(circle at 50% 50%, ${colors[0]}10, ${colors[1]}08, ${colors[2]}05, transparent 70%)`,
          filter: "blur(10px)",
          opacity: glowOpacity,
          animation: `aurora-glow-rotate ${10 / speed}s ease-in-out infinite`,
          zIndex: -1,
        }}
      />
      
      <div
        className="aurora-text-content"
        style={{
          position: "relative",
          zIndex: 10,
          backgroundImage: `linear-gradient(
              135deg,
              ${colors.join(", ")}
            )`,
          backgroundSize: "300% 300%",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: `aurora-text-diagonal ${5 / speed}s linear infinite`,
          fontSize: size === "large" ? "calc(2rem + 3vw)" : "inherit",
          fontWeight: "bold",
          textShadow: "0 0 15px rgba(0, 245, 212, 0.4)",
        }}
      >
        {children}
      </div>
      <style jsx>{`
        @keyframes aurora-text-diagonal {
          0% {
            background-position: 0% 0%;
          }
          25% {
            background-position: 100% 25%;
          }
          50% {
            background-position: 100% 100%;
          }
          75% {
            background-position: 25% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }
        
        @keyframes aurora-glow-rotate {
          0% {
            transform: rotate(0deg) scale(1);
            opacity: ${glowOpacity * 0.7};
          }
          50% {
            transform: rotate(180deg) scale(1.1);
            opacity: ${glowOpacity};
          }
          100% {
            transform: rotate(360deg) scale(1);
            opacity: ${glowOpacity * 0.7};
          }
        }
      `}</style>
    </div>
  );
}; 