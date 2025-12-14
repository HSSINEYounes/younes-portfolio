import { GREETING, EXPERIENCE_DATA, PROJECTS_DATA, SKILLS_DATA } from './data/portfolio';
import React from 'react';

// =======================================================
// 1. NAV BAR COMPONENT (fixed navigation)
// =======================================================
const NavBar: React.FC = () => (
  <nav className="sticky top-0 z-50 bg-white shadow-md">
    <div className="container mx-auto flex justify-between items-center py-4 px-4">
      <div className="text-2xl font-bold text-blue-800">Younes Hssine</div>
      <div className="space-x-6 text-gray-700 font-medium">
        <a href="#experience" className="hover:text-blue-600 transition duration-150">Expérience</a>
        <a href="#projects" className="hover:text-blue-600 transition duration-150">Projets</a>
        <a href="#skills" className="hover:text-blue-600 transition duration-150">Compétences</a>
        <a href="#contact" className="text-white bg-blue-600 px-4 py-2 rounded hover:bg-blue-700">Contact</a>
      </div>
    </div>
  </nav>
);

// =======================================================
// 2. HERO SECTION
// (Rend l'impact de votre titre et résumé très fort)
// =======================================================
const HeroSection: React.FC = () => (
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

// =======================================================
// MAIN APPLICATION COMPONENT
// =======================================================
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      
      <NavBar />
      <HeroSection />

      {/* ======================= SKILLS SECTION ======================= */}
      <section id="skills" className="container mx-auto px-4 py-16">
        <h3 className="text-4xl font-bold text-gray-800 mb-10 text-center border-b pb-4">
          Stack Technique
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(SKILLS_DATA).map(([category, skills]) => (
            <div key={category} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
              <h4 className="text-xl font-semibold capitalize text-blue-600 mb-4 border-b pb-2">
                {category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span key={skill.name} className="bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full border border-blue-200">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================= EXPERIENCE SECTION (TIMELINE) ======================= */}
      <section id="experience" className="container mx-auto px-4 py-16 bg-white">
        <h3 className="text-4xl font-bold text-gray-800 mb-10 text-center border-b pb-4">
          Expériences Professionnelles
        </h3>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Conteneur pour la timeline */}
          
          {EXPERIENCE_DATA.map((exp, index) => (
            <div key={exp.id} className="relative pl-12 py-6">
              {/* Ligne verticale */}
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-200 ml-4"></div>
              
              {/* Point sur la timeline */}
              <div className="absolute top-8 left-0 h-4 w-4 bg-blue-600 rounded-full border-4 border-white"></div>
              
              {/* Contenu de la carte d'expérience */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ml-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-2xl font-bold text-gray-900">{exp.role}</h4>
                  <span className="text-sm text-blue-600 font-semibold">{exp.duration}</span>
                </div>
                <p className="text-lg font-medium text-gray-600 mb-4">{exp.company}</p>

                {/* Stack Technique */}
                <div className="flex flex-wrap gap-2 mb-4 border-t pt-4">
                    {exp.stack.map(tech => (
                      <span key={tech} className="text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full">{tech}</span>
                    ))}
                </div>
                
                {/* Réalisations */}
                <ul className="list-none mt-4 text-gray-700 space-y-2">
                  {exp.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-3 mt-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      </span>
                      <span dangerouslySetInnerHTML={{ __html: ach }} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================= PROJECTS SECTION (CARDS) ======================= */}
      <section id="projects" className="container mx-auto px-4 py-16 bg-gray-100">
          <h3 className="text-4xl font-bold text-gray-800 mb-10 text-center border-b pb-4">
              Projets Clés (Proof of Work)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS_DATA.map(project => (
                  <a key={project.name} href={project.githubUrl} target="_blank" rel="noopener noreferrer" 
                     className="block bg-white p-6 rounded-xl shadow-xl border-t-4 border-blue-500 
                                transform hover:scale-[1.02] transition duration-300 ease-in-out cursor-pointer">
                      
                      <h4 className="text-2xl font-bold text-blue-700 mb-2">{project.name}</h4>
                      <p className="text-sm text-gray-500 mb-4 font-mono">{project.techStack}</p>
                      
                      <p className="text-gray-700 mb-4">{project.description}</p>
                      
                      <div className="flex justify-between items-center text-blue-500 font-semibold mt-4">
                          <span>Voir le code &rarr;</span>
                      </div>
                  </a>
              ))}
          </div>
      </section>

      {/* ======================= CONTACT / FOOTER ======================= */}
      <footer id="contact" className="py-10 bg-gray-900 text-white text-center">
        <div className="container mx-auto">
          <h4 className="text-2xl font-bold mb-4">Contactez Younes Hssine</h4>
          <p className="text-lg mb-2">
            younes.hssine@email.com | 
            <a href="https://linkedin.com/in/youneshssine" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-2">LinkedIn</a>
          </p>
          <p className="mt-6 text-gray-500 text-sm">
            Développé avec React, TypeScript et Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;