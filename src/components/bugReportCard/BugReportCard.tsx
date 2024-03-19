import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { BugReportResponse, RolesEnum } from "../../types";

type BugReportCardProps = {
  bugReport: BugReportResponse;
};

export default function BugReportCard({ bugReport }: BugReportCardProps) {
  const { user } = useAuth();
  return (
    <>
      <p>Description: {bugReport.description}</p>
      <p>Tester: {bugReport.tester.user_name}</p>
      <p>Status: {bugReport.status}</p>
      {bugReport.severity && <p>Severity: {bugReport.severity}</p>}
      <div>
        <button>
          <Link to={`/bug-reports/details/${bugReport._id}`} state={bugReport}>
            Details
          </Link>
        </button>
        {(user?.role == RolesEnum.stakeholder ||
          user?.role == RolesEnum.developer) && (
          <button>
            <Link to={`/bug-reports/update/${bugReport._id}`} state={bugReport}>
              Update
            </Link>
          </button>
        )}
      </div>
    </>
  );
}
