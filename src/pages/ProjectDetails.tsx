import { useLocation } from "react-router-dom";
import { Project } from "../types";

export default function ProjectDetails() {
  const project: Project = useLocation().state;
  
  return (
    <div>
        <h1>{project.name}</h1>
        <p>Description: {project.description}</p>
        <p>Company: {project.company}</p>
        <button onClick={() => alert('Open bug report form')}>Create Bug Report</button>
    </div>
    
  );
}
