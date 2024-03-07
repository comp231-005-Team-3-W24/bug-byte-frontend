import { projects } from "../../db";
import { CreateProjectDTO, Project } from "../../types";
import httpClient from "../httpClient";

const PROJECTS_ROUTE = "/project";

export function projectByUserIdRequest(id: string): Promise<Project[]> {
  return new Promise((resolve, reject) => {
    const result = projects.filter(({ usersId }) => usersId.includes(id));
    resolve(result), reject("An error occurred");
  });
}

export function getProjectsRequest(): Promise<Project[]> {
  return new Promise((resolve, reject) => {
    resolve(projects), reject("An error occurred");
  });
}

export async function createProject(data: CreateProjectDTO): Promise<void> {
  await httpClient.post(`${PROJECTS_ROUTE}/create`, data);
}
