import { GREETING, EXPERIENCE_DATA, PROJECTS_DATA, SKILLS_DATA, EDUCATION_DATA, SOFT_SKILLS, LANGUAGES, HOBBIES_DATA, CERTIFICATIONS_DATA } from './data/portfolio';
import React from 'react';

const NavBar: React.FC = () => (
  <nav className="sticky top-0 z-50 bg-white shadow-lg border-b-2 border-gray-100">
    <div className="container mx-auto flex justify-between items-center py-4 px-6">
      <div className="text-2xl font-extrabold text-gray-900 tracking-tight">Younes Hssine</div>
      <div className="space-x-8 text-gray-700 font-medium hidden md:flex">
        <a href="#experience" className="hover:text-cyan-600 transition duration-150">Expérience</a>
        <a href="#projects" className="hover:text-cyan-600 transition duration-150">Projets</a>
        <a href="#skills" className="hover:text-cyan-600 transition duration-150">Stack Technique</a>
        <a href="#education" className="hover:text-cyan-600 transition duration-150">Formation</a>
        <a href="#certifications" className="hover:text-cyan-600 transition duration-150">Certifications</a>
        <a href="#hobbies" className="hover:text-cyan-600 transition duration-150">Loisirs</a>
      </div>
      <a href="#contact" className="text-white bg-cyan-600 px-6 py-2 rounded-lg font-bold shadow-md hover:bg-cyan-700 transition duration-200">
        Contact
      </a>
    </div>
  </nav>
);

const HeroSection: React.FC = () => (
    <header className="py-24 md:py-5 text-center bg-gray-950 text-white shadow-2xl">
      <div className="mb-8 flex justify-center">
            <img 
                src="./younes-photo.jpeg"
                alt="Portrait de Younes Hssine, Ingénieur Full Stack" 
                className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-cyan-500 object-cover shadow-2xl"
            />
        </div>
      <div className="container mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-4 
                       text-transparent bg-clip-text bg-gradient-to-r from-yale to-cyan-400">
          {GREETING.title}
        </h1>
        <h2 className="text-2xl md:text-4xl font-medium text-blue-300 mb-8">
          {GREETING.tagline}
        </h2>
        <p className="max-w-5xl mx-auto text-xl text-gray-400 border-t border-gray-100 pt-6">
          {GREETING.summary}
        </p>
        <a 
          href="./Younes_Hssine_CV.pdf" 
          download
          className="bg-transparent w-full md:w-auto text-white border-2 border-cyan-500 font-extrabold py-3 px-8 rounded-lg shadow-md hover:bg-cyan-500 hover:text-gray-900 transition duration-300 block md:inline-block mt-5"
        >
          Télécharger CV (PDF)
        </a>
        <div className="mt-6 space-x-4">
          <a href="#projects" className="bg-transparent w-full md:w-auto text-white border-2 border-cyan-500 font-extrabold py-3 px-8 rounded-lg shadow-md hover:bg-cyan-500 hover:text-gray-900 transition duration-300 block md:inline-block mt-2">
            Voir mes Projets &rarr;
          </a>
        </div>
      </div>
    </header>
);

