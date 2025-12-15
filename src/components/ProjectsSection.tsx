import type React from "react";
import { PROJECTS_DATA } from "../data/portfolio";
import { useTheme } from "../ThemeContext";

const ProjectsSection: React.FC = () => {
    const { t } = useTheme();

    return (
        <section id="projects" className="container mx-auto px-6 py-16 bg-gray-50 dark:bg-gray-900">
            <h3 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-12 text-center border-b-4 border-cyan-100 dark:border-cyan-600 pb-4" data-aos="fade-up">
                {t({ fr: "Projets", en: "Projects" })}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS_DATA.map(project => {
                    const isClickable = project.githubUrl && project.githubUrl.startsWith('http');

                    const CardComponent = isClickable ? 'a' : 'div';
                    
                    return (
                        <CardComponent 
                           key={t(project.name)} 
                           {...(isClickable ? { 
                               href: project.githubUrl, 
                               target: "_blank", 
                               rel: "noopener noreferrer" 
                           } : {})}
                           className={`block bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl border-t-4 border-cyan-600 
                                      transform transition duration-300 ease-in-out hover:shadow-2xl 
                                      ${isClickable ? 'cursor-pointer hover:scale-[1.03]' : 'cursor-default'}`}
                            data-aos="zoom-in" data-aos-delay="100"
                        >
                            <h4 className="text-2xl font-bold text-cyan-700 dark:text-cyan-500 mb-2">{t(project.name)}</h4>
                            <p className="text-sm text-gray-500 mb-4 font-mono dark:text-gray-400">{project.techStack}</p>
                            
                            <p className="text-gray-700 dark:text-gray-300 mb-4">{t(project.description)}</p>
                            
                            <div className="flex justify-between items-center text-cyan-600 dark:text-cyan-400 font-semibold mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
                            </div>
                        </CardComponent>
                    );
                })}
            </div>
        </section>
    );
};
export default ProjectsSection;