import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { getBugReportsFromProject } from "../../api/reports";
import { BugReportResponse } from "../../types";
import BugReportCard from "../bugReportCard/BugReportCard";

export default function BugReport() {
  const [bugReports, setBugReports] = useState<BugReportResponse[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const project_id = useLocation().state;
  const getBugReports = async () => {
    setLoading(true);
    const result = await getBugReportsFromProject(project_id);
    setBugReports(result);
    setLoading(false);
  };

  useEffect(() => {
    try {
      getBugReports();
    } catch (error) {
      setError("An error occurred. Please try again");
    }
  }, []);

  return (
    <>
      <h1>Bug Reports</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading ? (
        <h2>Loading...</h2>
      ) : bugReports.length ? (
        bugReports.map((bugReport) => (
          <BugReportCard key={bugReport._id} bugReport={bugReport} />
        ))
      ) : (
        <h1>No bug reports for this project</h1>
      )}
    </>
  );
}
