import ProjectCard from "../components/projectCard/ProjectCard";
import { projects } from "../db";

export default function Projects() {
  return (
    <>
      <h1>Projects Page</h1>
      <div>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
