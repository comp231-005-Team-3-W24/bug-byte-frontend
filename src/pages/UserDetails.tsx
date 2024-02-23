import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getProjectsRequest, projectByUserIdRequest } from "../api/projects";
import { Project, User } from "../types";

export function UserDetails() {
  const user: User = useLocation().state;
  const [userProjects, setUserProjects] = useState<Project[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getProjectsRequest()
      .then((res) => setProjects(res))
      .catch((err) => console.error(err));

    projectByUserIdRequest(user.id)
      .then((res) => setUserProjects(res))
      .catch((err) => console.error(err));
  }, [user]);

  function removeUserFromProject(projectId: string) {
    alert(`User id ${user.id} removed from project id ${projectId}`);
  }

  function addUserToProject(projectId: string) {
    alert(`User id ${user.id} added to project id ${projectId}`);
  }

  return (
    <>
      <h1>User Details {user.id}</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <div>
        <h2>Assigned Projects</h2>
        {userProjects.map((project) => (
          <div>
            <p>{project.name}</p>
            <button onClick={() => removeUserFromProject(project.id)}>
              Remove User
            </button>
          </div>
        ))}
      </div>
      <div>
        <h2>Available Projects</h2>
        {projects.map((project) => (
          <div>
            <p>{project.name}</p>
            <button onClick={() => addUserToProject(project.id)}>
              Add User
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
