import { useLocation } from "react-router";
import { BugReportResponse } from "../../types";
import "./BugReportDetails.css"

export default function BugReportDetails() {
  const bugReport: BugReportResponse = useLocation().state;

  return (
    <>
      <h1 className="style-BugReportDetails">Bug Report Details</h1>
    <div className="card1">      
        <h3>{bugReport.description}</h3>
        <p className="styling-BugReportDetails">Tester: {bugReport.tester.user_name}</p>
        <p className="styling-BugReportDetails">
          Stakeholder:{" "}
          {bugReport.stakeholder_responsible?.user_name ??
            "No stakeholder assigned"}
        </p>
        <p className="styling-BugReportDetails">
          Developer:{" "}
          {bugReport.dev_responsible?.user_name ?? "No developer assigned"}
        </p>
        <p className="styling-BugReportDetails">Status: {bugReport.status}</p>
        <p className="styling-BugReportDetails">Severity: {bugReport.severity ?? "No severity assigned"}</p>
        <p className="styling-BugReportDetails">Images:</p>
        {bugReport.media.image.length ? (
          bugReport.media.image.map((url) => (
            <div key={url}>
              <a href={url} target="_blank">
                <img src={url} />
              </a>
            </div>
          ))
        ) : (
          <p>There are no images for this bug report</p>
        )}
        <p className="styling-BugReportDetails">Video:</p>
        {bugReport.media.video.length ? (
          bugReport.media.video.map((url) => (
            <div key={url}>
              <a href={url} target="_blank">
                <video width="305" height="240" autoPlay muted>
                  <source src={url} type="video/mp4" />
                </video>
              </a>
            </div>
          ))
        ) : (
          <p>There are no videos for this bug report</p>
        )}
      </div>
      </>  
  );
}
