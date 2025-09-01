import { apiClient } from './api';

// Type definitions based on your OpenAPI spec
export interface Template {
  TemplateId: number;
  Name: string;
  Description: string;
}

export interface TemplateCreate {
  Name: string;
  Description: string;
}

export interface TemplateUpdate {
  TemplateId: number;
  Name: string;
  Description: string;
}

export interface TemplateDataType {
  TemplateDataTypeId: number;
  Name: string;
}

export interface TemplateDataTypeCreate {
  Name: string;
}

export interface TemplateDataTypeUpdate {
  TemplateDataTypeId: number;
  Name: string;
}

export interface TemplateField {
  TemplateFieldsId: number;
  TemplateId: number;
  FieldName: string;
  TemplateDataTypeId: number;
}

export interface TemplateFieldCreate {
  TemplateId: number;
  FieldName: string;
  TemplateDataTypeId: number;
}

export interface TemplateFieldUpdate {
  TemplateFieldsId: number;
  TemplateId: number;
  FieldName: string;
  TemplateDataTypeId: number;
}

// Template API service
export const templateService = {
  // Templates
  getAllTemplates: () => apiClient.get<Template[]>('/Templates/GetAll'),
  getTemplateById: (id: number) => apiClient.get<Template>(`/Templates/GetById/${id}`),
  createTemplate: (data: TemplateCreate) => apiClient.post<Template>('/Templates/Create', data),
  updateTemplate: (data: TemplateUpdate) => apiClient.put<Template>('/Templates/Update', data),
  deleteTemplate: (id: number) => apiClient.delete<void>(`/Templates/${id}`),

  // Template Data Types
  getAllTemplateDataTypes: () => apiClient.get<TemplateDataType[]>('/TemplateDataTypes/GetAll'),
  getTemplateDataTypeById: (id: number) => apiClient.get<TemplateDataType>(`/TemplateDataTypes/GetById/${id}`),
  createTemplateDataType: (data: TemplateDataTypeCreate) => apiClient.post<TemplateDataType>('/TemplateDataTypes/Create', data),
  updateTemplateDataType: (data: TemplateDataTypeUpdate) => apiClient.put<TemplateDataType>('/TemplateDataTypes/Update', data),
  deleteTemplateDataType: (id: number) => apiClient.delete<void>(`/TemplateDataTypes/${id}`),

  // Template Fields
  getAllTemplateFields: () => apiClient.get<TemplateField[]>('/TemplateFields/GetAll'),
  getTemplateFieldById: (id: number) => apiClient.get<TemplateField>(`/TemplateFields/GetById/${id}`),
  createTemplateField: (data: TemplateFieldCreate) => apiClient.post<TemplateField>('/TemplateFields/Create', data),
  updateTemplateField: (data: TemplateFieldUpdate) => apiClient.put<TemplateField>('/TemplateFields/Update', data),
  deleteTemplateField: (id: number) => apiClient.delete<void>(`/TemplateFields/${id}`),
};