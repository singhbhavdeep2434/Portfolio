import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <a href="#hero" className="text-xl font-bold">
          Bhavdeep Singh
        </a>
      </h1>
        {/* <h1 href="#projects" className="text-xl font-bold">Bhavdeep Singh</h1> */}
        {/* <h1><img src="src/components/logo-svg.svg" alt="Logo" className="h-20 w-auto" /></h1> */}

       
        <nav className="flex gap-6">
          <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
          <a href="#education" className="hover:text-blue-400 transition-colors">Education</a>
          <a href="#certifications" className="hover:text-blue-400 transition-colors">Certifications</a>
          <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
        </nav>
        <div className="flex gap-4">
          <a href="https://github.com/singhbhavdeep2434" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/codebhavdeep/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:singh.bhavdeep2434@gmail.com" className="hover:text-blue-400 transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </header>
  );
}