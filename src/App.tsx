import { GREETING, EXPERIENCE_DATA, PROJECTS_DATA, SKILLS_DATA } from './data/portfolio';

// Ce composant simple illustre comment utiliser vos données typées
const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* ======================= HERO SECTION ======================= */}
      <header className="text-center py-12">
        <h1 className="text-5xl font-extrabold text-blue-800">{GREETING.title}</h1>
        <h2 className="text-2xl mt-2 text-gray-700">{GREETING.tagline}</h2>
        <p className="max-w-3xl mx-auto mt-4 text-gray-600">{GREETING.summary}</p>
      </header>

      {/* ======================= SKILLS SECTION ======================= */}
      <section className="mt-10 border-t pt-8">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">Technologies Clés (Full Stack)</h3>
        {Object.entries(SKILLS_DATA).map(([category, skills]) => (
          <div key={category} className="mb-4">
            <h4 className="font-bold capitalize text-lg text-blue-600">{category.replace('_', ' ')}</h4>
            <div className="flex flex-wrap gap-2 mt-1">
              {skills.map(skill => (
                <span key={skill.name} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">{skill.name}</span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ======================= EXPERIENCE SECTION ======================= */}
      <section className="mt-10 border-t pt-8">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">Expériences Professionnelles</h3>
        {EXPERIENCE_DATA.map(exp => (
          <div key={exp.id} className="mb-8 border-l-4 border-blue-500 pl-4">
            <h4 className="text-xl font-bold">{exp.role} - {exp.company}</h4>
            <p className="text-sm text-gray-500">{exp.duration}</p>
            <p className="text-sm font-medium text-gray-700 mt-2">Stack: {exp.stack.join(' | ')}</p>
            <ul className="list-disc list-inside mt-2 text-gray-600">
              {exp.achievements.map((ach, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: ach }} /> // Utilisation du HTML pour mettre en gras les chiffres
              ))}
            </ul>
          </div>
        ))}
      </section>
      
      {/* ======================= PROJECTS SECTION ======================= */}
      <section className="mt-10 border-t pt-8">
        <h3 className="text-3xl font-semibold text-gray-800 mb-6">Projets Académiques</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS_DATA.map(project => (
            <div key={project.name} className="border p-4 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow">
              <h4 className="text-xl font-bold text-blue-700">{project.name}</h4>
              <p className="text-sm text-gray-500 mb-2">Stack: {project.techStack}</p>
              <p className="text-gray-600">{project.description}</p>
              <a href={project.githubUrl} className="text-sm text-blue-500 hover:underline mt-2 inline-block">GitHub</a>
            </div>
          ))}
        </div>
      </section>
      {/* ... Ajoutez vos autres sections (Education, Certifications) ici */}
    </div>
  );
};

export default App;