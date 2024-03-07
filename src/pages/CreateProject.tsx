import { useState } from "react";
import { useNavigate } from "react-router";
import { createProject } from "../api/projects";
import { CreateProjectDTO } from "../types";

const CreateProject = () => {
  const [projectData, setProjectData] = useState<CreateProjectDTO>({
    name: "",
    description: "",
    company: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createProject(projectData);
      navigate("/");
    } catch (error) {
      setError("Project creation failed");
    }
  };

  return (
    <div>
      <h2>Create Project</h2>
      <form onSubmit={handleSubmit}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={projectData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="name">Company: </label>
          <input
            type="text"
            id="company"
            name="company"
            value={projectData.company}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="name">Description: </label>
          <input
            type="text"
            id="description"
            name="description"
            value={projectData.description}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Create Project</button>
      </form>
    </div>
  );
};

export default CreateProject;
