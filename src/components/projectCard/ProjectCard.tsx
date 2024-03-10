import { useNavigate } from "react-router-dom";
import { Project } from "../../types";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const navigate = useNavigate();

  return (
    <div>
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
