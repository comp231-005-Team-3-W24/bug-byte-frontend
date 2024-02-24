<<<<<<< HEAD
import { useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
=======
import { Link, useLocation } from "react-router-dom";
>>>>>>> amell6
import { Project } from "../types";

export default function ProjectDetails() {
  const { user } = useAuth();
  const project: Project = useLocation().state;
<<<<<<< HEAD

  return (
    <div>
      <h1>{project.name}</h1>
      <p>Description: {project.description}</p>
      <p>Company: {project.company}</p>
      {user!.role == "tester" && (
        <button onClick={() => alert("Open bug report form")}>
          Create Bug Report
        </button>
      )}
=======
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
>>>>>>> amell6
    </div>
  );
}
