import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
} from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    gsap.fromTo(
      ".contact-section",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".contact-container",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const validateForm = () => {
    const { name, email, subject, message } = formData;

    if (name.trim().length < 2) {
      toast.error("Name must be at least 2 characters long.");
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    if (subject.trim() === "") {
      toast.error("Subject is required.");
      return false;
    }

    if (message.trim().length < 10) {
      toast.error("Message must be at least 10 characters long.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post("https://portfolio-server-vqpb.onrender.com/api/contact", formData);
      console.log("✅ Form submitted:", response.data);
      toast.success("🎉 Your message has been sent!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "codedbyarpita@gmail.com",
      link: "mailto:codedbyarpita@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 8770-731-006",
      link: "tel:+918770731006",
    },
    { icon: MapPin, title: "Location", value: "India" },
  ];

  const socialLinks = [
    { icon: Github, link: "https://github.com/ArpitaPanda261", label: "GitHub" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/arpita-panda-220168209", label: "LinkedIn" },
    { icon: Twitter, link: "https://x.com/Arpita6002", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-20 bg-black px-4 sm:px-6 lg:px-8"> {/* ✅ Added px for small screens */}
      <div className="max-w-7xl mx-auto contact-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to
            bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="contact-section"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              I'm always excited to work on new projects and collaborate with
              amazing people. Whether you have a question, want to discuss a
              project, or just want to say hi, feel free to reach out!
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  whileHover={{ x: 10 }}
                  className="flex flex-wrap items-center space-x-4 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                    <info.icon className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="text-white font-medium">{info.title}</p>
                    <p className="text-sm break-words">{info.value}</p> {/* ✅ handles small screens */}
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="flex space-x-4 flex-wrap"> {/* ✅ wrap social icons on small screens */}
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.link}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="contact-section"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors duration-200"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors duration-200"
                  placeholder="Project Discussion"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 pt-8 border-t border-gray-800"
        >
          <footer className="text-center text-gray-500 text-sm py-6 border-t border-gray-800">
            © 2025 Arpita Panda. All content, code, and designs are protected.
            Unauthorized use or reproduction is strictly prohibited.
          </footer>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
