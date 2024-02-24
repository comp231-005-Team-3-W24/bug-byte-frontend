import { Link, useLocation } from "react-router-dom";
import { Project } from "../types";

export default function ProjectDetails() {
  const project: Project = useLocation().state;
  project.id
  return (
    <div>
        <h1>{project.name}</h1>
        <p>Description: {project.description}</p>
        <p>Company: {project.company}</p>
        <button>
        <Link to={'/bug-report'} state={ project.id }>
        Create Bug Report
        </Link>   
        </button>
    </div>
  );
}
