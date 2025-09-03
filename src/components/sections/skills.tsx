"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript", level: 95 },
        { name: "HTML", level: 90 },
        { name: "CSS", level: 95 },
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Frameworks",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 90 },
      ],
      color: "from-green-500 to-green-600",
    },
    {
      title: "State Management",
      skills: [
        { name: "Redux", level: 85 },
        { name: "Context API", level: 90 },
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Styling",
      skills: [
        { name: "Material UI", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Styled Components", level: 80 },
      ],
      color: "from-pink-500 to-pink-600",
    },
    {
      title: "Tools",
      skills: [
        { name: "Git & GitHub", level: 90 },
        // { name: "Postman", level: 85 },
        { name: "Figma", level: 80 },
        // { name: "Webpack", level: 75 },
        // { name: "Vite", level: 85 },
      ],
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
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
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and expertise in modern web
              development
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4`}
                >
                  <span className="text-white font-bold text-lg">{category.title.charAt(0)}</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {category.title}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1,
                            delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05,
                          }}
                          className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              Additional Expertise
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "RESTful APIs",
                "GraphQL",
                "TypeScript",
                "Node.js",
                // "MongoDB",
                "Firebase",
                // "AWS",
                // "Docker",
                // "Jest",
                // "Cypress",
                "Responsive Design",
                "Progressive Web Apps",
                "Web Performance",
                "SEO Optimization",
              ].map((skill, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
