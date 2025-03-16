import "./App.css";
import ChatBot from "./components/ChatBot";
import Hero from "./components/Hero";
import SkillsGrid from "./components/SkillsGrid";
import ExperienceTimeline from "./components/ExperienceTimeline";
import {
  heroContent,
  skills,
  experiences,
  education,
  projects,
  footer,
} from "./data";
import EducationSection from "./components/EducationSection";
import ProjectsGrid from "./components/ProjectsGrid";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='min-h-screen' style={{ backgroundColor: "#121824" }}>
      <Hero {...heroContent} />
      <ExperienceTimeline experiences={experiences} />
      <EducationSection education={education} />
      <SkillsGrid skills={skills} />
      <ProjectsGrid projects={projects} />
      <ChatBot />
      <Footer footer={footer} />
    </div>
  );
}

export default App;
