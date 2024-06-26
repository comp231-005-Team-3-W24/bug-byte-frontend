export type ReportResponse = {
  _id: string;
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

export enum ReportStatusEnum {
  pending = "Pending",
  accepted = "Accepted",
  rejected = "Rejected",
  inProgress = "In Progress",
  completed = "Completed",
}

export enum ReportsSeverityEnum {
  low = "Low",
  medium = "Medium",
  high = "High",
}

export type BugReportResponse = {
  _id: string;
  description: string;
  project_id: string;
  tester: UserIdAndName;
  severity?: ReportsSeverityEnum;
  status: ReportStatusEnum;
  stakeholder_responsible?: UserIdAndName;
  dev_responsible?: UserIdAndName;
  media: {
    image: string[];
    video: string[];
  };
};

export type BugReportCreateDTO = {
  description: string;
  project_id: string;
  tester: UserIdAndName;
  status: ReportStatusEnum;
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

export type User = {
  id: string;
  name: string;
  email: string;
  projects: UserProjectData[];
  role: RolesEnum;
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
};

export type assignStakeholderToReportDTO = {
  stakeholderId: string;
  status: ReportStatusEnum;
  severity: ReportsSeverityEnum;
};

export type assignDeveloperToReportDTO = {
  devId: string;
}
