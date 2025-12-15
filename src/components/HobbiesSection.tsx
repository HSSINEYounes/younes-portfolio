import type React from "react";
import { HOBBIES_DATA } from "../data/portfolio";
import { useTheme } from "../ThemeContext";

const HobbiesSection: React.FC = () => {
    const { t } = useTheme();

    return (
        <section id="hobbies" className="container mx-auto px-6 py-16 bg-gray-50 dark:bg-gray-900">
            <h3 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-12 text-center border-b-4 border-cyan-100 dark:border-cyan-600 pb-4" data-aos="fade-up">
                {t({ fr: "Centres d'Intérêt (Loisirs)", en: "Interests (Hobbies)" })}
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {HOBBIES_DATA.map((hobby, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border-t-2 border-cyan-500 hover:shadow-xl transition duration-300 transform hover:-translate-y-0.5" data-aos="fade-up" data-aos-delay={index * 100}>
                        <span className="text-4xl block mb-3">{hobby.icon}</span>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{t(hobby.name)}</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{t(hobby.description)}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default HobbiesSection;