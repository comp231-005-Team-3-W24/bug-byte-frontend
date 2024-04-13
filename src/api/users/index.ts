import { LoginDTO, RegisterDTO, User } from "../../types";
import httpClient from "../httpClient";

const USERS_ROUTE = "/user";

export async function loginRequest(data: LoginDTO): Promise<User> {
  const result = (await httpClient.post(`${USERS_ROUTE}/login`, data)).data;
  return result.data as User;
}

export async function registerRequest(data: RegisterDTO): Promise<User> {
  const result = (await httpClient.post(`${USERS_ROUTE}/register`, data)).data;
  return result.data as User;
}

export async function getUsers(): Promise<User[]> {
  return (await httpClient.get(`${USERS_ROUTE}/all`)).data.data as User[];
}
