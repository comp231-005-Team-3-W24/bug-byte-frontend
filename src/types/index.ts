export type User = {
  id: string;
  userName: string;
};

export type Project = {
  id: string;
  name: string;
  description: string;
  company: string;
  users: User[];
  reportsId: string[];
};
