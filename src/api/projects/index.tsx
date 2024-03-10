import { CreateProjectDTO, Project } from "../../types";
import httpClient from "../httpClient";

const PROJECTS_ROUTE = "/project";

export async function getProjectsRequest(): Promise<Project[]> {
  return (await httpClient.get(`${PROJECTS_ROUTE}/all`)).data;
}

export async function getProjectsByUserId(): Promise<Project[]> {
  return (await httpClient.get(`${PROJECTS_ROUTE}/allByUser`)).data;
}

export async function createProject(data: CreateProjectDTO): Promise<void> {
  await httpClient.post(`${PROJECTS_ROUTE}/create`, data);
}

export async function assignUserToProjectRequest(
  projectId: string,
  userId: string
): Promise<void> {
  await httpClient.put(`${PROJECTS_ROUTE}/updateUsers/${projectId}`, {
    userId,
  });
}

export async function removeUserFromProjectRequest(
  userId: string,
  projectId: string
) {
  await httpClient.put(
    `${PROJECTS_ROUTE}/removeUserFromProject/${userId}/${projectId}`,
    { userId: userId, projectId: projectId }
  );
}
