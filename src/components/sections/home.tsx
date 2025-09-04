"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function HomeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"
    >
      {/* Space Background */}
      <div className="absolute inset-0">
        {/* Stars */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div
          className="absolute top-40 right-32 w-1 h-1 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-60 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-80 right-20 w-1 h-1 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-32 left-2/3 w-1 h-1 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>

        {/* Planets */}
        <div
          className="absolute top-32 right-40 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full opacity-80 animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-70 animate-pulse"
          style={{ animationDelay: "2.5s" }}
        ></div>

        {/* Floating Particles */}
        <div
          className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white rounded-full animate-bounce"
          style={{ animationDelay: "0.5s", animationDuration: "2.5s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto w-full z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-left"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0 }}
              className="mb-4"
            >
              <span className="text-gray-400 text-sm font-medium tracking-wider uppercase">
                HI, I'M
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent border-2 border-white/20 rounded-2xl px-6 py-2 inline-block">
                Aadil Ali
              </span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl sm:text-2xl lg:text-3xl text-white mb-8 font-semibold"
            >
              React.js Developer • Next.js • TypeScript
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-300 max-w-2xl mb-8 leading-relaxed"
            >
              I build responsive, accessible, and SEO-friendly web experiences that are fast,
              scalable, and delightful.
            </motion.p>

            {/* Technology Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <span className="px-4 py-2 bg-blue-600/20 text-blue-400 border border-blue-500/30 rounded-full text-sm font-medium backdrop-blur-sm">
                React.js
              </span>
              <span className="px-4 py-2 bg-gray-600/20 text-gray-300 border border-gray-500/30 rounded-full text-sm font-medium backdrop-blur-sm">
                Next.js
              </span>
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 border border-blue-400/30 rounded-full text-sm font-medium backdrop-blur-sm">
                TypeScript
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                type="button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  console.log("View Projects button clicked");

                  // Try multiple ways to find the projects section
                  let projectsSection = document.getElementById("projects");

                  if (!projectsSection) {
                    // Try finding by class or other selectors
                    projectsSection = document.querySelector('[id="projects"]');
                  }

                  if (!projectsSection) {
                    // Try finding the section element
                    const sections = document.querySelectorAll("section");
                    const foundSection = Array.from(sections).find(
                      (section) =>
                        section.id === "projects" ||
                        section.querySelector("h2")?.textContent?.toLowerCase().includes("project")
                    );
                    projectsSection = foundSection || null;
                  }

                  console.log("Projects section found:", projectsSection);

                  if (projectsSection) {
                    projectsSection.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                      inline: "nearest",
                    });
                    console.log("Scrolling to projects section");
                  } else {
                    console.log("Projects section not found, scrolling to bottom");
                    // Fallback: scroll to bottom of page
                    window.scrollTo({
                      top: document.body.scrollHeight,
                      behavior: "smooth",
                    });
                  }
                }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl hover-glow"
              >
                View Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  // Download resume PDF
                  const link = document.createElement("a");
                  link.href = "/Resume.pdf";
                  link.download = "Aadil_Ali_Resume.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="px-8 py-4 border-2 border-white/20 text-white hover:bg-white/10 rounded-lg font-medium transition-all duration-200 backdrop-blur-sm hover-glow"
              >
                Get Resume
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Developer Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            {/* Custom Developer Illustration */}
            <div className="w-64 h-64 mx-auto mb-4 flex items-center justify-center">
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Person */}
                <g transform="translate(100, 100)">
                  {/* Body */}
                  <ellipse cx="0" cy="15" rx="25" ry="35" fill="#ffffff" opacity="0.9" />

                  {/* Head */}
                  <circle cx="0" cy="-25" r="18" fill="#fdbcb4" />

                  {/* Hair */}
                  <path d="M-15,-35 Q0,-45 15,-35 Q10,-30 0,-30 Q-10,-30 -15,-35" fill="#8b4513" />

                  {/* Eyes */}
                  <circle cx="-6" cy="-28" r="2" fill="#000" />
                  <circle cx="6" cy="-28" r="2" fill="#000" />

                  {/* Smile */}
                  <path
                    d="M-8,-20 Q0,-15 8,-20"
                    stroke="#000"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                  />

                  {/* Arms */}
                  <ellipse
                    cx="-20"
                    cy="5"
                    rx="8"
                    ry="20"
                    fill="#ffffff"
                    opacity="0.9"
                    transform="rotate(-20 -20 5)"
                  />
                  <ellipse
                    cx="20"
                    cy="5"
                    rx="8"
                    ry="20"
                    fill="#ffffff"
                    opacity="0.9"
                    transform="rotate(20 20 5)"
                  />

                  {/* Legs */}
                  <ellipse
                    cx="-8"
                    cy="45"
                    rx="6"
                    ry="25"
                    fill="#1a1a1a"
                    transform="rotate(-10 -8 45)"
                  />
                  <ellipse
                    cx="8"
                    cy="45"
                    rx="6"
                    ry="25"
                    fill="#1a1a1a"
                    transform="rotate(10 8 45)"
                  />

                  {/* Laptop */}
                  <rect x="-30" y="10" width="60" height="35" rx="3" fill="#c0c0c0" opacity="0.9" />
                  <rect x="-28" y="12" width="56" height="25" fill="#000" opacity="0.8" />
                  <rect
                    x="-26"
                    y="14"
                    width="52"
                    height="21"
                    fill="url(#screenGradient)"
                    opacity="0.6"
                  />

                  {/* Laptop Screen Content */}
                  <rect x="-24" y="16" width="48" height="17" fill="#00ff00" opacity="0.3" />
                  <rect x="-22" y="18" width="44" height="13" fill="#0080ff" opacity="0.4" />
                </g>

                {/* Gradients */}
                <defs>
                  <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00ff00" />
                    <stop offset="50%" stopColor="#0080ff" />
                    <stop offset="100%" stopColor="#8000ff" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
