export type User = {
  _id: string;
  name: string;
  email: string;
  role: RolesEnum;
  projects?: UserProjectData[];
};

export type ReportResponse = {
  description: string;
  project_id: string;
  tester: UserIdAndName;
  severity: string;
  status: string;
  stakeholder_responsible: UserIdAndName;
  dev_responsible: UserIdAndName;
  media: {
    image: string[];
    video: string[];
  };
};

export type BugReportCreateDTO = {
  description: string;
  projectId: string;
  tester: UserIdAndName;
};

export type CreateProjectDTO = {
  name: string;
  description: string;
  company: string;
};

type UserIdAndName = {
  user_id: string;
  user_name: string;
};

export type LoginDTO = {
  name: string;
  password: string;
};

export type RegisterDTO = {
  name: string;
  email: string;
  password: string;
  role: RolesEnum;
};

export enum RolesEnum {
  tester = "tester",
  developer = "developer",
  stakeholder = "stakeholder",
  administrator = "administrator",
}

export type UserResponse = {
  userData?: User;
  role?: RolesEnum;
  token: string;
};

export type UserProjectData = {
  project_id: string;
  project_name: string;
};

export type Project = {
  _id: string;
  name: string;
  description: string;
  company: string;
  users: ProjectUser[];
  reports: string[];
};

export type ProjectUser = {
  user_id: string;
  user_name: string;
  _id: string;
};
