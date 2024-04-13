import {
  BugReportCreateDTO,
  BugReportResponse,
  ReportResponse,
  ReportStatusEnum,
  assignDeveloperToReportDTO,
  assignStakeholderToReportDTO,
} from "../../types";
import httpClient from "../httpClient";

const REPORTS_ROUTE = "/report";

export async function getBugReportsFromProject(
  projectId: string
): Promise<BugReportResponse[]> {
  const result: BugReportResponse[] = (
    await httpClient.get(`${REPORTS_ROUTE}/reportByProjectId/${projectId}`)
  ).data;
  return result;
}

export async function createReport(
  data: BugReportCreateDTO
): Promise<ReportResponse> {
  const result: ReportResponse = (
    await httpClient.post(`${REPORTS_ROUTE}/create`, data)
  ).data;
  return result;
}

export async function uploadMedia(
  reportId: string,
  formData: FormData
): Promise<void> {
  await httpClient.post(`${REPORTS_ROUTE}/upload-media/${reportId}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}

export async function assignStakeholder(
  reportId: string,
  data: assignStakeholderToReportDTO
) {
  await httpClient.put(
    `${REPORTS_ROUTE}/updateStakeholderResponsible/${reportId}`,
    data
  );
}

export async function assignDeveloper(
  reportId: string,
  data: assignDeveloperToReportDTO
) {
  await httpClient.put(
    `${REPORTS_ROUTE}/updateDevResponsible/${reportId}`,
    data
  );
}

export async function updateBugReportStatus(
  reportId: string,
  status: ReportStatusEnum
) {
  await httpClient.put(`${REPORTS_ROUTE}/updateStatus/${reportId}`, {
    status,
  });
}
