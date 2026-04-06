type LocalizedString = {
    fr: string;
    en: string;
};

type Experience = {
    id: number;
    company: LocalizedString;
    role: LocalizedString;
    duration: string;
    stack: string[];
    achievements: LocalizedString[];
};

type Project = {
    name: LocalizedString;
    description: LocalizedString;
    techStack: string;
    githubUrl: string;
    liveUrl?: string;
};

type Skill = {
    name: string;
    level: LocalizedString;
};

type Education = {
    id: number;
    institution: LocalizedString;
    degree: LocalizedString;
    field: LocalizedString;
    duration: string;
    mention: LocalizedString;
};

type Language = {
    name: LocalizedString;
    level: LocalizedString;
};

type Hobby = {
    name: LocalizedString;
    icon: string;
    description: LocalizedString;
};

type Certification = {
    id: number;
    name: string;
    issuer: string;
    date: string;
    url: string;
};

export const GREETING = {
    title: {
        fr: "Younes Hssine",
        en: "Younes Hssine"
    },
    tagline: {
        fr: "Ingénieur Full Stack React & Laravel (Mention Très Bien)",
        en: "Full Stack Engineer React & Laravel (Distinction: Very Good)"
    },
    summary: {
        fr: "Ingénieur diplômé de l'EMSI, spécialisé en ReactJS, Typescript et Laravel. Mon objectif est de concevoir des **systèmes robustes et évolutifs (scalables)**, ayant déjà géré et sécurisé le flux de plus de 50,000 enregistrements critiques et optimisé les flux de développement de 20%.",
        en: "EMSI graduate engineer, specialized in ReactJS, Typescript, and Laravel. My goal is to design **robust and scalable systems**, having already managed and secured the flow of over 50,000 critical records and optimized development workflows by 20%."
    },
};

export const SKILLS_DATA = {
    frontend: [
        { name: "ReactJS", level: { fr: "Expert", en: "Expert" } },
        { name: "TypeScript", level: { fr: "Expert", en: "Expert" } },
        { name: "Hooks Personnalisés", level: { fr: "Expert", en: "Expert" } },
        { name: "Tests (Jest)", level: { fr: "Avancé", en: "Advanced" } },
        { name: "Angular", level: { fr: "Avancé", en: "Advanced" } },
        { name: "Tailwind CSS", level: { fr: "Avancé", en: "Advanced" } },
        { name: "JavaScript", level: { fr: "Expert", en: "Expert" } }
    ],
    backend: [
        { name: "Laravel (PHP)", level: { fr: "Expert", en: "Expert" } },
        { name: "Optimisation MySQL", level: { fr: "Avancé", en: "Advanced" } },
        { name: "Spring Boot (Java)", level: { fr: "Avancé", en: "Advanced" } },
        { name: "Python/Django", level: { fr: "Avancé", en: "Advanced" } },
        { name: "API RESTful", level: { fr: "Expert", en: "Expert" } }
    ],
    devops: [
        { name: "Microservices", level: { fr: "Certifié", en: "Certified" } },
        { name: "Docker", level: { fr: "Pratique", en: "Practical" } },
        { name: "CI/CD (GitHub Actions)", level: { fr: "Pratique", en: "Practical" } },
        { name: "Agile/Scrum", level: { fr: "Pratique", en: "Practical" } },
    ],
    databases: [
        { name: "MySQL", level: { fr: "Expert", en: "Expert" } },
        { name: "PostgreSQL", level: { fr: "Avancé", en: "Advanced" } },
        { name: "Oracle", level: { fr: "Intermédiaire", en: "Intermediate" } }
    ]
} as { [key: string]: Skill[] };

