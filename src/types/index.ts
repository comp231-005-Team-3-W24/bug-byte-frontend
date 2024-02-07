export type User = {
  _id: string;
  userName: string;
};

export type Project = {
  _id: string;
  name: string;
  description: string;
  company: string;
  users: User[];
  reportsId: string[];
};
