import { UserResponse } from "../../types";

export const setLocalStorage = (result: UserResponse) => {
  localStorage.setItem("token", result.token);
  localStorage.setItem("role", result.role);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const getUser = (): UserResponse => {
  const user = {
    token: localStorage.getItem("token"),
    role: localStorage.getItem("role"),
  } as UserResponse;
  return user;
};

export const removeUser = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
};

export const clearStorage = () => {
  localStorage.clear();
};
