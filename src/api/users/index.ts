import { LoginDTO, RegisterDTO, User, UserResponse } from "../../types";
import httpClient from "../httpClient";

const USERS_ROUTE = "/user";

export async function loginRequest(data: LoginDTO): Promise<UserResponse> {
  const result: UserResponse = (
    await httpClient.post(`${USERS_ROUTE}/login`, data)
  ).data;
  return { role: result.role, token: result.token };
}

export async function registerRequest(
  data: RegisterDTO
): Promise<UserResponse> {
  const result: UserResponse = (
    await httpClient.post(`${USERS_ROUTE}/register`, data)
  ).data;
  return { role: result.role, token: result.token };
}

export async function getUsers(): Promise<User[]> {
  return (await httpClient.get(`${USERS_ROUTE}/all`)).data.data as User[];
}
