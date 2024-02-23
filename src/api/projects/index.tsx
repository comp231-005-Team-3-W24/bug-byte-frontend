import { projects } from "../../db";
import { Project } from "../../types";

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
