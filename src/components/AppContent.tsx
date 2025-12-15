import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import SkillsSection from "./SkillsSection";
import EducationSection from "./EducationSection";
import CertificationsSection from "./CertificationsSection";
import MiscSection from "./MiscSection";
import HobbiesSection from "./HobbiesSection";
import FooterSection from "./FooterSection";

const AppContent: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 800, 
            once: true,    
            mirror: false, 
        });
        AOS.refresh(); 
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 antialiased overflow-x-hidden">
        
        <NavBar />
        <HeroSection />
        
        <main>
            <ExperienceSection />
            <ProjectsSection />
            <SkillsSection />
            <EducationSection />
            <CertificationsSection />
            <MiscSection />
            <HobbiesSection />
        </main>

        <FooterSection />
        </div>
    );
};
export default AppContent;