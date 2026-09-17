import { projects } from "../data/content.js";
import ProjectCard from "./ProjectCard.jsx";
import SectionHeading from "./SectionHeading.jsx";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <SectionHeading
        title="Selected work"
      >
        <span className="lede">
          Systems shipped for enterprise clients across retrieval, agents, and applied research.
        </span>
      </SectionHeading>

      <div className="projects__grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
