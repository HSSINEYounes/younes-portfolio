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

export const GREETING = {
    title: "Younes Hssine",
    tagline: "Ingénieur Full Stack React & Laravel (Mention Très Bien)",
    summary: "Ingénieur diplômé de l'EMSI, spécialisé en ReactJS, Typescript et Laravel. Mon objectif est de concevoir des architectures Microservices performantes et scalables, ayant déjà géré plus de 50 000 dossiers patients et optimisé les flux de développement de 20%",
};

export const SKILLS_DATA = {
    frontend: [
        { name: "ReactJS", level: "Expert" },
        { name: "TypeScript", level: "Expert" },
        { name: "Hooks Personnalisés", level: "Expert" },
        { name: "Tests (Jest/RTL)", level: "Avancé" },
        { name: "Angular", level: "Avancé" },
        { name: "Tailwind CSS", level: "Avancé" },
        { name: "JavaScript", level: "Expert" }
    ],
    backend: [
        { name: "Laravel (PHP)", level: "Expert" },
        { name: "Optimisation MySQL", level: "Avancé" },
        { name: "Spring Boot (Java)", level: "Avancé" },
        { name: "Python/Django", level: "Avancé" },
        { name: "API RESTful", level: "Expert" }
    ],
    devops: [
        { name: "Microservices", level: "Certifié" },
        { name: "Docker", level: "Pratique" },
        { name: "CI/CD (GitHub Actions)", level: "Pratique" },
        { name: "Agile/Scrum", level: "Pratique" },
    ],
    databases: [
        { name: "MySQL", level: "Expert" },
        { name: "PostgreSQL", level: "Avancé" },
        { name: "Oracle", level: "Intermédiaire" }
    ]
}

export const EXPERIENCE_DATA: Experience[] = [
    {
        id: 1,
        company: "MasaratApp, Témara",
        role: "Développeur Full Stack (Stage PFE)",
        duration: "Mars 2024 - Septembre 2024",
        stack: ["Laravel", "ReactJS", "Typescript", "MySQL", "Agile/Scrum"],
        achievements: [
            "Conçu et implémenté une architecture backend Laravel capable de traiter plus de 50 000 dossiers patients.",
            "Intégré un moteur de détection de doublons (MySQL), garantissant une fiabilité des données de 99,5%.",
            "Refondu l'interface ReactJS via une approche modulaire, accélérant la livraison des futures fonctionnalités de 20%.",
            "Automatisé des workflows critiques (intégration FM), réduisant le temps de traitement manuel pour l'équipe Opérations de 3 heures par semaine.",
        ],
    },
    {
        id: 2,
        company: "Ménara Holding, Marrakech",
        role: "Développeur (Stage de fin d'année)",
        duration: "Juillet - Octobre 2023",
        stack: ["Python", "Django"],
        achievements: [
            "Développé une application web de gestion des employés en Python/Django.",
            "Implémenté un système d'évaluation basé sur 5 critères clés et un module de planification de carrière.",
        ],
    },
    {
        id: 2,
        company: "Ménara Holding, Marrakech",
        role: "Développeur (Stage de fin d'année)",
        duration: "Juillet - Octobre 2022",
        stack: ["php", "JavaScript"],
        achievements: [
            "Conçu et déployé une plateforme de recrutement (stack PHP/JavaScript)",
            "La plateforme est capable de gérer et d'automatiser le flux de plus de 200 candidatures par mois.",
        ],
    },
];

export const PROJECTS_DATA: Project[] = [
    {
        name: "Plateforme Full-Stack de Livraison et Suivi de Colis",
        description: "Plateforme complète démontrant l'application des principes d'une architecture Microservices pour la scalabilité.",
        techStack: "ReactJS, Spring Boot",
        githubUrl: "",
    },
    {
        name: "Blog Web Full-Stack",
        description: "Création d'une application Full-Stack complète pour un blog, couvrant l'administration, l'écriture d'articles et la gestion des utilisateurs.",
        techStack: "Angular, Spring Boot",
        githubUrl: "",
    },
    {
        name: "Application Web de Découverte de Recettes (Web Scraping)",
        description: "Application validant l'expertise en extraction et traitement de données (Web Scraping) à l'aide de Django.",
        techStack: "Python, Django",
        githubUrl: "",
    }, {
        name: "AkalGeo - Jeu de Géolocalisation Réactif",
        description: "Développement complet d'un jeu interactif de géolocalisation pour tester la connaissance des cartes et drapeaux. Mise en œuvre d'une gestion d'état complexe et d'animations fluides.",
        techStack: "ReactJS, TypeScript, Context API",
        githubUrl: "",
    },
    {
        name: "Réseau Social de Support Technique (Q&A)",
        description: "Développement d'une plateforme communautaire permettant aux utilisateurs de publier des problèmes techniques et d'y répondre. Fonctionnalités incluant la gestion de profil, le suivi d'utilisateurs et la modération des posts.",
        techStack: "Angular, TypeScript, API RESTful, Base de données SQL/NoSQL",
        githubUrl: "",
    },
    {
        name: "Plateforme de Gestion Documentaire et Financière pour Comptables",
        description: "Conception d'un portail web sécurisé permettant aux experts-comptables de gérer les documents clients, les échéances fiscales et les soldes de paiement. Utilisation de Firebase pour l'authentification sécurisée et le stockage de documents.",
        techStack: "ReactJS, Firebase (Auth/Firestore/Storage), Bootstrap, React-Router",
        githubUrl: "",
    },
];

export const EDUCATION_DATA = [
    {
        id: 1,
        institution: "École Marocaine des Sciences de l'Ingénieur (EMSI)",
        degree: "Diplôme d'Ingénieur d'État",
        field: "Génie Informatique et Réseaux",
        duration: "2021 - 2024",
        mention: "Mention Très Bien",
    },
    {
        id: 2,
        institution: "École Marocaine des Sciences de l'Ingénieur (EMSI)",
        degree: "Années préparatoires intégrées",
        field: "Mathématiques et Informatique",
        duration: "2019 - 2021",
        mention: "Mention Bien",
    },
];

export const SOFT_SKILLS = [
    "Résolution de Problèmes Complexes",
    "Esprit Critique et Rigueur",
    "Adaptabilité et Apprentissage Rapide",
    "Créativité",
    "Communication Professionnelle",
    "Collaboration (Travail d'Équipe)",
];

export const LANGUAGES = [
    { name: "Amazigh", level: "Langue Maternelle" },
    { name: "Arabe", level: "Bilingue" },
    { name: "Français", level: "Professionnel (B2/C1)" },
    { name: "Anglais", level: "Professionnel (B2/C1)" },
];

export const HOBBIES_DATA = [
    {
        name: "Création Numérique & 3D",
        icon: "💡",
        description: "Maîtrise de Blender pour la modélisation 3D, pratique de la photographie et du dessin. Développe la créativité et le souci du détail dans la conception.",
    },
    {
        name: "Sports d'Équipe & Endurance",
        icon: "🏃‍♂️",
        description: "Course à pied pour l'endurance, et pratique du football. Cultive l'esprit d'équipe, la discipline et la gestion de la pression.",
    },
    {
        name: "Stratégie & Compétition",
        icon: "🎮",
        description: "Jeux vidéo pour le développement de la pensée stratégique, de la réactivité et de la résolution rapide de problèmes.",
    },
    {
        name: "Ouverture Culturelle & Sociale",
        icon: "🌍",
        description: "Voyages réguliers et implication dans une association. Renforce l'adaptabilité, la communication interculturelle et les compétences sociales.",
    },
];

export const CERTIFICATIONS_DATA = [
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