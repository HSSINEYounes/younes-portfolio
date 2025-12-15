import type React from "react";
import { EDUCATION_DATA } from "../data/portfolio";
import { useTheme } from "../ThemeContext";

const EducationSection: React.FC = () => {
    const { t } = useTheme();

    return (
        <section id="education" className="container mx-auto px-6 py-16 bg-white dark:bg-gray-800">
            <h3 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-12 text-center border-b-4 border-cyan-100 dark:border-cyan-600 pb-4" data-aos="fade-up">
                {t({ fr: "Formation et Diplômes", en: "Education and Degrees" })}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {EDUCATION_DATA.map(edu => (
                    <div key={edu.id} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-lg border-l-4 border-yale hover:shadow-2xl transition duration-300" data-aos="fade-right" data-aos-delay="100">
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">{t(edu.degree)}</h4>
                            <span className="text-sm text-gray-600 dark:text-gray-400 font-semibold">{edu.duration}</span>
                        </div>
                        <p className="text-lg font-medium text-yale dark:text-cyan-500 mb-2">{t(edu.institution)}</p>
                        <p className="text-gray-700 dark:text-gray-300">{t(edu.field)}</p>
                        {edu.mention && (
                            <p className="mt-2 text-sm font-bold text-green-600 dark:text-green-400">
                                {t({ fr: "Mention", en: "Distinction" })} : {t(edu.mention)}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};
export default EducationSection;