import { memo } from "react";

const ProjectCard = memo(function ProjectCard({ project }) {
  const CardTag = project.link ? "a" : "article";

  return (
    <CardTag
      className="project"
      {...(project.link
        ? {
            href: project.link,
            target: "_blank",
            rel: "noreferrer",
          }
        : {})}
    >
      <span className="project__tag">{project.tag}</span>
      <h3 className="project__title">
        {project.title}
        {project.link && <span className="project__arrow">↗</span>}
      </h3>
      <p className="project__desc">{project.description}</p>
      <div className="project__stack">
        {project.stack.map((item) => (
          <span className="chip" key={`${project.title}-${item}`}>
            {item}
          </span>
        ))}
      </div>
    </CardTag>
  );
});

export default ProjectCard;
