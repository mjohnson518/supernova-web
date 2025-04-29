"use client";

import React, { useEffect, useRef, useState, ElementType } from "react";

type SplitBy = "text" | "word" | "character" | "line";

interface TextAnimateProps {
  children: string;
  className?: string;
  delay?: number;
  duration?: number;
  as?: ElementType;
  by?: SplitBy;
  startOnView?: boolean;
  once?: boolean;
}

export const TextAnimate: React.FC<TextAnimateProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.3,
  as: Component = "p",
  by = "word",
  startOnView = true,
  once = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(!startOnView);
  const [elements, setElements] = useState<string[]>([]);

  // Split text based on the "by" prop
  useEffect(() => {
    if (by === "text") {
      setElements([children]);
    } else if (by === "word") {
      setElements(children.split(/\s+/));
    } else if (by === "character") {
      setElements(children.split(""));
    } else if (by === "line") {
      setElements(children.split("\n"));
    }
  }, [children, by]);

  // Intersection observer for triggering animation
  useEffect(() => {
    if (!startOnView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [startOnView, once]);

  return (
    <div ref={containerRef} className={`text-animate-container ${className}`}>
      <Component className="text-animate-content" style={{ display: "inline-block" }}>
        {by === "text" ? (
          <span
            style={{
              display: "inline-block",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(10px)",
              filter: isVisible ? "blur(0px)" : "blur(8px)",
              transition: `opacity ${duration}s ease, transform ${duration}s ease, filter ${duration}s ease`,
              transitionDelay: `${delay}s`,
            }}
          >
            {children}
          </span>
        ) : (
          elements.map((element, i) => (
            <span
              key={i}
              style={{
                display: by === "character" ? "inline-block" : by === "line" ? "block" : "inline-block",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(10px)",
                filter: isVisible ? "blur(0px)" : "blur(8px)",
                transition: `opacity ${duration}s ease, transform ${duration}s ease, filter ${duration}s ease`,
                transitionDelay: `${delay + i * 0.05}s`,
                marginRight: by === "character" ? "0" : "0.25em",
                marginLeft: by === "character" ? "0" : "",
                whiteSpace: by === "character" ? "pre" : "",
              }}
            >
              {element}
              {by === "line" && i < elements.length - 1 ? <br /> : ""}
            </span>
          ))
        )}
      </Component>
    </div>
  );
}; 