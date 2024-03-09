import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProjectsRequest } from "../api/projects";
import ProjectCard from "../components/projectCard/ProjectCard";
import { Project } from "../types";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  async function getProjects() {
    const data = await getProjectsRequest();
    setProjects(data);
  }

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <h1>Projects Page</h1>
      <div>
        <Link to="/create-project">
          <button>Create New Project</button>
        </Link>
      </div>
      <div>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
