import React from 'react';
import { GREETING } from '../data/portfolio';

const HeroSection: React.FC = () => {
  return (
    <header className="py-20 text-center bg-gray-900 text-white shadow-xl">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-extrabold tracking-tight mb-2">
          {GREETING.title}
        </h1>
        <h2 className="text-3xl font-light text-blue-400 mb-6">
          {GREETING.tagline}
        </h2>
        <p className="max-w-4xl mx-auto text-xl text-gray-300 border-t border-gray-700 pt-6">
          {GREETING.summary}
        </p>
        <div className="mt-8">
          <a href="#contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
            Me Contacter (LinkedIn/Email)
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;