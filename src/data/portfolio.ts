// Définition de types TypeScript clairs pour garantir la cohérence
type Skill = {
    name: string;
    level: string; // Ex: 'Expert', 'Intermédiaire'
};

type Experience = {
    id: number;
    company: string;
    role: string;
    duration: string;
    stack: string[];
    achievements: string[];
};

type Project = {
    name: string;
    description: string;
    techStack: string;
    githubUrl: string;
    liveUrl?: string;
};

// =================================================================
// 1. DATA UTILISATEUR
// =================================================================
export const GREETING = {
    title: "Younes Hssine",
    tagline: "Ingénieur Full Stack React & Laravel (Mention Très Bien)",
    // CORRIGÉ: Suppression des marqueurs et
    summary: "Ingénieur diplômé de l'EMSI, spécialisé en ReactJS, Typescript et Laravel. Mon objectif est de concevoir des architectures Microservices performantes et scalables, ayant déjà géré plus de 50 000 dossiers patients et optimisé les flux de développement de 20%",
};

// =================================================================
// 2. COMPÉTENCES (SKILLS)
// =================================================================
export const SKILLS_DATA = {
    frontend: [
        { name: "ReactJS", level: "Expert" },
        { name: "TypeScript", level: "Expert" },
        { name: "Angular", level: "Avancé" },
        { name: "Tailwind CSS", level: "Avancé" },
        { name: "JavaScript", level: "Expert" }
    ],
    backend: [
        { name: "Laravel (PHP)", level: "Expert" },
        { name: "Spring Boot (Java)", level: "Avancé" },
        { name: "Python/Django", level: "Avancé" },
        { name: "API RESTful", level: "Expert" }
    ],
    devops: [
        { name: "Microservices", level: "Certifié" },
        { name: "CI/CD", level: "Pratique" },
        { name: "Agile/Scrum", level: "Pratique" },
    ],
    databases: [
        { name: "MySQL", level: "Expert" },
        { name: "PostgreSQL", level: "Avancé" },
        { name: "Oracle", level: "Intermédiaire" }
    ]
}

// =================================================================
// 3. EXPÉRIENCES PROFESSIONNELLES
// =================================================================
export const EXPERIENCE_DATA: Experience[] = [
    {
        id: 1,
        company: "MasaratApp, Témara",
        role: "Développeur Full Stack (Stage PFE)",
        duration: "Mars 2024 - Septembre 2024",
        stack: ["Laravel", "ReactJS", "Typescript", "MySQL", "Agile/Scrum"],
        achievements: [
            // CORRIGÉ: Suppression des marqueurs et
            "Conçu et implémenté une architecture backend Laravel capable de traiter plus de **50 000 dossiers patients**.",
            "Intégré un moteur de détection de doublons (MySQL), garantissant une **fiabilité des données de 99,5%**.",
            "Refondu l'interface ReactJS via une approche modulaire, accélérant la livraison des futures fonctionnalités de **20%**.",
            "Automatisé des workflows critiques (intégration FM), réduisant le temps de traitement manuel pour l'équipe Opérations de **3 heures par semaine**.",
        ],
    },
    {
        id: 2,
        company: "Ménara Holding, Marrakech",
        role: "Développeur (Stage de fin d'année)",
        duration: "Juillet - Octobre 2023",
        stack: ["Python", "Django"],
        achievements: [
            // CORRIGÉ: Suppression des marqueurs et
            "Développé une application web de gestion des employés en **Python/Django**.",
            "Implémenté un système d'évaluation basé sur 5 critères clés et un module de planification de carrière.",
        ],
    },
    // ... autres expériences (2022)
];

// =================================================================
// 4. PROJETS ACADÉMIQUES
// =================================================================
export const PROJECTS_DATA: Project[] = [
    {
        name: "Plateforme Full-Stack de Livraison et Suivi de Colis",
        // CORRIGÉ: Suppression du marqueur devant 'description'
        description: "Plateforme complète démontrant l'application des principes d'une **architecture Microservices** pour la scalabilité.",
        techStack: "ReactJS, Spring Boot",
        githubUrl: "https://github.com/VOTRE_UTILISATEUR/colis-microservices",
    },
    {
        name: "Blog Web Full-Stack",
        description: "Création d'une application Full-Stack complète pour un blog, couvrant l'administration, l'écriture d'articles et la gestion des utilisateurs.",
        techStack: "Angular, Spring Boot",
        githubUrl: "https://github.com/VOTRE_UTILISATEUR/blog-angular-springboot",
    },
    {
        name: "Application Web de Découverte de Recettes (Web Scraping)",
        description: "Application validant l'expertise en extraction et traitement de données (Web Scraping) à l'aide de Django.",
        techStack: "Python, Django",
        githubUrl: "https://github.com/VOTRE_UTILISATEUR/recettes-scraper",
    },
];

// =que d'autres sections (Education, Certifications...)