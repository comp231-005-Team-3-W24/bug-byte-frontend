import Navbar from "../components/Navbar";

type User = {
  _id: string;
  userName: string;
};

type Project = {
  _id: string;
  name: string;
  description: string;
  company: string;
  users: User[];
  reportsId: string[];
};

export default function Projects() {
  const projects: Project[] = [
    {
      _id: "1",
      name: "Project X",
      description: "First Project",
      company: "Company A",
      users: [
        { _id: "1", userName: "Amell" },
        { _id: "1", userName: "Leonardo" },
      ],
      reportsId: ["1"],
    },
    {
      _id: "2",
      name: "Project Y",
      description: "Second Project",
      company: "Company B",
      users: [
        { _id: "1", userName: "Amell" },
        { _id: "1", userName: "Leonardo" },
      ],
      reportsId: ["2"],
    },
    {
      _id: "3",
      name: "Project Z",
      description: "Third Project",
      company: "Company C",
      users: [
        { _id: "1", userName: "Amell" },
        { _id: "1", userName: "Leonardo" },
      ],
      reportsId: ["1"],
    },
  ];

  return (
    <>
      <Navbar />
      <h1>Projects Page</h1>
      <div>
        {projects.map((project) => (
          <div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <button onClick={() => alert(project._id)}>Details</button>
          </div>
        ))}
      </div>
    </>
  );
}
