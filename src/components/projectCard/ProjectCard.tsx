import { useNavigate } from "react-router-dom";
import { Project } from "../../types";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const navigate = useNavigate();

  return (
    <div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <button
        onClick={() =>
          navigate(`/project-details/${project.id}`, {
            state: project,
          })
        }
      >
        Details
      </button>
    </div>
  );
}
