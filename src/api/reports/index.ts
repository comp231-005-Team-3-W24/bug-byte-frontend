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
