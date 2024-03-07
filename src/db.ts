import { Project, User } from "./types";

export const mockUsers: User[] = [
  { _id: "1", name: "Leonardo", email: "leonardo@mail.com", role: "tester" },
  { _id: "2", name: "Amell", email: "amell@mail.com", role: "administrator" },
  { _id: "3", name: "Yza", email: "yza@mail.com", role: "administrator" },
  { _id: "4", name: "Jerick", email: "jerick@mail.com", role: "stakeholder" },
];

export const projects: Project[] = [
  {
    id: "1",
    name: "Project X",
    description: "First Project",
    company: "Company A",
    usersId: [mockUsers[0]._id, mockUsers[1]._id],
    reportsId: ["1"],
  },
  {
    id: "2",
    name: "Project Y",
    description: "Second Project",
    company: "Company B",
    usersId: [mockUsers[2]._id, mockUsers[3]._id],
    reportsId: ["2"],
  },
  {
    id: "3",
    name: "Project Z",
    description: "Third Project",
    company: "Company C",
    usersId: [mockUsers[0]._id, mockUsers[2]._id],
    reportsId: ["1"],
  },
];
