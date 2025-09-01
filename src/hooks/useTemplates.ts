import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { templateService, Template, TemplateCreate, TemplateUpdate } from '@/services/templates';
import { useToast } from '@/hooks/use-toast';

// Hook for fetching all templates
export const useTemplates = () => {
  return useQuery({
    queryKey: ['templates'],
    queryFn: templateService.getAllTemplates,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

// Hook for fetching template by ID
export const useTemplateById = (id: number) => {
  return useQuery({
    queryKey: ['templates', id],
    queryFn: () => templateService.getTemplateById(id),
    enabled: !!id,
  });
};

// Hook for creating template
export const useCreateTemplate = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (data: TemplateCreate) => templateService.createTemplate(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['templates'] });
      toast({
        title: "Success",
        description: "Template created successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to create template: ${error.message}`,
        variant: "destructive",
      });
    },
  });
};

// Hook for updating template
export const useUpdateTemplate = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (data: TemplateUpdate) => templateService.updateTemplate(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['templates'] });
      toast({
        title: "Success",
        description: "Template updated successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to update template: ${error.message}`,
        variant: "destructive",
      });
    },
  });
};

// Hook for deleting template
export const useDeleteTemplate = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (id: number) => templateService.deleteTemplate(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['templates'] });
      toast({
        title: "Success",
        description: "Template deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to delete template: ${error.message}`,
        variant: "destructive",
      });
    },
  });
};

// Hook for fetching template data types
export const useTemplateDataTypes = () => {
  return useQuery({
    queryKey: ['templateDataTypes'],
    queryFn: templateService.getAllTemplateDataTypes,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};

// Hook for fetching template fields
export const useTemplateFields = () => {
  return useQuery({
    queryKey: ['templateFields'],
    queryFn: templateService.getAllTemplateFields,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};