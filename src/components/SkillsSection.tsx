import type React from "react";
import { SKILLS_DATA } from "../data/portfolio";
import { useTheme } from "../ThemeContext";

const SkillsSection: React.FC = () => {
    const { t } = useTheme();

    return (
        <section id="skills" className="container mx-auto px-6 py-16 bg-gray-50 dark:bg-gray-900">
            <h3 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-12 text-center border-b-4 border-cyan-100 dark:border-cyan-600 pb-4" data-aos="fade-up">
                {t({ fr: "Stack Technique", en: "Tech Stack" })}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(SKILLS_DATA).map(([category, skills]) => (
                <div key={category} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1" data-aos="zoom-in" data-aos-delay="100">
                <h4 className="text-xl font-bold capitalize text-yale dark:text-cyan-500 mb-4 border-b-2 pb-2">
                    {category === 'frontend' ? t({ fr: 'Frontend', en: 'Frontend' }) :
                     category === 'backend' ? t({ fr: 'Backend', en: 'Backend' }) :
                     category === 'devops' ? t({ fr: 'DevOps & Cloud', en: 'DevOps & Cloud' }) :
                     t({ fr: 'Bases de Données', en: 'Databases' })}
                </h4>
                <div className="flex flex-wrap gap-2">
                    {skills.map(skill => (
                    <span key={skill.name} className={`text-sm font-semibold px-4 py-1.5 rounded-full border 
                                                       ${t(skill.level) === t({ fr: 'Expert', en: 'Expert' }) ? 'bg-cyan-100 text-cyan-800 border-cyan-300 dark:bg-cyan-800/50 dark:text-cyan-300 dark:border-cyan-500' : 'bg-gray-100 text-gray-700 border-gray-300 dark:bg-gray-700/50 dark:text-gray-300 dark:border-gray-500'}`}>
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
export default SkillsSection;