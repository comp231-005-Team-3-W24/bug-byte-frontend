import { useLocation } from "react-router";
import { BugReportResponse } from "../../types";

export default function BugReportDetails() {
  const bugReport: BugReportResponse = useLocation().state;

  return (
    <>
      <h1>Bug Report Details</h1>
      <div>
        <h3>{bugReport.description}</h3>
        <p>Tester: {bugReport.tester.user_name}</p>
        <p>
          Stakeholder:{" "}
          {bugReport.stakeholder_responsible?.user_name ??
            "No stakeholder assigned"}
        </p>
        <p>
          Developer:{" "}
          {bugReport.dev_responsible?.user_name ?? "No developer assigned"}
        </p>
        <p>Status: {bugReport.status}</p>
        <p>Severity: {bugReport.severity ?? "No severity assigned"}</p>
        <p>Images:</p>
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
        <p>Video:</p>
        {bugReport.media.video.length ? (
          bugReport.media.video.map((url) => (
            <div key={url}>
              <a href={url} target="_blank">
                <video width="320" height="240" autoPlay muted>
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
