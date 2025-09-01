import { apiClient } from './api';

export interface TransformRequestDto {
  fileName: string;
}

export interface TransformResultDto {
  jsonPayload: string;
}

// Call transform API to get JSON data for restructuring
export const transformFile = async (fileName: string): Promise<TransformResultDto> => {
  const request: TransformRequestDto = { fileName };
  return apiClient.post<TransformResultDto>('/api/Transform/transform', request);
};