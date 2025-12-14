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
          <div key={category} className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <span key={skill.name} className="bg-yale text-yale text-sm font-medium px-4 py-1.5 rounded-full border border-yale">
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