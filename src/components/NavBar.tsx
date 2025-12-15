import type React from "react";
import { useTheme } from "../ThemeContext";

const NavBar: React.FC = () => {
  const { language, setLanguage, t, theme, setTheme } = useTheme();
  const isFrench = language === 'fr';

  const toggleLanguage = () => {
    setLanguage(isFrench ? 'en' : 'fr');
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const navLinks = [
    { href: "#experience", label: t({ fr: "Expérience", en: "Experience" }) },
    { href: "#projects", label: t({ fr: "Projets", en: "Projects" }) },
    { href: "#skills", label: t({ fr: "Stack Technique", en: "Tech Stack" }) },
    { href: "#education", label: t({ fr: "Formation", en: "Education" }) },
    { href: "#certifications", label: t({ fr: "Certifications", en: "Certifications" }) },
    { href: "#hobbies", label: t({ fr: "Loisirs", en: "Hobbies" }) },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-lg border-b-2 border-gray-100 dark:border-gray-700">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
            <a href="#top" className="hover:text-cyan-600 transition duration-150">Younes Hssine</a>
        </div>
        <div className="space-x-6 text-gray-700 dark:text-gray-300 font-medium hidden md:flex">
          {navLinks.map(link => (
              <a key={link.href} href={link.href} className="hover:text-cyan-600 transition duration-150">
                  {link.label}
              </a>
          ))}
        </div>
        <div className="flex items-center space-x-4">
            <button
                onClick={toggleTheme}
                className="font-bold border border-gray-300 dark:border-gray-600 px-3 py-1.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-150"
                aria-label={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            >
                {theme === 'light' ? '🌙' : '☀️'} 
            </button>
            <button 
                onClick={toggleLanguage}
                className="font-bold border border-gray-300 dark:border-gray-600 px-3 py-1.5 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-150"
                aria-label={isFrench ? 'Switch to English' : 'Passer au Français'}
            >
                {isFrench ? 'EN' : 'FR'}
            </button>
            <a href="#contact" className="text-white bg-cyan-600 px-6 py-2 rounded-lg font-bold shadow-md hover:bg-cyan-700 transition duration-200">
                {t({ fr: "Contact", en: "Contact" })}
            </a>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;