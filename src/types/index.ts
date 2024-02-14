export type User = {
  id: string;
  userName: string;
};

export type LoginDTO = {
  email: string;
  password: string;
};

export type RegisterDTO = {
  name: string;
  email: string;
  password: string;
  role: "tester" | "developer" | "stakeholder" | "admin";
};

export type AuthResponse = {
  accessToken: string;
  role: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  company: string;
  users: User[];
  reportsId: string[];
};
