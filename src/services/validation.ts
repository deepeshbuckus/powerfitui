import { apiClient } from './api';

// Type definitions for Validation-related entities
export interface ValidationRule {
  ValidationRuleId: number;
  TemplateId: number;
  FieldName: string;
  RuleTypeId: number;
  RegularExpression?: string;
  RelatedFieldName?: string;
  FieldRelationRuleId?: number;
}

export interface ValidationRuleCreate {
  TemplateId: number;
  FieldName: string;
  RuleTypeId: number;
  RegularExpression?: string;
  RelatedFieldName?: string;
  FieldRelationRuleId?: number;
}

export interface ValidationRuleUpdate {
  ValidationRuleId: number;
  TemplateId: number;
  FieldName: string;
  RuleTypeId: number;
  RegularExpression?: string;
  RelatedFieldName?: string;
  FieldRelationRuleId?: number;
}

export interface RuleType {
  RuleTypeId: number;
  RuleTypeName: string;
  Description: string;
}

export interface RuleTypeCreate {
  RuleTypeName: string;
  Description: string;
}

export interface RuleTypeUpdate {
  RuleTypeId: number;
  RuleTypeName: string;
  Description: string;
}

export interface FieldRelationRule {
  FieldRelationRuleId: number;
  FieldRelationRuleName: string;
  Description: string;
}

export interface FieldRelationRuleCreate {
  FieldRelationRuleName: string;
  Description: string;
}

export interface FieldRelationRuleUpdate {
  FieldRelationRuleId: number;
  FieldRelationRuleName: string;
  Description: string;
}

// Validation API service
export const validationService = {
  // Validation Rules
  getAllValidationRules: () => apiClient.get<ValidationRule[]>('/ValidationRule/GetAll'),
  getValidationRuleById: (id: number) => apiClient.get<ValidationRule>(`/ValidationRule/GetById/${id}`),
  createValidationRule: (data: ValidationRuleCreate) => apiClient.post<ValidationRule>('/ValidationRule/Create', data),
  updateValidationRule: (data: ValidationRuleUpdate) => apiClient.put<ValidationRule>('/ValidationRule/Update', data),
  deleteValidationRule: (id: number) => apiClient.delete<void>(`/ValidationRule/${id}`),

  // Rule Types
  getAllRuleTypes: () => apiClient.get<RuleType[]>('/RuleTypes/GetAll'),
  getRuleTypeById: (id: number) => apiClient.get<RuleType>(`/RuleTypes/GetById/${id}`),
  createRuleType: (data: RuleTypeCreate) => apiClient.post<RuleType>('/RuleTypes/Create', data),
  updateRuleType: (data: RuleTypeUpdate) => apiClient.put<RuleType>('/RuleTypes/Update', data),
  deleteRuleType: (id: number) => apiClient.delete<void>(`/RuleTypes/${id}`),

  // Field Relation Rules
  getAllFieldRelationRules: () => apiClient.get<FieldRelationRule[]>('/FieldRelationRules/GetAll'),
  getFieldRelationRuleById: (id: number) => apiClient.get<FieldRelationRule>(`/FieldRelationRules/GetById/${id}`),
  createFieldRelationRule: (data: FieldRelationRuleCreate) => apiClient.post<FieldRelationRule>('/FieldRelationRules/Create', data),
  updateFieldRelationRule: (data: FieldRelationRuleUpdate) => apiClient.put<FieldRelationRule>('/FieldRelationRules/Update', data),
  deleteFieldRelationRule: (id: number) => apiClient.delete<void>(`/FieldRelationRules/${id}`),
};