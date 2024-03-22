import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { BugReportResponse, RolesEnum } from "../../types";
import "./BugReportCard.css";

type BugReportCardProps = {
  bugReport: BugReportResponse;
};

export default function BugReportCard({ bugReport }: BugReportCardProps) {
  const { user } = useAuth();
  return (
    <>
    <div className="bug-report-details">
      <p className="styling">Description: {bugReport.description}</p>
      <p className="styling">Tester: {bugReport.tester.user_name}</p>
      <p className="styling">Status: {bugReport.status}</p>
      {bugReport.severity && <p className="styling">Severity: {bugReport.severity}</p>}
      <div>
        <div className="button-container">
        <button className="style-button">
          <Link to={`/bug-reports/details/${bugReport._id}`} state={bugReport}>
            Details
          </Link>
        </button>
        {(user?.role == RolesEnum.stakeholder ||
          user?.role == RolesEnum.developer) && (
          <button className="style-button">
            <Link to={`/bug-reports/update/${bugReport._id}`} state={bugReport}>
              Update
            </Link>
          </button>
        )}
      </div>
      </div>
      </div>
    </>
  );
}
