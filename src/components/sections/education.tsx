"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

export default function EducationSection() {
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

  const achievements = [
    "Strong foundation in computer science fundamentals",
    "Hands-on experience with modern programming languages",
    "Understanding of software development methodologies",
    "Database management and system design concepts",
    "Web development and user interface design",
    "Problem-solving and analytical thinking skills",
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
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
              Education
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-4"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My academic journey and the foundation that shaped my career in technology
            </p>
          </motion.div>

          {/* Education Timeline */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div>

              {/* Education Card */}
              <div className="relative pl-20 pb-12">
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800"></div>

                {/* Education Content */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* Degree Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        Bachelor of Computer Applications (BCA)
                      </h3>
                      <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                          <GraduationCap size={16} />
                          <span className="font-medium">Manipal University Jaipur</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>Jaipur, Rajasthan</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium mt-4 sm:mt-0">
                      <Calendar size={16} />
                      <span>2023 – 2026</span>
                    </div>
                  </div>

                  {/* University Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Manipal University Jaipur is a premier institution known for its excellence in
                    computer science education. The BCA program provided me with a comprehensive
                    understanding of computer applications, programming languages, and software
                    development methodologies.
                  </p>

                  {/* Key Learning Areas */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Key Learning Areas
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {achievements.map((achievement, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: 0.8 + index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <Award size={16} className="text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            {achievement}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Course Highlights */}
                  <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Course Highlights
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Programming Fundamentals",
                        "Data Structures & Algorithms",
                        "Database Management",
                        "Web Development",
                        "Software Engineering",
                        "Computer Networks",
                        "Operating Systems",
                        "Object-Oriented Programming",
                        "System Analysis & Design",
                        "Project Management",
                      ].map((course, index) => (
                        <motion.span
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                        >
                          {course}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Continuous Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Beyond formal education, I&apos;m committed to continuous learning and staying
                updated with the latest technologies. I regularly participate in online courses,
                attend tech conferences, and contribute to open-source projects to enhance my skills
                and knowledge in web development.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
