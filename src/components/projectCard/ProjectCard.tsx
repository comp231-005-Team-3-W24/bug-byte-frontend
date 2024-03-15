import { useNavigate } from "react-router-dom";
import { Project } from "../../types";
import "./ProjectCard.css";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const navigate = useNavigate();

  return (
    <div className="card-container">
      <h3>Name: {project.name}</h3>
      <p>Description: {project.description}</p>
      <button
        onClick={() =>
          navigate(`/project-details/${project._id}`, {
            state: project,
          })
        }
      >
        Details
      </button>
    </div>
  );
}
