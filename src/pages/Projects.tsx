import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProjectsByUserId, getProjectsRequest } from "../api/projects";
import ProjectCard from "../components/projectCard/ProjectCard";
import { useAuth } from "../hooks/useAuth";
import { Project, RolesEnum } from "../types";
import "./Projects.css";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const { user } = useAuth();

  async function getProjects() {
    let data;
    if (user?.role === RolesEnum.administrator) {
      data = await getProjectsRequest();
    } else {
      data = await getProjectsByUserId();
    }
    setProjects(data);
  }

  function renderMessageEmptyProjects(role: string) {
    return role === RolesEnum.administrator ? (
      <>
        <h2>There are no projects created.</h2>
        <p>Start by creating a new project.</p>
      </>
    ) : (
      <>
        <h2>No projects assigned.</h2>
        <p>Please ask an administrator to give you access.</p>
      </>
    );
  }

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
    <div className="container">
      <h1>Projects Page</h1> </div>
      {user?.role === RolesEnum.administrator && (
        <div className="container">
          <Link to="/create-project">
            <button>Create New Project</button>
          </Link>
        </div>
      )}
      <div>
        {projects.length
          ? projects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))
          : renderMessageEmptyProjects(user!.role)}
      </div>
    </>
  );
}