export const EXPERIENCE_DATA: Experience[] = [
    {
        id: 1,
        company: { fr: "Indépendant", en: "Independent" },
        role: { fr: "Ingénieur Full-Stack", en: "Full-Stack Engineer" },
        duration: "2024 - Présent",
        stack: ["ReactJS", "Laravel", "Node.js", "TypeScript", "FFmpeg", "Shopify API", "MySQL", "Agile"],
        achievements: [
            {
                fr: "TarteelSpace : Plateforme SaaS de génération vidéo automatisée synchronisant audio (multi-récitants), texte, Tafsir et traductions via Node.js/FFmpeg.",
                en: "TarteelSpace: Automated video SaaS platform synchronizing audio (multi-reciters), text, Tafsir, and translations using Node.js/FFmpeg."
            },
            {
                fr: "Portail Expert-Comptable : Interface B2B de gestion de projets, suivi des délais de paiement et automatisation des relances clients.",
                en: "Accounting Portal: B2B project management interface, payment tracking, and automated client reminders."
            },
            {
                fr: "AkalGeo : Développement d'un jeu interactif haute performance (React/Globe.gl) avec gestion d'état complexe et modes multi-jeux.",
                en: "AkalGeo: High-performance interactive game (React/Globe.gl) featuring complex state management and multiple game modes."
            },
            {
                fr: "SaaS Shopify : Conception d'applications d'optimisation e-commerce et intégration d'API pour la gestion des flux marchands.",
                en: "Shopify SaaS: E-commerce optimization apps and API integration for merchant workflow management."
            },
            {
                fr: "Expertise Backend : Architecture Laravel traitant +50 000 dossiers patients avec un moteur de détection de doublons (fiabilité 99,5%).",
                en: "Backend Expertise: Laravel architecture processing 50,000+ patient records with a duplicate detection engine (99.5% reliability)."
            }
        ],
    },
    {
        id: 2,
        company: { fr: "MasaratApp, Témara", en: "MasaratApp, Témara" },
        role: { fr: "Développeur Full Stack (Stage PFE)", en: "Full Stack Developer (Final Project Internship)" },
        duration: "Mars 2024 - Septembre 2024",
        stack: ["Laravel", "ReactJS", "Typescript", "MySQL", "Agile/Scrum"],
        achievements: [
            {
                fr: "Conçu et implémenté une architecture backend Laravel capable de traiter plus de 50 000 dossiers patients.",
                en: "Designed and implemented a Laravel backend architecture capable of processing over 50,000 patient records."
            },
            {
                fr: "Intégré un moteur de détection de doublons (MySQL), garantissant une fiabilité des données de 99,5%.",
                en: "Integrated a duplicate detection engine (MySQL), ensuring data reliability of 99.5%."
            },
            {
                fr: "Refondu l'interface ReactJS via une approche modulaire, accélérant la livraison des futures fonctionnalités de 20%.",
                en: "Refactored the ReactJS interface using a modular approach, accelerating the delivery of future features by 20%."
            },
            {
                fr: "Automatisé des workflows critiques (intégration FM), réduisant le temps de traitement manuel pour l'équipe Opérations de 3 heures par semaine.",
                en: "Automated critical workflows (FM integration), reducing manual processing time for the Operations team by 3 hours per week."
            },
        ],
    },
    {
        id: 3,
        company: { fr: "Ménara Holding, Marrakech", en: "Ménara Holding, Marrakech" },
        role: { fr: "Développeur (Stage de fin d'année)", en: "Developer (End-of-Year Internship)" },
        duration: "Juillet - Octobre 2023",
        stack: ["Python", "Django"],
        achievements: [
            {
                fr: "Développé une application web de gestion des employés en Python/Django.",
                en: "Developed a Python/Django web application for employee management."
            },
            {
                fr: "Implémenté un système d'évaluation basé sur 5 critères clés et un module de planification de carrière.",
                en: "Implemented an evaluation system based on 5 key criteria and a career planning module."
            },
        ],
    },
    {
        id: 4,
        company: { fr: "Ménara Holding, Marrakech", en: "Ménara Holding, Marrakech" },
        role: { fr: "Développeur (Stage de fin d'année)", en: "Developer (End-of-Year Internship)" },
        duration: "Juillet - Octobre 2022",
        stack: ["php", "JavaScript"],
        achievements: [
            {
                fr: "Conçu et déployé une plateforme de recrutement (stack PHP/JavaScript)",
                en: "Designed and deployed a recruitment platform (PHP/JavaScript stack)."
            },
            {
                fr: "La plateforme est capable de gérer et d'automiser le flux de plus de 200 candidatures par mois.",
                en: "The platform is capable of managing and automating the flow of over 200 applications per month."
            },
        ],
    },
];

