import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import {
  assignDeveloper,
  assignStakeholder,
  updateBugReportStatus,
} from "../../api/reports";
import { useAuth } from "../../hooks/useAuth";
import {
  BugReportResponse,
  ReportStatusEnum,
  ReportsSeverityEnum,
  RolesEnum,
  assignStakeholderToReportDTO,
} from "../../types";
import "./BugReportUpdate.css";

export default function BugReportUpdate() {
  const bugReport: BugReportResponse = useLocation().state;
  const { user } = useAuth();
  const [severity, setSeverity] = useState(ReportsSeverityEnum.low);
  const navigate = useNavigate();

  const handleStakeholderAction = async (status: ReportStatusEnum) => {
    const data: assignStakeholderToReportDTO = {
      stakeholderId: user!.id!,
      status,
      severity,
    };

    await assignStakeholder(bugReport._id, data);
    navigate("/bug-reports", { state: bugReport.project_id });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSeverity(e.target.value as ReportsSeverityEnum);
  };

  const renderStakeholder = () => {
    return (
      <>
        {bugReport.status == ReportStatusEnum.pending ? (
          <div>
            <label htmlFor="selectInput"></label>
            <select
              id="selectInput"
              value={severity}
              onChange={handleSelectChange}
            >
              <option value={ReportsSeverityEnum.low}>Low</option>
              <option value={ReportsSeverityEnum.medium}>Medium</option>
              <option value={ReportsSeverityEnum.high}>High</option>
            </select>
            <button
              onClick={() => handleStakeholderAction(ReportStatusEnum.accepted)}
            >
              Accept
            </button>
            <button
              onClick={() => handleStakeholderAction(ReportStatusEnum.rejected)}
            >
              Reject
            </button>
          </div>
        ) : (
          <p>There are no actions needed for this bug report now.</p>
        )}
      </>
    );
  };

  const handleDeveloperAction = async (status?: ReportStatusEnum) => {
    if (status) {
      await updateBugReportStatus(bugReport._id, status);
    } else {
      await assignDeveloper(bugReport._id, { devId: user!.id });
    }
    navigate("/bug-reports", { state: bugReport.project_id });
  };

  const renderDeveloper = () => {
    return (
      <>
        {bugReport.status === ReportStatusEnum.accepted ? (
          <div>
            <p>This bug report is ready to be assigned to a developer.</p>
            <button onClick={() => handleDeveloperAction()}>
              Assign to me
            </button>
          </div>
        ) : bugReport.status === ReportStatusEnum.inProgress ? (
          <button 
            onClick={() => handleDeveloperAction(ReportStatusEnum.completed)}
          >
            Completed
          </button>
        ) : (
          <p>There are no actions needed for this bug report now.</p>
        )}
      </>
    );
  };

  return (
    <div className="new-container">
      <div className="new-card">
      <h1 className="styling-tittle">Update Bug Report</h1>
      {user?.role === RolesEnum.stakeholder && renderStakeholder()}
      {user?.role === RolesEnum.developer && renderDeveloper()}
    </div>
    </div>
  );
}
