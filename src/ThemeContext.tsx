// src/ThemeContext.tsx (Anciennement LanguageContext.tsx)

import React, { createContext, useState, useContext, type ReactNode, useEffect } from 'react';

type Language = 'fr' | 'en';
type Theme = 'light' | 'dark';

interface ThemeContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (text: { fr: string, en: string }) => string; 
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const defaultContextValue: ThemeContextType = {
    language: 'fr',
    setLanguage: () => {},
    t: (text) => text.fr,
    theme: 'light',
    setTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultContextValue);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    // 1. GESTION DE LA LANGUE
    const [language, setLanguage] = useState<Language>(
        (localStorage.getItem('lang') as Language) || 'fr'
    );
    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem('lang', lang);
    }
    const t = (text: { fr: string, en: string }): string => {
        return text[language];
    };

    // 2. GESTION DU THÈME
    const [theme, setTheme] = useState<Theme>(
        (localStorage.getItem('theme') as Theme) || 'light'
    );

    // Effet pour appliquer/retirer la classe 'dark' au <body>
    useEffect(() => {
        const body = document.documentElement; // Utilisez document.documentElement pour la compatibilité
        if (theme === 'dark') {
            body.classList.add('dark');
        } else {
            body.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);


    return (
        <ThemeContext.Provider value={{ language, setLanguage: handleSetLanguage, t, theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};