export const PROJECTS_DATA: Project[] = [
    {
        name: { fr: "Plateforme Full-Stack de Livraison et Suivi de Colis", en: "Full-Stack Parcel Tracking and Delivery Platform" },
        description: {
            fr: "Plateforme complète démontrant l'application des principes d'une architecture Microservices pour la scalabilité.",
            en: "Comprehensive platform demonstrating the application of Microservices architecture principles for scalability."
        },
        techStack: "ReactJS, Spring Boot",
        githubUrl: "",
    },
    {
        name: { fr: "Blog Web Full-Stack", en: "Full-Stack Web Blog" },
        description: {
            fr: "Création d'une application Full-Stack complète pour un blog, couvrant l'administration, l'écriture d'articles et la gestion des utilisateurs.",
            en: "Creation of a complete Full-Stack blog application, covering administration, article writing, and user management."
        },
        techStack: "Angular, Spring Boot",
        githubUrl: "",
    },
    {
        name: { fr: "Application Web de Découverte de Recettes (Web Scraping)", en: "Web Recipe Discovery Application (Web Scraping)" },
        description: {
            fr: "Application validant l'expertise en extraction et traitement de données (Web Scraping) à l'aide de Django.",
            en: "Application validating expertise in data extraction and processing (Web Scraping) using Django."
        },
        techStack: "Python, Django",
        githubUrl: "",
    },
    {
        name: { fr: "AkalGeo - Jeu de Géolocalisation Réactif", en: "AkalGeo - Responsive Geolocation Game" },
        description: {
            fr: "Développement complet d'un jeu interactif de géolocalisation pour tester la connaissance des cartes et drapeaux. Mise en œuvre d'une gestion d'état complexe et d'animations fluides.",
            en: "Full development of an interactive geolocation game to test map and flag knowledge. Implementation of complex state management and smooth animations."
        },
        techStack: "ReactJS, TypeScript, Context API",
        githubUrl: "",
    },
    {
        name: { fr: "Réseau Social de Support Technique (Q&A)", en: "Technical Support Social Network (Q&A)" },
        description: {
            fr: "Développement d'une plateforme communautaire permettant aux utilisateurs de publier des problèmes techniques et d'y répondre. Fonctionnalités incluant la gestion de profil, le suivi d'utilisateurs et la modération des posts.",
            en: "Development of a community platform allowing users to post and answer technical issues. Features include profile management, user following, and post moderation."
        },
        techStack: "Angular, TypeScript, API RESTful, SQL/NoSQL Database",
        githubUrl: "",
    },
    {
        name: { fr: "Plateforme de Gestion Documentaire et Financière pour Comptables", en: "Documentary and Financial Management Platform for Accountants" },
        description: {
            fr: "Conception d'un portail web sécurisé permettant aux experts-comptables de gérer les documents clients, les échéances fiscales et les soldes de paiement. Utilisation de Firebase pour l'authentification sécurisée et le stockage de documents.",
            en: "Design of a secure web portal allowing chartered accountants to manage client documents, tax deadlines, and payment balances. Uses Firebase for secure authentication and document storage."
        },
        techStack: "ReactJS, Firebase (Auth/Firestore/Storage), Bootstrap, React-Router",
        githubUrl: "",
    },
];

export const EDUCATION_DATA: Education[] = [
    {
        id: 1,
        institution: { fr: "École Marocaine des Sciences de l'Ingénieur (EMSI)", en: "Moroccan School of Engineering Sciences (EMSI)" },
        degree: { fr: "Diplôme d'Ingénieur d'État", en: "State Engineer's Diploma" },
        field: { fr: "Génie Informatique et Réseaux", en: "Computer and Network Engineering" },
        duration: "2021 - 2024",
        mention: { fr: "Mention Très Bien", en: " Very Good" },
    },
    {
        id: 2,
        institution: { fr: "École Marocaine des Sciences de l'Ingénieur (EMSI)", en: "Moroccan School of Engineering Sciences (EMSI)" },
        degree: { fr: "Années préparatoires intégrées", en: "Integrated Preparatory Years" },
        field: { fr: "Mathématiques et Informatique", en: "Mathematics and Computer Science" },
        duration: "2019 - 2021",
        mention: { fr: "Mention Bien", en: " Good" },
    },
];

export const SOFT_SKILLS: LocalizedString[] = [
    { fr: "Résolution de Problèmes Complexes", en: "Complex Problem Solving" },
    { fr: "Esprit Critique et Rigueur", en: "Critical Thinking and Rigor" },
    { fr: "Adaptabilité et Apprentissage Rapide", en: "Adaptability and Fast Learning" },
    { fr: "Créativité", en: "Creativity" },
    { fr: "Communication Professionnelle", en: "Professional Communication" },
    { fr: "Collaboration (Travail d'Équipe)", en: "Collaboration (Teamwork)" },
];

