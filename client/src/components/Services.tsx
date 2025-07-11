import { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Code, Palette, Smartphone, Globe, Database, Zap } from "lucide-react";

const Services = () => {
  useEffect(() => {
    gsap.fromTo(
      ".service-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "Crafting responsive, accessible, and interactive UIs with modern frontend frameworks and animations.",
      features: [
        "React & Tailwind CSS",
        "Framer Motion / GSAP",
        "Responsive Design",
        "Cross-Browser Support",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design Implementation",
      description:
        "Translating design concepts into functional, pixel-perfect components with seamless user experience.",
      features: [
        "Figma to Code",
        "Reusable Components",
        "Dark Mode & Themes",
        "Accessibility (a11y)",
      ],
    },
    {
      icon: Database,
      title: "Learning Backend (MERN)",
      description:
        "Currently building backend skills with MongoDB, Express, and Node.js to become a complete full stack developer.",
      features: [
        "Node.js & Express",
        "MongoDB Basics",
        "API Development",
        "Authentication (coming soon)",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile-Friendly Development",
      description:
        "Building fully responsive layouts and mobile-optimized UIs for smooth experiences across all screen sizes.",
      features: [
        "Media Queries",
        "Tailwind Breakpoints",
        "Touch-friendly UI",
        "Performance Tuning",
      ],
    },
    {
      icon: Globe,
      title: "Single Page Applications",
      description:
        "Creating interactive and fast-loading SPAs using React and component-driven development.",
      features: [
        "Routing & State Management",
        "Framer Motion Effects",
        "Optimized Build",
        "SEO Basics",
      ],
    },
    {
      icon: Zap,
      title: "Performance & Animations",
      description:
        "Bringing life to interfaces with smooth transitions, animations, and performance enhancements.",
      features: [
        "GSAP / Framer Motion",
        "Lazy Loading",
        "Code Splitting",
        "Micro-interactions",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-gray-900 to-black"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What I <span className="text-blue-400">Do</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I offer comprehensive development services to bring your digital
            ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 services-grid">
          {services.map((service) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -10, scale: 1.02 }}
              className="service-card bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mb-6">
                <service.icon className="text-blue-400" size={32} />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">
            Ready to start your next project?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-colors duration-200 inline-block"
          >
            Let's Work Together
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
