import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import {
  getProjectsRequest,
  removeUserFromProjectRequest,
} from "../api/projects";
import { Project, User } from "../types";

export function UserDetails() {
  const user: User = useLocation().state;
  const [projects, setProjects] = useState<Project[]>([]);

  async function getProjects() {
    try {
      const result = await getProjectsRequest();
      setProjects(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProjects();
  }, []);

  async function removeUserFromProject(projectId: string) {
    await removeUserFromProjectRequest(user._id, projectId);
    await getProjects();
  }

  function addUserToProject(projectId: string) {
    alert(`User id ${user._id} added to project id ${projectId}`);
  }

  function renderButton(projectId: string): JSX.Element {
    const isUserAssigned = user.projects?.find(
      ({ project_id }) => project_id === projectId
    );
    return isUserAssigned ? (
      <button disabled>User Already Assigned</button>
    ) : (
      <button onClick={() => addUserToProject(projectId)}>Add User</button>
    );
  }

  return (
    <>
      <h1>User Details</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <div>
        <h2>Assigned Projects</h2>
        <div>
          {user.projects!.length ? (
            user.projects!.map((project) => (
              <div key={project.project_id}>
                <h3>{project.project_name}</h3>
                <button
                  onClick={() => removeUserFromProject(project.project_id)}
                >
                  Remove user from project
                </button>
              </div>
            ))
          ) : (
            <p>No projects assigned for this user </p>
          )}
        </div>
      </div>
      <div>
        <h2>Available Projects</h2>
        {projects.length ? (
          projects.map((project) => {
            return (
              <div key={project._id}>
                <p>{project.name}</p>
                {renderButton(project._id)}
              </div>
            );
          })
        ) : (
          <p>No available projects.</p>
        )}
      </div>
    </>
  );
}
