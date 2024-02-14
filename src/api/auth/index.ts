import { AuthResponse, LoginDTO, RegisterDTO } from "../../types";

const mockAuthResponse: AuthResponse = {
  accessToken: "sklhfshglkdsgdf",
  role: "user",
};

export function loginRequest(data: LoginDTO): Promise<AuthResponse> {
  console.log(data);
  return new Promise((resolve, reject) => {
    resolve(mockAuthResponse), reject("An error occurred");
  });
}

export function registerRequest(data: RegisterDTO): Promise<AuthResponse> {
  console.log(data);
  return new Promise((resolve, reject) => {
    resolve(mockAuthResponse), reject("An error occurred");
  });
}
