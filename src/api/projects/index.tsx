import { CreateProjectDTO, Project } from "../../types";
import httpClient from "../httpClient";

const PROJECTS_ROUTE = "/project";

export async function getProjectsRequest(): Promise<Project[]> {
  return (await httpClient.get(`${PROJECTS_ROUTE}/all`)).data;
}

export async function createProject(data: CreateProjectDTO): Promise<void> {
  await httpClient.post(`${PROJECTS_ROUTE}/create`, data);
}
