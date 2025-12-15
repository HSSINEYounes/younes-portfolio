import type React from "react";
import { useTheme } from "../ThemeContext";

const FooterSection: React.FC = () => {
    const { t } = useTheme();

    return (
        <footer id="contact" className="py-10 bg-gray-950 text-white text-center">
            <div className="container mx-auto">
            <h4 className="text-2xl font-bold mb-4 text-cyan-400">{t({ fr: "Contactez Younes Hssine", en: "Contact Younes Hssine" })}</h4>
            <p className="text-lg mb-2">
                youneshssine@email.com | 
                <a href="https://www.linkedin.com/in/younes-hssine-69440b1a4/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 hover:underline ml-2">LinkedIn</a>
            </p>
            <p className="mt-6 text-gray-500 text-sm">
                {t({ fr: "Développé avec React, TypeScript, et stylisé avec Tailwind CSS.", en: "Developed with React, TypeScript, and styled with Tailwind CSS." })}
            </p>
            </div>
        </footer>
    );
};
export default FooterSection;