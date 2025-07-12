import { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Code, Palette, Zap, Heart } from "lucide-react";

const About = () => {
  useEffect(() => {
    gsap.fromTo(
      ".about-section",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const skills = [
    { icon: Code, name: "Frontend Development", level: 90 },
    { icon: Palette, name: "UI/UX Design", level: 85 },
    { icon: Zap, name: "Backend Development", level: 60 },
    { icon: Heart, name: "Problem Solving", level: 80 },
  ];

  return (
    <section
      id="about"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-900 to-black"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 md:mb-16 about-section"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-xl sm:max-w-2xl mx-auto">
            Frontend Developer with a creative edge having 2 years of
            experience, now diving deep into the world of backend with the MERN
            stack.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="about-section"
          >
            <div className="relative flex justify-center">
              <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-gradient-to-br from-blue-500/20 to-blue-700/20 rounded-2xl border border-blue-400/30 mx-auto mb-6 sm:mb-8 flex items-center justify-center">
                <div className="text-6xl sm:text-7xl md:text-8xl">🚀</div>
              </div>
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-14 h-14 sm:w-20 sm:h-20 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-xs sm:text-base font-bold text-white">
                  React 2+
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="about-section"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              My Journey
            </h3>
            <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">
              I began as a frontend developer passionate about turning creative
              ideas into interactive, user-friendly web interfaces using tools
              like React, Tailwind CSS, and Framer Motion.
            </p>
            <p className="text-gray-400 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg">
              Currently, I’m expanding my skillset into backend development with
              MongoDB, Express, and Node.js — working toward becoming a
              confident full stack developer. I love learning, solving UI
              challenges, and building elegant web experiences from scratch.
            </p>

            <div className="space-y-4 sm:space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-3 sm:space-x-4"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                    <skill.icon className="text-blue-400" size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1 sm:mb-2">
                      <span className="text-white font-medium text-sm sm:text-base">
                        {skill.name}
                      </span>
                      <span className="text-blue-400 text-sm sm:text-base">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1.5 sm:h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-blue-500 to-blue-400 h-1.5 sm:h-2 rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
