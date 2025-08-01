import { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import {
  ExternalLink,
  Github,
  Smartphone,
  Globe,
  ShoppingCart,
} from "lucide-react";
import portfolio from "../assets/portfolio.png";
import chatterbox from "../assets/chatterbox.png";
import invoiceapp from "../assets/invoiceapp.png";

const Projects = () => {
  useEffect(() => {
    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const projects = [
    {
      id: 1,
      title: "Invoice Web App",
      description:
        "A modern invoice creation and management tool built with React, Zustand, Tailwind CSS, and Framer Motion. Features include dynamic item calculation, tax handling, PDF generation, and form validation using shadcn/ui and lucide-react icons.",
      image: invoiceapp,
      tech: [
        "React",
        "Zustand",
        "Tailwind CSS",
        "Framer Motion",
        "shadcn/ui",
        "Lucide",
        "PDFMake",
      ],
      icon: ShoppingCart,
      github: "https://github.com/ArpitaPanda261/Invoice-Webapp",
      demo: "https://invoice-webapp06.netlify.app/",
    },

    {
      id: 2,
      title: "Chatter Box App",
      description:
        "My first MERN stack app featuring user authentication, theme toggling, and user status display. Real-time chatting and live status updates are planned for future versions.",
      image: chatterbox,
      tech: ["MongoDB", "Express", "React", "Node.js"],
      icon: Smartphone,
      github: "https://github.com/ArpitaPanda261/Chatter-Box",
      demo: "https://chatter-box-web06.netlify.app",
    },
    {
      id: 3,
      title: "Animated Portfolio Website",
      description:
        "A modern and animated portfolio built with React, Tailwind CSS, GSAP, and Framer Motion. It features responsive layouts, scroll animations, and a dark UI theme with shadcn/ui.",
      image: portfolio, // <-- Use the imported image here
      tech: ["React", "Tailwind", "Framer Motion", "GSAP", "shadcn/ui"],
      icon: Globe,
      github: "https://github.com/ArpitaPanda261/Portfolio",
      demo: "https://portfolio-web06.netlify.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 projects-grid">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -10 }}
              className="project-card bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute top-4 left-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <project.icon className="text-white" size={24} />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
