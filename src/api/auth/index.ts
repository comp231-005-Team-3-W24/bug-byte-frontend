import { LoginDTO, RegisterDTO, User } from "../../types";

const mockUserResponse: User = {
  id: "dsgbf2349023j",
  name: "John Doe",
  email: "email@mail.com",
  accessToken: "sklhfshglkdsgdf",
  role: "admin",
};

export function loginRequest(data: LoginDTO): Promise<User> {
  console.log(data);
  return new Promise((resolve, reject) => {
    resolve(mockUserResponse), reject("An error occurred");
  });
}

export function registerRequest(data: RegisterDTO): Promise<User> {
  console.log(data);
  return new Promise((resolve, reject) => {
    resolve(mockUserResponse), reject("An error occurred");
  });
}
