import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiFramer, SiGithub, SiMongodb, SiExpress, SiNodedotjs } from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
import { Sparkles } from 'lucide-react';
import gsap from 'gsap';

const tools = [
  { name: 'React', icon: <SiReact size={32} className="text-sky-400" /> },
  { name: 'Next.js', icon: <SiNextdotjs size={32} className="text-white" /> },
  { name: 'TypeScript', icon: <SiTypescript size={32} className="text-blue-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={32} className="text-teal-400" /> },
  { name: 'Framer Motion', icon: <SiFramer size={32} className="text-pink-400" /> },
  { name: 'shadcn/ui', icon: <Sparkles size={28} className="text-violet-400" /> },
  { name: 'GSAP', icon: <FaDatabase size={28} className="text-green-300" /> },
  { name: 'GitHub', icon: <SiGithub size={32} className="text-white" /> },
  { name: 'MongoDB', icon: <SiMongodb size={32} className="text-green-500" /> },
  { name: 'Express.js', icon: <SiExpress size={32} className="text-gray-300" /> },
  { name: 'Node.js', icon: <SiNodedotjs size={32} className="text-green-400" /> },
];

const ToolsSection = () => {
  useEffect(() => {
    gsap.fromTo(
      '.tool-icon',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.tools-section',
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section id="tools" className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-6 tools-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tools I <span className="text-blue-400">Use</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A growing stack of technologies I use to build performant and beautiful applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-2 tool-icon"
              whileHover={{ scale: 1.1 }}
            >
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center">
                {tool.icon}
              </div>
              <span className="text-sm text-gray-300">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
