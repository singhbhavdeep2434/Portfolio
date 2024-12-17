import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">Bhavdeep Singh</h1>
        <h2 className="text-2xl text-blue-400 mb-8">Full Stack Developer</h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Passionate developer with expertise in Java, JavaScript, Python, and Machine Learning.
          Specialized in building scalable applications and microservices architecture.
        </p>
        <div className="flex gap-4 justify-center">
          <a 
            href="#experience" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            View My Work
          </a>
          <a 
            href="mailto:singh.bhavdeep2434@gmail.com" 
            className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}