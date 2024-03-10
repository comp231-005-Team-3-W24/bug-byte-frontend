import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Project, RolesEnum } from "../types";

export default function ProjectDetails() {
  const { user } = useAuth();
  const project: Project = useLocation().state;
  return (
    <div>
      <h1>{project.name}</h1>
      <p>Description: {project.description}</p>
      <p>Company: {project.company}</p>
      {user!.role !== RolesEnum.administrator && (
        <button>
          <Link to={"/bug-report"} state={project._id}>
            Create Bug Report
          </Link>
        </button>
      )}
    </div>
  );
}
