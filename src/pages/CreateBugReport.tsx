import React, { ChangeEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { createReport, uploadMedia } from "../api/reports";
import { useAuth } from "../hooks/useAuth";
import { BugReportCreateDTO, ReportStatusEnum } from "../types";
import "./CreateBugReport.css";

const CreateBugReport: React.FC = () => {
  const [bugReport, setBugReport] = useState({
    description: "",
  });
  const [files, setFiles] = useState<FileList | null>(null);

  const { user } = useAuth();
  const project_id: string = useLocation().state;
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBugReport({ ...bugReport, [name]: value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFiles(e.target.files);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const bugReportData: BugReportCreateDTO = {
        description: bugReport.description,
        project_id,
        tester: {
          user_id: user!.id,
          user_name: user!.name,
        },
        status: ReportStatusEnum.pending,
      };

      const createdReport = await createReport(bugReportData);

      if (!files) {
        navigate("/bug-reports", { state: { projectId: project_id } });
      } else if (createdReport) {
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
          formData.append(`file-${i + 1}`, files[i]);
        }
        await uploadMedia(createdReport._id, formData);
      }
      navigate("/bug-reports", { state: project_id });
    } catch (error) {
      console.error("Error creating report:", error);
    }
  };

  return (
    <div className="card1">
      <h2 className="stylename">Create Bug Report</h2>
      <form onSubmit={handleSubmit}>
        <div className="card-content">
          <label className="styledescription" htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={bugReport.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="card-content">
          <label className="styledescription" htmlFor="media">Select Media (".png, .jpg, or .mp4"):</label>
          <input
            type="file"
            onChange={handleFileChange}
            multiple
            name="media"
            accept=".png, .jpg, .mp4"
          />
          {files && (
            <div>
              <p>Selected files:</p>
              <ul>
                {Array.from(files).map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="card-footer">
          <button className="stylebutton" type="submit">Submit Bug Report</button>
        </div>
      </form>
    </div>
  );
};

export default CreateBugReport;
