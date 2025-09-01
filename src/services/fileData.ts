import { apiClient } from './api';

export interface FileDataResponse {
  columns: string[];
  rows: Record<string, any>[];
  totalRows: number;
  fileName: string;
}

// Get processed file data by filename
export const getFileData = async (fileName: string): Promise<FileDataResponse> => {
  return apiClient.get<FileDataResponse>(`/api/FileUpload/data/${encodeURIComponent(fileName)}`);
};

// Get file processing status
export const getFileStatus = async (fileName: string): Promise<{status: string, message?: string}> => {
  return apiClient.get<{status: string, message?: string}>(`/api/FileUpload/status/${encodeURIComponent(fileName)}`);
};