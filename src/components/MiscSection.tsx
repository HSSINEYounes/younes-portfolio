import type React from "react";
import { SOFT_SKILLS, LANGUAGES } from "../data/portfolio";
import { useTheme } from "../ThemeContext";

const MiscSection: React.FC = () => {
    const { t } = useTheme();

    return (
        <section id="misc" className="container mx-auto px-6 py-16 bg-white dark:bg-gray-800 overflow-x-hidden">
            <h3 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-12 text-center border-b-4 border-cyan-100 dark:border-cyan-600 pb-4" data-aos="fade-up">
                {t({ fr: "Compétences Transversales & Langues", en: "Soft Skills & Languages" })}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-12 max-w-5xl mx-auto overflow-x-hidden">
                <div data-aos="fade-right" data-aos-delay="100" className="min-w-0 overflow-hidden">
                    <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 border-b pb-2">{t({ fr: "Soft Skills", en: "Soft Skills" })}</h4>
                    <div className="flex flex-wrap gap-3">
                        {SOFT_SKILLS.map((skill, index) => (
                            <span 
                                key={index} 
                                className="bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-300 text-sm font-semibold px-4 py-1.5 rounded-full shadow-md max-w-full min-w-0 whitespace-normal"
                            >
                                {t(skill)}
                            </span>
                        ))}
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-delay="100">
                    <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 border-b pb-2">{t({ fr: "Langues", en: "Languages" })}</h4>
                    <ul className="space-y-3">
                        {LANGUAGES.map((lang, index) => (
                            <li key={index} className="flex justify-between items-center text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                                <span className="font-medium text-lg">{t(lang.name)}</span>
                                <span className="text-sm font-semibold text-cyan-600 border border-cyan-200 dark:border-cyan-700 dark:text-cyan-400 px-3 py-1 rounded-full">{t(lang.level)}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
export default MiscSection;