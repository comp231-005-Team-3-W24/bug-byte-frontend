import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Project, RolesEnum } from "../../types";
import "./ProjectDetails.css";

export default function ProjectDetails() {
  const { user } = useAuth();
  const project: Project = useLocation().state;
  return (
    <div className="card1">
      <div className="card-content">
        <h1>{project.name}</h1>
        <p className="style-description">Description: {project.description}</p>
        <p className="style-company">Company: {project.company}</p>
        {user!.role == RolesEnum.tester && (
          <button className="action-button">
            <Link to={"/create-bug-report"} state={project._id}>
              Create Bug Report
            </Link>
          </button>
        )}
      </div>
      <div className="card-footer">
        <button className="action-button">
          <Link to={"/bug-reports"} state={project._id}>
            View Bug Reports
          </Link>
        </button>
      </div>
    </div>
  );
}
