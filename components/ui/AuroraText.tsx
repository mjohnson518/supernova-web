"use client";

import React, { ReactNode } from "react";

interface AuroraTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  speed?: number;
}

export const AuroraText: React.FC<AuroraTextProps> = ({
  children,
  className = "",
  colors = ["#4D84FF", "#00F5D4", "#6A3093", "#FF3366"],
  speed = 1,
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
          animation: `aurora-text-diagonal ${7 / speed}s linear infinite`,
        }}
      >
        {children}
      </div>
      <style jsx>{`
        @keyframes aurora-text-diagonal {
          0% {
            background-position: 100% 100%;
          }
          50% {
            background-position: 50% 50%;
          }
          100% {
            background-position: 0% 0%;
          }
        }
      `}</style>
    </div>
  );
}; 