import { projects } from "../db";

export default function Projects() {
  return (
    <>
      <h1>Projects Page</h1>
      <div>
        {projects.map((project) => (
          <div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <button onClick={() => alert(project._id)}>Details</button>
          </div>
        ))}
      </div>
    </>
  );
}
