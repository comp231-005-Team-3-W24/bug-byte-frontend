import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import {
  assignUserToProjectRequest,
  getProjectsRequest,
  removeUserFromProjectRequest,
} from "../api/projects";
import { Project, ProjectUser, User } from "../types";

export function UserDetails() {
  const user: User = useLocation().state;
  const [projects, setProjects] = useState<Project[]>([]);
  const [userProjects, setUserProjects] = useState<Project[]>([]);

  async function getProjects() {
    try {
      const result = await getProjectsRequest();
      const userProjects = [] as Project[];
      const unasignedProjects = [] as Project[];

      result.forEach((project) => {
        if (isUserAssignedToProject(project.users, user.id)) {
          userProjects.push(project);
        } else {
          unasignedProjects.push(project);
        }
      });
      setUserProjects(userProjects);
      setProjects(unasignedProjects);
    } catch (error) {
      console.error(error);
    }
  }

  function isUserAssignedToProject(
    projectUsers: ProjectUser[],
    userId: string
  ) {
    return projectUsers.find((project) => project.user_id === userId);
  }

  useEffect(() => {
    getProjects();
  }, []);

  async function removeUserFromProject(projectId: string) {
    await removeUserFromProjectRequest(user.id, projectId);
    await getProjects();
  }

  async function addUserToProject(projectId: string) {
    await assignUserToProjectRequest(projectId, user.id);
    await getProjects();
  }

  function renderButton(
    projectUsers: ProjectUser[],
    projectId: string
  ): JSX.Element {
    return isUserAssignedToProject(projectUsers, user.id) ? (
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
          {userProjects.length ? (
            userProjects.map((project) => (
              <div key={project._id}>
                <p>{project.name}</p>
                <button onClick={() => removeUserFromProject(project._id)}>
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
                {renderButton(project.users, project._id)}
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