export const LANGUAGES: Language[] = [
    { name: { fr: "Amazigh", en: "Amazigh" }, level: { fr: "Langue Maternelle", en: "Native Speaker" } },
    { name: { fr: "Arabe", en: "Arabic" }, level: { fr: "Bilingue", en: "Bilingual" } },
    { name: { fr: "Français", en: "French" }, level: { fr: "Professionnel (B2/C1)", en: "Professional (B2/C1)" } },
    { name: { fr: "Anglais", en: "English" }, level: { fr: "Professionnel (B2/C1)", en: "Professional (B2/C1)" } },
];

export const HOBBIES_DATA: Hobby[] = [
    {
        name: { fr: "Création Numérique & 3D", en: "Digital & 3D Creation" },
        icon: "💡",
        description: {
            fr: "Maîtrise de Blender pour la modélisation 3D, pratique de la photographie et du dessin. Développe la créativité et le souci du détail dans la conception.",
            en: "Proficiency in Blender for 3D modeling, practice of photography and drawing. Develops creativity and attention to detail in design."
        },
    },
    {
        name: { fr: "Sports d'Équipe & Endurance", en: "Team Sports & Endurance" },
        icon: "🏃‍♂️",
        description: {
            fr: "Course à pied pour l'endurance, et pratique du football. Cultive l'esprit d'équipe, la discipline et la gestion de la pression.",
            en: "Running for endurance, and practice of football. Cultivates teamwork, discipline, and pressure management."
        },
    },
    {
        name: { fr: "Stratégie & Compétition", en: "Strategy & Competition" },
        icon: "🎮",
        description: {
            fr: "Jeux vidéo pour le développement de la pensée stratégique, de la réactivité et de la résolution rapide de problèmes.",
            en: "Video games for developing strategic thinking, responsiveness, and rapid problem-solving."
        },
    },
    {
        name: { fr: "Ouverture Culturelle & Sociale", en: "Cultural & Social Openness" },
        icon: "🌍",
        description: {
            fr: "Voyages réguliers et implication dans une association. Renforce l'adaptabilité, la communication interculturelle et les compétences sociales.",
            en: "Regular travel and involvement in an association. Strengthens adaptability, cross-cultural communication, and social skills."
        },
    },
];

export const CERTIFICATIONS_DATA: Certification[] = [
    {
        id: 1,
        name: "Building Scalable Java Microservices with Spring Boot and Spring Cloud",
        issuer: "Google Cloud / Coursera",
        date: "2024",
        url: "https://coursera.org/share/122083f115c50dff585b7d859beb2a9c",
    },
    {
        id: 2,
        name: "Full-Stack Web Development with React",
        issuer: "Hong Kong University of Science and Technology / Coursera",
        date: "2024",
        url: "https://coursera.org/share/9c0d8ac1ba8d35de4fbf4dad3a66c643",
    },
    {
        id: 3,
        name: "IBM DevOps, Cloud, and Agile Foundations",
        issuer: "IBM / Coursera",
        date: "2023",
        url: "https://coursera.org/share/e373bdc68a2415e1af0c278cbcebe5b3",
    },
    {
        id: 4,
        name: "Android App Development (Série Capstone)",
        issuer: "Vanderbilt University / Coursera",
        date: "2023",
        url: "https://coursera.org/share/d2ada4b66f25fdb4092f9352a86eff31",
    },
    {
        id: 5,
        name: "Capstone MOOC for Android App Development",
        issuer: "Vanderbilt University / Coursera",
        date: "2023",
        url: "https://coursera.org/share/0b96f5715a8e446f6b8eaa25146a2ef7",
    },
    {
        id: 6,
        name: "Android App Components (Intents, Activities, Broadcast Receivers)",
        issuer: "Vanderbilt University / Coursera",
        date: "2023",
        url: "https://coursera.org/share/dc7dced46715d2b8bfd801e8d2f5a773",
    },
    {
        id: 7,
        name: "Machine Learning with Python",
        issuer: "IBM / Coursera",
        date: "2022",
        url: "https://coursera.org/share/1a566a05b527f1fb6ef19a42f5195e4c",
    },
    {
        id: 8,
        name: "Introduction to Cloud Computing",
        issuer: "IBM / Coursera",
        date: "2022",
        url: "https://coursera.org/share/11329b8cffca7e39d0523f3164d59aa6",
    },
    {
        id: 9,
        name: "Introduction to Agile Development and Scrum",
        issuer: "IBM / Coursera",
        date: "2022",
        url: "https://coursera.org/share/d0abdbe25117e23d9cbef7c97e93efbc",
    },
];