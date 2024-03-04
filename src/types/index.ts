export type User = {
  _id: string;
  name: string;
  email: string;
  role: "tester" | "developer" | "stakeholder" | "admin";
};

export type BugReportCreateDTO = {
  description: string;
  projectId: string;
  tester: Tester;
};

type Tester = {
  id: string;
  name: string;
};

export type LoginDTO = {
  name: string;
  password: string;
};

export type RegisterDTO = {
  name: string;
  email: string;
  password: string;
  role: "tester" | "developer" | "stakeholder" | "admin";
};

export type UserResponse = {
  role: "tester" | "developer" | "stakeholder" | "admin";
  token: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  company: string;
  usersId: string[];
  reportsId: string[];
};
