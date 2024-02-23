// let projects = {
//     _id: "projectid",
//     name: "project name",
//     description: "project description",
//     company: "company name",
//     users: [
//       { user_id: "user_1", user_name: "user name" },
//       { user_id: "user_2", user_name: "another user name" },
//     ],
//     reports: ["report_id_1", "report_id_2"],

//   };
import { Project, User } from "./types";

export const mockUsers: User[] = [
  { id: "1", name: "Leonardo", email: "leonardo@mail.com", role: "tester" },
  { id: "2", name: "Amell", email: "amell@mail.com", role: "admin" },
  { id: "3", name: "Yza", email: "yza@mail.com", role: "admin" },
  { id: "4", name: "Jerick", email: "jerick@mail.com", role: "stakeholder" },
];

export const projects: Project[] = [
  {
    id: "1",
    name: "Project X",
    description: "First Project",
    company: "Company A",
    usersId: [mockUsers[0].id, mockUsers[1].id],
    reportsId: ["1"],
  },
  {
    id: "2",
    name: "Project Y",
    description: "Second Project",
    company: "Company B",
    usersId: [mockUsers[2].id, mockUsers[3].id],
    reportsId: ["2"],
  },
  {
    id: "3",
    name: "Project Z",
    description: "Third Project",
    company: "Company C",
    usersId: [mockUsers[0].id, mockUsers[2].id],
    reportsId: ["1"],
  },
];
