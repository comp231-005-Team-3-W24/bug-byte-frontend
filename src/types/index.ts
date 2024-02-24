export type User = {
  id: string;
  name: string;
  email: string;
  accessToken?: string;
  role: "tester" | "developer" | "stakeholder" | "admin";
};

export type BugReportCreateDTO = {
  description: string;
  projectId: string;
  tester: Tester;
}

type Tester = {
  id: string;
  name: string
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



export type Project = {
  id: string;
  name: string;
  description: string;
  company: string;
  usersId: string[];
  reportsId: string[];
};
