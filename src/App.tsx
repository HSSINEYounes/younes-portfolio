import { GREETING, EXPERIENCE_DATA, PROJECTS_DATA, SKILLS_DATA } from './data/portfolio';
import React from 'react';

// =======================================================
// 1. NAV BAR COMPONENT (fixed navigation)
// =======================================================
const NavBar: React.FC = () => (
  <nav className="sticky top-0 z-50 bg-white shadow-lg border-b-2 border-gray-100">
    <div className="container mx-auto flex justify-between items-center py-4 px-6">
      <div className="text-2xl font-extrabold text-gray-900 tracking-tight">Younes Hssine</div>
      <div className="space-x-8 text-gray-700 font-medium hidden md:flex">
        <a href="#experience" className="hover:text-cyan-600 transition duration-150">Expérience</a>
        <a href="#projects" className="hover:text-cyan-600 transition duration-150">Projets</a>
        <a href="#skills" className="hover:text-cyan-600 transition duration-150">Compétences</a>
      </div>
      <a href="#contact" className="text-white bg-cyan-600 px-6 py-2 rounded-lg font-bold shadow-md hover:bg-cyan-700 transition duration-200">
        Contact
      </a>
    </div>
  </nav>
);

// =======================================================
// 2. HERO SECTION (High-Impact Introduction)
// =======================================================
const HeroSection: React.FC = () => (
    <header className="py-24 md:py-36 text-center bg-gray-950 text-white shadow-2xl">
      <div className="container mx-auto px-4">
        {/* Titre avec effet de gradient pour plus de dynamisme */}
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-4 
                       text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
          {GREETING.title}
        </h1>
        <h2 className="text-2xl md:text-4xl font-medium text-gray-300 mb-8">
          {GREETING.tagline}
        </h2>
        {/* Résumé mis en évidence */}
        <p className="max-w-5xl mx-auto text-xl text-gray-400 border-t border-gray-800 pt-6">
          {GREETING.summary}
        </p>
        <div className="mt-12 space-x-4">
          <a href="#projects" className="bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-extrabold py-3 px-8 rounded-lg shadow-xl transition duration-300">
            Voir mes Projets &rarr;
          </a>
        </div>
      </div>
    </header>
);

// =======================================================
// 3. SKILLS SECTION (Badges et Organisation)
// =======================================================
const SkillsSection: React.FC = () => (
    <section id="skills" className="container mx-auto px-6 py-16 bg-gray-50">
        <h3 className="text-4xl font-extrabold text-gray-900 mb-12 text-center border-b-4 border-cyan-100 pb-4">
            Stack Technique
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(SKILLS_DATA).map(([category, skills]) => (
            <div key={category} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <h4 className="text-xl font-bold capitalize text-blue-700 mb-4 border-b-2 pb-2">
                {category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span key={skill.name} className={`text-sm font-semibold px-4 py-1.5 rounded-full border 
                                                   ${skill.level === 'Expert' ? 'bg-cyan-100 text-cyan-800 border-cyan-300' : 'bg-gray-100 text-gray-700 border-gray-300'}`}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
    </section>
);

// =======================================================
// 4. EXPERIENCE SECTION (Vertical Timeline)
// =======================================================
const ExperienceSection: React.FC = () => (
    <section id="experience" className="container mx-auto px-6 py-16 bg-white">
        <h3 className="text-4xl font-extrabold text-gray-900 mb-12 text-center border-b-4 border-cyan-100 pb-4">
            Expériences Professionnelles
        </h3>
        
        <div className="relative max-w-4xl mx-auto">
            {/* Conteneur de la timeline */}
            
            {EXPERIENCE_DATA.map((exp, index) => (
                <div key={exp.id} className="relative pl-12 py-6">
                    {/* Ligne verticale */}
                    <div className="absolute top-0 left-0 w-1 h-full bg-cyan-200 ml-4"></div>
                    
                    {/* Point sur la timeline */}
                    <div className="absolute top-8 left-0 h-4 w-4 bg-cyan-600 rounded-full border-4 border-white"></div>
                    
                    {/* Contenu de la carte d'expérience */}
                    <div className="bg-gray-50 p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 ml-4">
                        <div className="flex justify-between items-center mb-2">
                            <h4 className="text-2xl font-bold text-gray-900">{exp.role}</h4>
                            <span className="text-sm text-cyan-600 font-semibold">{exp.duration}</span>
                        </div>
                        <p className="text-lg font-medium text-gray-600 mb-4">{exp.company}</p>

                        {/* Stack Technique */}
                        <div className="flex flex-wrap gap-2 mb-4 border-t pt-4">
                            {exp.stack.map(tech => (
                                <span key={tech} className="text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full">{tech}</span>
                            ))}
                        </div>
                        
                        {/* Réalisations (mise en avant des chiffres) */}
                        <ul className="list-none mt-4 text-gray-700 space-y-2">
                            {exp.achievements.map((ach, i) => (
                                <li key={i} className="flex items-start">
                                    <span className="text-cyan-500 mr-3 mt-1">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    </span>
                                    {/* Utilisation de dangerouslySetInnerHTML pour le Markdown (ex: **50 000**) */}
                                    <span dangerouslySetInnerHTML={{ __html: ach }} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    </section>
);


// =======================================================
// 5. PROJECTS SECTION (Dynamic Cards)
// =======================================================
const ProjectsSection: React.FC = () => (
    <section id="projects" className="container mx-auto px-6 py-16 bg-gray-50">
        <h3 className="text-4xl font-extrabold text-gray-900 mb-12 text-center border-b-4 border-cyan-100 pb-4">
            Projets Clés (Proof of Work)
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS_DATA.map(project => (
                <a key={project.name} href={project.githubUrl} target="_blank" rel="noopener noreferrer" 
                   className="block bg-white p-6 rounded-xl shadow-xl border-t-4 border-cyan-600 
                              transform hover:scale-[1.03] transition duration-300 ease-in-out cursor-pointer hover:shadow-2xl">
                    
                    <h4 className="text-2xl font-bold text-cyan-700 mb-2">{project.name}</h4>
                    <p className="text-sm text-gray-500 mb-4 font-mono">{project.techStack}</p>
                    
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    
                    <div className="flex justify-between items-center text-cyan-600 font-semibold mt-4 border-t pt-4">
                        <span>Voir le code sur GitHub &rarr;</span>
                    </div>
                </a>
            ))}
        </div>
    </section>
);

// =======================================================
// 6. FOOTER / CONTACT
// =======================================================
const FooterSection: React.FC = () => (
    <footer id="contact" className="py-10 bg-gray-950 text-white text-center">
        <div className="container mx-auto">
          <h4 className="text-2xl font-bold mb-4 text-cyan-400">Contactez Younes Hssine</h4>
          <p className="text-lg mb-2">
            younes.hssine@email.com | 
            <a href="https://linkedin.com/in/youneshssine" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 hover:underline ml-2">LinkedIn</a>
          </p>
          <p className="mt-6 text-gray-500 text-sm">
            Développé avec React, TypeScript, et stylisé avec Tailwind CSS.
          </p>
        </div>
    </footer>
);

// =======================================================
// MAIN APPLICATION COMPONENT
// =======================================================
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 antialiased">
      
      <NavBar />
      <HeroSection />
      
      <main>
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
      </main>

      <FooterSection />
    </div>
  );
};

export default App;