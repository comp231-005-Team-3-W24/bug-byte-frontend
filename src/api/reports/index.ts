import { BugReportCreateDTO, ReportResponse } from "../../types";
import httpClient from "../httpClient";

const REPORTS_ROUTE = "/report";

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
