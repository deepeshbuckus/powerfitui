import { apiClient } from './api';

// Type definitions for Import-related entities
export interface ImportHistory {
  ImportHistoryId: number;
  ImportDate: string;
  FileName: string;
  CompanyId: number;
  TemplateId: number;
}

export interface ImportHistoryCreate {
  ImportDate: string;
  FileName: string;
  CompanyId: number;
  TemplateId: number;
}

export interface ImportHistoryUpdate {
  ImportHistoryId: number;
  ImportDate: string;
  FileName: string;
  CompanyId: number;
  TemplateId: number;
}

export interface ImportDetails {
  ImportDetailsId: number;
  ImportHistoryId: number;
  ProcessStepId: number;
  RawJSON: string;
}

export interface ImportDetailsCreate {
  ImportHistoryId: number;
  ProcessStepId: number;
  RawJSON: string;
}

export interface ImportDetailsUpdate {
  ImportDetailsId: number;
  ImportHistoryId: number;
  ProcessStepId: number;
  RawJSON: string;
}

export interface ProcessStep {
  ProcessStepId: number;
  Name: string;
  Description: string;
}

export interface ProcessStepCreate {
  Name: string;
  Description: string;
}

export interface ProcessStepUpdate {
  ProcessStepId: number;
  Name: string;
  Description: string;
}

// Import API service
export const importService = {
  // Import History
  getAllImportHistory: () => apiClient.get<ImportHistory[]>('/ImportHistory/GetAll'),
  getImportHistoryById: (id: number) => apiClient.get<ImportHistory>(`/ImportHistory/GetById/${id}`),
  createImportHistory: (data: ImportHistoryCreate) => apiClient.post<ImportHistory>('/ImportHistory/Create', data),
  updateImportHistory: (data: ImportHistoryUpdate) => apiClient.put<ImportHistory>('/ImportHistory/Update', data),
  deleteImportHistory: (id: number) => apiClient.delete<void>(`/ImportHistory/${id}`),

  // Import Details
  getAllImportDetails: () => apiClient.get<ImportDetails[]>('/ImportDetails/GetAll'),
  getImportDetailsById: (id: number) => apiClient.get<ImportDetails>(`/ImportDetails/GetById/${id}`),
  createImportDetails: (data: ImportDetailsCreate) => apiClient.post<ImportDetails>('/ImportDetails/Create', data),
  updateImportDetails: (data: ImportDetailsUpdate) => apiClient.put<ImportDetails>('/ImportDetails/Update', data),
  deleteImportDetails: (id: number) => apiClient.delete<void>(`/ImportDetails/${id}`),

  // Process Steps
  getAllProcessSteps: () => apiClient.get<ProcessStep[]>('/ProcessStep/GetAll'),
  getProcessStepById: (id: number) => apiClient.get<ProcessStep>(`/ProcessStep/GetById/${id}`),
  createProcessStep: (data: ProcessStepCreate) => apiClient.post<ProcessStep>('/ProcessStep/Create', data),
  updateProcessStep: (data: ProcessStepUpdate) => apiClient.put<ProcessStep>('/ProcessStep/Update', data),
  deleteProcessStep: (id: number) => apiClient.delete<void>(`/ProcessStep/${id}`),
};