import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProjectsRequest } from "../api/projects";
import ProjectCard from "../components/projectCard/ProjectCard";
import { useAuth } from "../hooks/useAuth";
import { Project, RolesEnum } from "../types";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const { user } = useAuth();

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
      {user?.role === RolesEnum.administrator && (
        <div>
          <Link to="/create-project">
            <button>Create New Project</button>
          </Link>
        </div>
      )}
      <div>
        {projects.length ? (
          projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))
        ) : (
          <>
            <h2>No projects assigned</h2>
            <p>Please ask access for an administrator.</p>
          </>
        )}
      </div>
    </>
  );
}
