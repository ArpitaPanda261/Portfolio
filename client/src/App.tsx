import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Toaster } from "react-hot-toast";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import ToolsSection from "./components/ToolsIUse";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll(
      'nav a[href^="#"], .scroll-link'
    );
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href")?.substring(1);
        const targetElement = document.getElementById(targetId || "");
        if (targetElement) {
          gsap.to(window, {
            duration: 1.5,
            scrollTo: targetElement,
            ease: "power2.inOut",
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#1f2937", // dark gray
            color: "#fff",
            border: "1px solid #3b82f6", // blue border
          },
          success: {
            iconTheme: {
              primary: "#3b82f6",
              secondary: "#fff",
            },
          },
        }}
      />
      <Navigation />
      <main>
        <Hero />
        <About />
        <ToolsSection />
        <Projects />
        <Services />
        <Contact />
      </main>
    </div>
  );
}

export default App;
