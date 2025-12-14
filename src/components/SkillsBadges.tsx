// Utilisez ce composant à la place de la section 'Skills' dans App.tsx
import React from 'react';
import { SKILLS_DATA } from '../data/portfolio';

const SkillsBadges: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h3 className="text-4xl font-bold text-gray-800 mb-10 text-center border-b pb-4">
        Stack Technique
      </h3>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(SKILLS_DATA).map(([category, skills]) => (
          <div key={category} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h4 className="text-xl font-semibold capitalize text-yale-600 mb-4 border-b pb-2">
              {category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <span key={skill.name} className="bg-yale-100 text-yale-700 text-sm font-medium px-4 py-1.5 rounded-full border border-yale-200">
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsBadges;