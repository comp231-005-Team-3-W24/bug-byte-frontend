import { User } from "../../types";

export const setLocalStorage = (user: User) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getToken = () => {
  return getUser()?.token;
};

export const getUser = (): User => {
  const user = JSON.parse(localStorage.getItem("user")!) as User;
  return user;
};

export const removeUser = () => {
  localStorage.removeItem("user");
};

export const clearStorage = () => {
  localStorage.clear();
};
