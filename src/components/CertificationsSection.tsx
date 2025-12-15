import React, { useState } from "react";
import { CERTIFICATIONS_DATA } from "../data/portfolio";
import { useTheme } from "../ThemeContext";

const BASE_URL = import.meta.env.BASE_URL;

export const getCertificateImageUrl = (id: number): string => {
    return `${BASE_URL}certificates/${id}.jpg`; 
};
const CertificationsSection: React.FC = () => {
    const { t } = useTheme();
    const [flippedId, setFlippedId] = useState<number | null>(null);
    const imageUrl = (id: number) => getCertificateImageUrl(id);

    return (
        <section id="certifications" className="container mx-auto px-6 py-16 bg-gray-50 dark:bg-gray-900 overflow-x-hidden">
            <h3 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-12 text-center border-b-4 border-cyan-100 dark:border-cyan-600 pb-4" data-aos="fade-up">
                {t({ fr: "Certifications Professionnelles", en: "Professional Certifications" })}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {CERTIFICATIONS_DATA.map(cert => {
                    const isFlipped = flippedId === cert.id;

                    return (
                        <div 
                            key={cert.id} 
                            className="perspective-1000 h-80" 
                            onMouseEnter={() => setFlippedId(cert.id)} 
                            onMouseLeave={() => setFlippedId(null)}   
                            data-aos="zoom-in" data-aos-delay="50"
                        >
                            <div 
                                className={`relative w-full h-full transform-style-preserve-3d transition-transform duration-700 
                                            ${isFlipped ? 'rotate-y-180' : ''}`}
                            >
                                <div 
                                    className="absolute inset-0 backface-hidden block bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl border-t-4 border-yale transition duration-300 hover:shadow-2xl cursor-pointer"
                                >
                                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">{cert.date}</p>
                                    <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{cert.name}</h4>
                                    <p className="text-lg font-medium text-yale dark:text-cyan-500">{cert.issuer}</p>
                                    <span className="mt-3 text-sm font-semibold text-gray-500 dark:text-gray-400 flex items-center">
                                        {t({ fr: "Survolez pour voir l'aperçu", en: "Hover to see preview" })} &rarr;
                                    </span>
                                </div>
                                <div 
                                    className="absolute inset-0 backface-hidden block bg-gray-900 p-0 rounded-xl shadow-xl border-t-4 border-cyan-500 transform rotate-y-180 overflow-hidden cursor-pointer"
                                    style={{ 
                                        backgroundImage: `url(${imageUrl(cert.id)})`, 
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}
                                >
                                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-gray-900/90 to-transparent">
                                        <a 
                                            href={cert.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-base font-extrabold px-4 py-2 rounded-lg bg-cyan-600/90 hover:bg-cyan-600 transition shadow-lg whitespace-nowrap"
                                        >
                                            {t({ fr: "Vérifier le Certificat en Ligne", en: "Verify Certificate Online" })}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
export default CertificationsSection;