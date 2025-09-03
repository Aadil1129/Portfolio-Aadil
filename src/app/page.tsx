import Navigation from "@/components/navigation";
import HomeSection from "@/components/sections/home";
import AboutSection from "@/components/sections/about";
import SkillsSection from "@/components/sections/skills";
import ExperienceSection from "@/components/sections/experience";
import ProjectsSection from "@/components/sections/projects";
import EducationSection from "@/components/sections/education";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <main>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
      </main>
      <Footer />
    </div>
  );
}
