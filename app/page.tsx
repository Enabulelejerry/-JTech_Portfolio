import Link from "next/link";

import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";

import Project from "@/components/Home/Project";
import Experince from "@/components/Home/Experince";
import Contact from "@/components/Home/Contact";
import Footer from "@/components/Home/Footer";
import Skills from "@/components/Home/Skills";

function portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}

      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-blue-100 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-600">Enabulele Jerry</h1>
            <div className="hidden md:flex space-x-6">
              <Link
                href="#about"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                About
              </Link>
              <Link
                href="#skills"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#experience"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Experience
              </Link>
              <Link
                href="#contact"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}

      <Hero />

      {/* About Section */}

      <About />

      {/* Skill Section */}

      <Skills />

      {/* Project Sections */}
      <Project />
      {/* Experience Section */}
      <Experince />
      <Contact />
      <Footer />
    </div>
  );
}

export default portfolio;
