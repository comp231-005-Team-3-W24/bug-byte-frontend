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
import { Project } from "./types";
export const projects: Project[] = [
  {
    id: "1",
    name: "Project X",
    description: "First Project",
    company: "Company A",
    users: [
      { id: "1", userName: "Amell" },
      { id: "1", userName: "Leonardo" },
    ],
    reportsId: ["1"],
  },
  {
    id: "2",
    name: "Project Y",
    description: "Second Project",
    company: "Company B",
    users: [
      { id: "1", userName: "Amell" },
      { id: "1", userName: "Leonardo" },
    ],
    reportsId: ["2"],
  },
  {
    id: "3",
    name: "Project Z",
    description: "Third Project",
    company: "Company C",
    users: [
      { id: "1", userName: "Amell" },
      { id: "1", userName: "Leonardo" },
    ],
    reportsId: ["1"],
  },
];