const SkillsSection: React.FC = () => (
    <section id="skills" className="container mx-auto px-6 py-16 bg-gray-50">
        <h3 className="text-4xl font-extrabold text-gray-900 mb-12 text-center border-b-4 border-yale pb-4">
            Stack Technique
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(SKILLS_DATA).map(([category, skills]) => (
            <div key={category} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
              <h4 className="text-xl font-bold capitalize text-yale mb-4 border-b-2 pb-2">
                {category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span key={skill.name} className={`text-sm font-semibold px-4 py-1.5 rounded-full border 
                                                   ${skill.level === 'Expert' ? 'bg-cyan-100 text-cyan-900 border-cyan-200' : 'bg-gray-100 text-gray-700 border-gray-300'}`}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
    </section>
);

const ExperienceSection: React.FC = () => (
    <section id="experience" className="container mx-auto px-6 py-16 bg-white">
        <h3 className="text-4xl font-extrabold text-gray-900 mb-12 text-center border-b-4 border-yale pb-4">
            Expériences Professionnelles
        </h3>
        <div className="relative max-w-4xl mx-auto">
            
            {EXPERIENCE_DATA.map((exp) => (
                <div key={exp.id} className="relative pl-12 py-6">
                    <div className="absolute top-0 left-0 w-1 h-full bg-cyan-200 ml-4"></div>
                    <div className="absolute top-8 left-0 h-4 w-4 bg-cyan-600 rounded-full border-4 border-white z-10"></div>
                    
                    <div className="bg-gray-50 p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 ml-4">
                        <div className="flex justify-between items-center mb-2">
                            <h4 className="text-2xl font-bold text-gray-900">{exp.role}</h4>
                            <span className="text-sm text-cyan-600 font-semibold">{exp.duration}</span>
                        </div>
                        <p className="text-lg font-medium text-gray-600 mb-4">{exp.company}</p>
                        <div className="flex flex-wrap gap-2 mb-4 border-t pt-4">
                            {exp.stack.map(tech => (
                                <span key={tech} className="text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full">{tech}</span>
                            ))}
                        </div>
                        <ul className="list-none mt-4 text-gray-700 space-y-2">
                            {exp.achievements.map((ach, i) => (
                                <li key={i} className="flex items-start">
                                    <span className="text-cyan-500 mr-3 mt-1 flex-shrink-0">
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
);
const ProjectsSection: React.FC = () => (
    <section id="projects" className="container mx-auto px-6 py-16 bg-gray-50">
        <h3 className="text-4xl font-extrabold text-gray-900 mb-12 text-center border-b-4 border-yale pb-4">
            Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS_DATA.map(project => {
                const isClickable = project.githubUrl && project.githubUrl.startsWith('http');
                const CardComponent = isClickable ? 'a' : 'div';
                
                return (
                    <CardComponent 
                       key={project.name} 
                       {...(isClickable ? { 
                           href: project.githubUrl, 
                           target: "_blank", 
                           rel: "noopener noreferrer" 
                       } : {})}
                       className={`block bg-white p-6 rounded-xl shadow-xl border-t-4 border-cyan-600 
                                  transform transition duration-300 ease-in-out hover:shadow-2xl 
                                  ${isClickable ? 'cursor-pointer hover:scale-[1.03]' : 'cursor-default'}`}
                    >
                        <h4 className="text-2xl font-bold text-cyan-700 mb-2">{project.name}</h4>
                        <p className="text-sm text-gray-500 mb-4 font-mono">{project.techStack}</p>
                        
                        <p className="text-gray-700 mb-4">{project.description}</p>
                        
                        <div className="flex justify-between items-center text-cyan-600 font-semibold mt-4 border-t pt-4">
                            {isClickable ? (
                                <span>Voir le code sur GitHub &rarr;</span>
                            ) : (
                                <span className="text-gray-500 font-medium"></span>
                            )}
                        </div>
                    </CardComponent>
                );
            })}
        </div>
    </section>
);

const FooterSection: React.FC = () => (
    <footer id="contact" className="py-10 bg-gray-950 text-white text-center">
        <div className="container mx-auto">
          <h4 className="text-2xl font-bold mb-4 text-cyan-400">Contactez Younes Hssine</h4>
          <p className="text-lg mb-2">
            youneshssine@email.com | 
            <a href="https://www.linkedin.com/in/younes-hssine-69440b1a4/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 hover:underline ml-2">LinkedIn</a>
          </p>
          <p className="mt-6 text-gray-500 text-sm">
            Développé avec React, TypeScript, et stylisé avec Tailwind CSS.
          </p>
        </div>
    </footer>
);
const EducationSection: React.FC = () => (
    <section id="education" className="container mx-auto px-6 py-16 bg-white">
        <h3 className="text-4xl font-extrabold text-gray-900 mb-12 text-center border-b-4 border-yale pb-4">
            Formation et Diplômes
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {EDUCATION_DATA.map(edu => (
                <div key={edu.id} className="bg-gray-50 p-6 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-2xl transition duration-300">
                    <div className="flex justify-between items-start mb-2">
                        <h4 className="text-xl font-bold text-gray-900">{edu.degree}</h4>
                        <span className="text-sm text-gray-600 font-semibold">{edu.duration}</span>
                    </div>
                    <p className="text-lg font-medium text-blue-700 mb-2">{edu.institution}</p>
                    <p className="text-gray-700">{edu.field}</p>
                    {edu.mention && (
                        <p className="mt-2 text-sm font-bold text-green-600">
                            Mention : {edu.mention}
                        </p>
                    )}
                </div>
            ))}
        </div>
    </section>
);

const MiscSection: React.FC = () => (
    <section id="misc" className="container mx-auto px-6 py-16 bg-gray-50">
        <h3 className="text-4xl font-extrabold text-gray-900 mb-12 text-center border-b-4 border-yale pb-4">
            Compétences Transversales
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
                <h4 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Soft Skills</h4>
                <div className="flex flex-wrap gap-3">
                    {SOFT_SKILLS.map((skill, index) => (
                        <span key={index} className="bg-cyan-100 text-cyan-800 text-sm font-semibold px-4 py-1.5 rounded-full shadow-md">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
            <div>
                <h4 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">Langues</h4>
                <ul className="space-y-3">
                    {LANGUAGES.map((lang, index) => (
                        <li key={index} className="flex justify-between items-center text-gray-700 bg-white p-3 rounded-lg shadow-sm">
                            <span className="font-medium text-lg">{lang.name}</span>
                            <span className="text-sm font-semibold text-cyan-600 border border-cyan-200 px-3 py-1 rounded-full">{lang.level}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
);
const HobbiesSection: React.FC = () => (
    <section id="hobbies" className="container mx-auto px-6 py-16 bg-white">
        <h3 className="text-4xl font-extrabold text-gray-900 mb-12 text-center border-b-4 border-yale pb-4">
            Centres d'Intérêt (Loisirs)
        </h3>
        
        {/* Grille des loisirs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {HOBBIES_DATA.map((hobby, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md border-t-2 border-blue-500 hover:shadow-xl transition duration-300 transform hover:-translate-y-0.5">
                    <span className="text-4xl block mb-3">{hobby.icon}</span>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{hobby.name}</h4>
                    <p className="text-sm text-gray-700">{hobby.description}</p>
                </div>
            ))}
        </div>
    </section>
);
const CertificationsSection: React.FC = () => (
    <section id="certifications" className="container mx-auto px-6 py-16 bg-gray-50">
        <h3 className="text-4xl font-extrabold text-gray-900 mb-12 text-center border-b-4 border-yale pb-4">
            Certifications Professionnelles
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {CERTIFICATIONS_DATA.map(cert => (
                <a 
                    key={cert.id} 
                    href={cert.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500 hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
                >
                    <p className="text-xs font-semibold text-gray-500 mb-1">{cert.date}</p>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{cert.name}</h4>
                    <p className="text-lg font-medium text-yale">{cert.issuer}</p>
                    <span className="mt-3 text-sm font-semibold text-cyan-500 flex items-center">
                        Voir le Certificat &rarr;
                    </span>
                </a>
            ))}
        </div>
    </section>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 antialiased">
      
      <NavBar />
      <HeroSection />
      
      <main>
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <EducationSection />
          <CertificationsSection />
          <MiscSection />
          <HobbiesSection />
      </main>

      <FooterSection />
    </div>
  );
};

export default App;