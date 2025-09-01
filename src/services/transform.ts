import { apiClient } from './api';

export interface TransformResultDto {
  jsonPayload: string;
}

// Call transform API to get JSON data for restructuring
export const transformFile = async (fileName: string): Promise<TransformResultDto> => {
  return apiClient.get<TransformResultDto>(`/api/Transform/transform?fileName=${encodeURIComponent(fileName)}`);
};