import HeroSection from './components/HeroSection';
import SkillsBadges from './components/SkillsBadges';
import { EXPERIENCE_DATA, PROJECTS_DATA } from './data/portfolio';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      
      {/* Utilisation du nouveau composant Skills */}
      <SkillsBadges />

      {/* ======================= EXPERIENCE SECTION (Style à améliorer) ======================= */}
      <section id="experience" className="container mx-auto px-4 py-16">
        <h3 className="text-4xl font-bold text-gray-800 mb-10 text-center border-b pb-4">
          Expériences Professionnelles
        </h3>
        {EXPERIENCE_DATA.map(exp => (
          <div key={exp.id} className="mb-12 p-6 bg-white rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-2xl transition duration-300">
            {/* L'icône de l'entreprise ou une simple pastille */}
            <h4 className="text-2xl font-bold text-gray-900">{exp.role} - {exp.company}</h4>
            <p className="text-sm text-gray-500 mt-1 mb-4">{exp.duration}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {exp.stack.map(tech => (
                <span key={tech} className="text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full">{tech}</span>
              ))}
            </div>

            <ul className="list-none mt-4 text-gray-700 space-y-3">
              {exp.achievements.map((ach, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-500 mr-3">✔</span> {/* Puce visuelle */}
                  <span dangerouslySetInnerHTML={{ __html: ach }} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      
      {/* ... Appliquez des styles similaires à la section PROJETS pour la rendre plus engageante (cartes, liens clairs, etc.) */}
    </div>
  );
};

export default App;