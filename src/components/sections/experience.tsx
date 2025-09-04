"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Building, CheckCircle } from "lucide-react";

export default function ExperienceSection() {
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

  const responsibilities = [
    "Built responsive and interactive web applications using React.js and Next.js",
    "Integrated RESTful APIs and third-party services for seamless data flow",
    "Implemented SEO best practices and accessibility standards (WCAG 2.1)",
    "Debugged and resolved complex issues to ensure optimal performance",
    "Optimized application performance through code splitting and lazy loading",
    "Collaborated with cross-functional teams using Agile methodologies",
    "Participated in code reviews and maintained high code quality standards",
    "Mentored junior developers and shared knowledge within the team",
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
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
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My journey in web development and the impact I&apos;ve made in the industry
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div>

              {/* Experience Card */}
              <div className="relative pl-20 pb-12">
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800"></div>

                {/* Experience Content */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* Company Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        React.js Developer
                      </h3>
                      <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <Building size={16} />
                          <span className="font-medium">Vhub.ai</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>Remote</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium mt-4 sm:mt-0">
                      <Calendar size={16} />
                      <span>Feb 2023 – Present</span>
                    </div>
                  </div>

                  {/* Company Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Vhub.ai is a cutting-edge technology company focused on AI-driven solutions and
                    innovative web applications. As a React.js Developer, I&apos;ve been
                    instrumental in building scalable, high-performance applications that serve
                    thousands of users.
                  </p>

                  {/* Key Responsibilities */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Key Responsibilities & Achievements
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {responsibilities.map((responsibility, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: 0.8 + index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            {responsibility}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Used */}
                  <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Technologies & Tools
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React.js",
                        "Next.js",
                        "Redux",
                        "TypeScript",
                        "Tailwind CSS",
                        "Material UI",
                        "REST APIs",
                        "Git",
                        // "Jest",
                        // "Webpack",
                        // "Vite",
                      ].map((tech, index) => (
                        <motion.span
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
