"use client";

import { useEffect, useState } from "react";

// Pre-defined particle positions to avoid hydration mismatch
const particlePositions = [
  { left: 10, top: 20, delay: 0.5, duration: 2.5 },
  { left: 25, top: 60, delay: 1.2, duration: 3.2 },
  { left: 40, top: 15, delay: 0.8, duration: 2.8 },
  { left: 60, top: 80, delay: 1.8, duration: 3.5 },
  { left: 75, top: 30, delay: 0.3, duration: 2.2 },
  { left: 90, top: 70, delay: 2.1, duration: 3.8 },
  { left: 15, top: 85, delay: 1.5, duration: 2.9 },
  { left: 35, top: 45, delay: 0.7, duration: 3.1 },
  { left: 55, top: 10, delay: 1.9, duration: 2.6 },
  { left: 80, top: 55, delay: 0.4, duration: 3.3 },
  { left: 5, top: 40, delay: 1.3, duration: 2.7 },
  { left: 30, top: 75, delay: 0.9, duration: 3.4 },
  { left: 50, top: 25, delay: 1.7, duration: 2.4 },
  { left: 70, top: 90, delay: 0.6, duration: 3.6 },
  { left: 85, top: 5, delay: 2.0, duration: 2.3 },
  { left: 20, top: 50, delay: 1.1, duration: 3.0 },
  { left: 45, top: 35, delay: 0.2, duration: 2.8 },
  { left: 65, top: 65, delay: 1.6, duration: 3.2 },
  { left: 95, top: 40, delay: 0.8, duration: 2.9 },
  { left: 12, top: 95, delay: 1.4, duration: 3.7 },
];

export default function MouseEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners
    window.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll(
      "button, a, [role='button'], input, textarea, select"
    );

    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", () => setIsHovering(true));
      element.addEventListener("mouseleave", () => setIsHovering(false));
    });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Don't render on server to avoid hydration mismatch
  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* Cursor Trail */}
      <div className="fixed top-0 left-0 pointer-events-none z-40">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400/30 rounded-full transition-all duration-500 ease-out"
            style={{
              transform: `translate(${mousePosition.x - 4}px, ${mousePosition.y - 4}px)`,
              transitionDelay: `${i * 100}ms`,
              scale: isHovering ? 0.5 : 1,
            }}
          />
        ))}
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none z-30">
        {particlePositions.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}
