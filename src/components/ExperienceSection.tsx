import type React from "react";
import { EXPERIENCE_DATA } from "../data/portfolio";
import { useTheme } from "../ThemeContext";

const ExperienceSection: React.FC = () => {
    const { t } = useTheme();

    return (
        <section id="experience" className="container mx-auto px-6 py-16 bg-white dark:bg-gray-800 overflow-x-hidden">
            <h3 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-12 text-center border-b-4 border-cyan-100 dark:border-cyan-600 pb-4" data-aos="fade-up">
                {t({ fr: "Expériences Professionnelles", en: "Professional Experience" })}
            </h3>
            
            <div className="relative max-w-4xl mx-auto">
                
                {EXPERIENCE_DATA.map((exp) => (
                    <div key={exp.id} className="relative pl-12 py-6" data-aos="fade-up" data-aos-delay="150">
                        <div className="absolute top-0 left-0 w-1 h-full bg-cyan-200 dark:bg-cyan-700 ml-4"></div>
                        <div className="absolute top-8 left-0 h-4 w-4 bg-cyan-600 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>
                        
                        <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 ml-4">
                            <div className="flex justify-between items-center mb-2">
                                <h4 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{t(exp.role)}</h4>
                                <span className="text-sm text-cyan-600 dark:text-cyan-400 font-semibold">{exp.duration}</span>
                            </div>
                            <p className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-4">{t(exp.company)}</p>

                            <div className="flex flex-wrap gap-2 mb-4 border-t border-gray-200 dark:border-gray-700 pt-4">
                                {exp.stack.map(tech => (
                                    <span key={tech} className="text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full dark:bg-green-900 dark:text-green-300">{tech}</span>
                                ))}
                            </div>
                            
                            <ul className="list-none mt-4 text-gray-700 dark:text-gray-300 space-y-2">
                                {exp.achievements.map((ach, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-cyan-500 mr-3 mt-1 flex-shrink-0">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        </span>
                                        {t(ach)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default ExperienceSection;