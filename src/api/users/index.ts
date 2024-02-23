import { mockUsers } from "../../db";
import { User } from "../../types";

export function getUsers(): Promise<User[]> {
  return new Promise((resolve, reject) => {
    resolve(mockUsers), reject("An error occurred");
  });
}
