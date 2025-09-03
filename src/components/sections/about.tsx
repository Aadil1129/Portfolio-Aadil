"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Users, Zap, Shield } from "lucide-react";

export default function AboutSection() {
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



  const highlights = [
    {
      icon: Code,
      title: "2+ Years Experience",
      description: "Extensive experience in React.js, Next.js, and modern web technologies",
    },
    {
      icon: Users,
      title: "Agile Collaboration",
      description: "Experienced in Agile methodologies and cross-functional team collaboration",
    },
    {
      icon: Zap,
      title: "Performance Focus",
      description: "Specialized in performance optimization and SEO implementation",
    },
    {
      icon: Shield,
      title: "Accessibility First",
      description: "Committed to building accessible and inclusive web experiences",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I&apos;m a passionate React.js Developer based in Delhi, India, with over 2 years of
                experience in building modern, scalable web applications. My journey in web
                development has been driven by a love for creating exceptional user experiences and
                solving complex technical challenges.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I specialize in <strong className="text-gray-900 dark:text-white">React.js</strong>,
                <strong className="text-gray-900 dark:text-white"> Next.js</strong>, and
                <strong className="text-gray-900 dark:text-white"> Redux</strong>, with a strong
                focus on performance optimization, SEO, and accessibility. I&apos;m experienced in
                <strong className="text-gray-900 dark:text-white"> UI/UX design</strong> principles
                and work closely with design teams to bring beautiful interfaces to life.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Currently working at{" "}
                <strong className="text-gray-900 dark:text-white">Vhub.ai</strong>, I&apos;ve been
                instrumental in building responsive applications, integrating APIs, and implementing
                best practices for SEO and accessibility. I thrive in
                <strong className="text-gray-900 dark:text-white"> Agile environments</strong> and
                enjoy collaborating with cross-functional teams to deliver high-quality solutions.
              </p>
            </motion.div>

            {/* Right Column - Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                      <highlight.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
