import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Project, RolesEnum } from "../../types";
import "./ProjectDetails.css";

export default function ProjectDetails() {
  const { user } = useAuth();
  const project: Project = useLocation().state;
  return (
    <>
      <div>
        <h1>{project.name}</h1>
        <p>Description: {project.description}</p>
        <p>Company: {project.company}</p>
        {user!.role == RolesEnum.tester && (
          <button>
            <Link to={"/create-bug-report"} state={project._id}>
              Create Bug Report
            </Link>
          </button>
        )}
      </div>
      <div>
        <button>
          <Link to={"/bug-reports"} state={project._id}>
            View Bug Reports
          </Link>
        </button>
      </div>
    </>
  );
}
