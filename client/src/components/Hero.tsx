import { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".hero-text",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 }
    ).fromTo(
      ".hero-image",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1 },
      "-=0.5"
    );
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-blue-900/20"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-blue-400 text-lg mb-4 hero-text"
            >
              Hello, I'm
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 hero-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-white">Arpita</span>{" "}
              <span className="text-blue-400">Panda</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 hero-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Frontend Developer <span className="text-blue-400">&</span> MERN
              Stack Learner
            </motion.p>

            <motion.p
              className="text-gray-400 mb-8 max-w-md hero-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Passionate about creating beautiful, functional digital
              experiences that make a difference in people's lives. I specialize
              in building clean, interactive, and user-centric web experiences
              using React, Tailwind CSS, and modern UI principles. Currently
              expanding my skills into backend development with MongoDB,
              Express, and Node.js.
            </motion.p>

            <motion.div
              className="flex space-x-4 mb-8 hero-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-colors duration-200"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-8 py-3 rounded-full transition-all duration-200"
              >
                View Work
              </motion.a>
            </motion.div>

            <motion.div
              className="flex space-x-4 hero-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <motion.a
                href="https://github.com/ArpitaPanda261"
                whileHover={{ y: -2 }}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/arpita-panda-220168209"
                whileHover={{ y: -2 }}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="mailto:codedbyarpita@gmail.com"
                whileHover={{ y: -2 }}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Mail size={24} />
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="relative hero-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full blur-2xl opacity-20"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-blue-500/20 to-blue-700/20 rounded-full border border-blue-400/30 flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="text-blue-400" size={32} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
