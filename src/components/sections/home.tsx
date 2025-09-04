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
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden"
    >
      {/* Space Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>

      {/* Stars Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-60">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.8'%3E%3Ccircle cx='20' cy='20' r='0.5'/%3E%3Ccircle cx='80' cy='40' r='0.3'/%3E%3Ccircle cx='40' cy='80' r='0.4'/%3E%3Ccircle cx='90' cy='90' r='0.2'/%3E%3Ccircle cx='10' cy='60' r='0.3'/%3E%3Ccircle cx='60' cy='10' r='0.4'/%3E%3Ccircle cx='30' cy='50' r='0.2'/%3E%3Ccircle cx='70' cy='70' r='0.3'/%3E%3Ccircle cx='50' cy='30' r='0.2'/%3E%3Ccircle cx='15' cy='85' r='0.4'/%3E%3Ccircle cx='85' cy='15' r='0.3'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
      </div>

      {/* Large Planet/Orb */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full filter blur-3xl animate-pulse"></div>

      {/* Medium Planet */}
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full filter blur-2xl animate-pulse animation-delay-2000"></div>

      {/* Small Planet */}
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-400/25 to-cyan-400/25 rounded-full filter blur-xl animate-pulse animation-delay-4000"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-white/60 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-400/80 rounded-full animate-ping animation-delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-purple-400/70 rounded-full animate-ping animation-delay-2000"></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-pink-400/80 rounded-full animate-ping animation-delay-3000"></div>
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
                HI, I&apos;M
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
              className="text-lg text-gray-300 max-w-2xl mb-12 leading-relaxed"
            >
              I build responsive, accessible, and SEO-friendly web experiences that are fast,
              scalable, and delightful.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
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

          {/* Right Column - Visual Elements */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center items-center"
          >
            {/* Main Character/Developer Illustration */}
            <div className="relative">
              {/* Character placeholder - you can replace with an actual illustration */}
              <div className="w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center border-2 border-white/20 backdrop-blur-sm">
                <div className="text-center text-white">
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
                        <path
                          d="M-15,-35 Q0,-45 15,-35 Q10,-30 0,-30 Q-10,-30 -15,-35"
                          fill="#8b4513"
                        />

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
                        <rect
                          x="-30"
                          y="10"
                          width="60"
                          height="35"
                          rx="3"
                          fill="#c0c0c0"
                          opacity="0.9"
                        />
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
                  {/* <p className="text-sm opacity-80">Developer Illustration</p> */}
                </div>
              </div>

              {/* Floating Tech Badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -top-8 -right-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium"
              >
                React
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute top-16 -left-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium"
              >
                Next.js
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                className="absolute -bottom-8 left-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm font-medium"
              >
                TS
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
