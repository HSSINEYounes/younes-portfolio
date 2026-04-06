// src/utils/IconMap.tsx

import React from 'react';
import type { IconType } from 'react-icons';
// Importations ciblées (ajoutez toutes les technologies que vous utilisez)
import { 
    SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiNodedotjs, 
    SiExpress, SiMongodb, SiPostgresql, SiDocker, SiGit, SiTailwindcss, 
    SiNestjs, SiAew, SiGraphql 
} from 'react-icons/si'; 

// Définir une interface pour la map pour garantir le type React.FC
interface IconMap {
    [key: string]: IconType;
}

// Mappage (associez la clé de votre objet SKILLS_DATA au composant d'icône)
export const TechIconMap: IconMap = {
    'React': SiReact,
    'TypeScript': SiTypescript,
    'JavaScript': SiJavascript,
    'HTML': SiHtml5,
    'CSS': SiCss3,
    'Node.js': SiNodedotjs,
    'Express.js': SiExpress,
    'MongoDB': SiMongodb,
    'PostgreSQL': SiPostgresql,
    'Docker': SiDocker,
    'Git': SiGit,
    'Tailwind CSS': SiTailwindcss,
    'NestJS': SiNestjs,
    'AWS': SiAew,
    'GraphQL': SiGraphql,
    // Ajoutez le reste de votre stack ici
};

/**
 * Récupère le composant d'icône React pour un nom de technologie donné.
 * @param name Nom de la compétence (tel qu'il apparaît dans SKILLS_DATA)
 * @returns Le composant Icone (ou null si non trouvé)
 */
export const getTechIcon = (name: string): IconType | null => {
    return TechIconMap[name] || null;
};
