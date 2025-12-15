import type React from "react";
import { GREETING } from "../data/portfolio";
import { useTheme } from "../ThemeContext";
const BASE_URL = import.meta.env.BASE_URL;
const HeroSection: React.FC = () => {
    const { t } = useTheme();

    return (
        <header id="top" className="py-24 md:py-5 text-center bg-gray-950 text-white shadow-2xl">
        <div className="mb-8 flex justify-center" data-aos="fade-down">
            <img 
                src={`${BASE_URL}younes-photo.jpeg`}
                alt="Portrait de Younes Hssine, Ingénieur Full Stack" 
                className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-cyan-500 object-cover shadow-2xl"
            />
        </div>
        <div className="container mx-auto px-4">
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-4 
                        text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-yale" data-aos="fade-up" data-aos-delay="100">
            {t(GREETING.title)}
            </h1>
            <h2 className="text-2xl md:text-4xl font-medium text-gray-300 mb-8" data-aos="fade-up" data-aos-delay="200">
            {t(GREETING.tagline)}
            </h2>
            <p className="max-w-5xl mx-auto text-xl text-gray-400 border-t border-gray-800 pt-6" data-aos="fade-up" data-aos-delay="300">
            {t(GREETING.summary)}
            </p>
            <a 
            href={`${BASE_URL}Younes_Hssine_CV.pdf`} 
            download
            className="bg-transparent w-full md:w-auto text-white border-2 border-cyan-500 font-extrabold py-3 px-8 rounded-lg shadow-md hover:bg-cyan-500 hover:text-gray-900 transition duration-300 block md:inline-block mt-5"
            data-aos="zoom-in" data-aos-delay="400"
            >
            {t({ fr: "Télécharger CV (PDF)", en: "Download CV (PDF)" })}
            </a>
            <div className="mt-6 space-x-4">
            <a href="#projects" className="bg-cyan-500 hover:bg-cyan-600 text-gray-900 font-extrabold py-3 px-8 rounded-lg shadow-xl transition duration-300" data-aos="zoom-in" data-aos-delay="500">
                {t({ fr: "Voir mes Projets", en: "View My Projects" })} &rarr;
            </a>
            </div>
        </div>
        </header>
    );
};
export default HeroSection;