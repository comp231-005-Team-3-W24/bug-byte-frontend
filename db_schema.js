// // User entity
// let User = {
//   _id: "userid",
//   name: "user name",
//   email: "email",
//   password: "password",
//   projects: [
//     { project_id: "project_1", project_name: "First Project" },
//     { project_id: "project_2", project_name: "Second Project" },
//   ],
//   role: "TESTER",
//   // projects will reference each project id and display the name
//   // when the user selects the project, we will query the complete info
//   // using the project id
// };

// let Project = {
//   _id: "projectid",
//   name: "project name",
//   description: "project description",
//   company: "company name",
//   // array of users (only info that will be used)
//   // when a stakeholder wants to know which users are access to a specific project
//   // we can query by the project id and display the user names
//   // if an auth must be edited, we can do it by the user id
//   users: [
//     { user_id: "user_1", user_name: "user name" },
//     { user_id: "user_2", user_name: "another user name" },
//   ],
//   reports: ["report_id_1", "report_id_2"],
//   // array of report id
//   // since the reports usually will be updated oftenly
//   // (status change, devresponsible, accepted, etc..)
//   // it is better to reference by id insteaf of embedding the value
//   // Usecase: When the user clicks in a project and wants to see his reports
//   // we will query report by project_id and tester.user_id
// };

// let Report = {
//   _id: "report id",
//   description: "report description",
//   project_id: "project_id",
//   tester: { user_id: "user_1", user_name: "user name" },
//   severity: "low", // initially null -> stakeholder sets the severity,
//   status: "", // think about the initial status
//   stakeholder_responsible: { user_id: "user_1", user_name: "user name" },
//   dev_responsible: { user_id: "user_1", user_name: "user name" }, // initially null
//   media: {
//     image: [], // think about format and how to upload/store
//     video: [], // think about format and how to upload/store
//   },
// };
