import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { importService, ImportHistory, ImportHistoryCreate, ImportHistoryUpdate } from '@/services/imports';
import { useToast } from '@/hooks/use-toast';

// Hook for fetching all import history
export const useImportHistory = () => {
  return useQuery({
    queryKey: ['importHistory'],
    queryFn: importService.getAllImportHistory,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

// Hook for fetching import history by ID
export const useImportHistoryById = (id: number) => {
  return useQuery({
    queryKey: ['importHistory', id],
    queryFn: () => importService.getImportHistoryById(id),
    enabled: !!id,
  });
};

// Hook for creating import history
export const useCreateImportHistory = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (data: ImportHistoryCreate) => importService.createImportHistory(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['importHistory'] });
      toast({
        title: "Success",
        description: "Import history created successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to create import history: ${error.message}`,
        variant: "destructive",
      });
    },
  });
};

// Hook for updating import history
export const useUpdateImportHistory = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (data: ImportHistoryUpdate) => importService.updateImportHistory(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['importHistory'] });
      toast({
        title: "Success",
        description: "Import history updated successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to update import history: ${error.message}`,
        variant: "destructive",
      });
    },
  });
};

// Hook for deleting import history
export const useDeleteImportHistory = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (id: number) => importService.deleteImportHistory(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['importHistory'] });
      toast({
        title: "Success",
        description: "Import history deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to delete import history: ${error.message}`,
        variant: "destructive",
      });
    },
  });
};