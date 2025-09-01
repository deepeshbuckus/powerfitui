import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { 
  validationService, 
  ValidationRule, 
  ValidationRuleCreate, 
  ValidationRuleUpdate,
  RuleType,
  RuleTypeCreate,
  RuleTypeUpdate,
  FieldRelationRule,
  FieldRelationRuleCreate,
  FieldRelationRuleUpdate
} from '@/services/validation';
import { useToast } from '@/hooks/use-toast';

// Validation Rules
export const useValidationRules = () => {
  return useQuery({
    queryKey: ['validationRules'],
    queryFn: validationService.getAllValidationRules,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useValidationRuleById = (id: number) => {
  return useQuery({
    queryKey: ['validationRules', id],
    queryFn: () => validationService.getValidationRuleById(id),
    enabled: !!id,
  });
};

export const useCreateValidationRule = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (data: ValidationRuleCreate) => validationService.createValidationRule(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['validationRules'] });
      toast({
        title: "Success",
        description: "Validation rule created successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to create validation rule: ${error.message}`,
        variant: "destructive",
      });
    },
  });
};

export const useUpdateValidationRule = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (data: ValidationRuleUpdate) => validationService.updateValidationRule(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['validationRules'] });
      toast({
        title: "Success",
        description: "Validation rule updated successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to update validation rule: ${error.message}`,
        variant: "destructive",
      });
    },
  });
};

export const useDeleteValidationRule = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (id: number) => validationService.deleteValidationRule(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['validationRules'] });
      toast({
        title: "Success",
        description: "Validation rule deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to delete validation rule: ${error.message}`,
        variant: "destructive",
      });
    },
  });
};

// Rule Types
export const useRuleTypes = () => {
  return useQuery({
    queryKey: ['ruleTypes'],
    queryFn: validationService.getAllRuleTypes,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};

export const useRuleTypeById = (id: number) => {
  return useQuery({
    queryKey: ['ruleTypes', id],
    queryFn: () => validationService.getRuleTypeById(id),
    enabled: !!id,
  });
};

export const useCreateRuleType = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (data: RuleTypeCreate) => validationService.createRuleType(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ruleTypes'] });
      toast({
        title: "Success",
        description: "Rule type created successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to create rule type: ${error.message}`,
        variant: "destructive",
      });
    },
  });
};

export const useUpdateRuleType = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (data: RuleTypeUpdate) => validationService.updateRuleType(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ruleTypes'] });
      toast({
        title: "Success",
        description: "Rule type updated successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to update rule type: ${error.message}`,
        variant: "destructive",
      });
    },
  });
};

export const useDeleteRuleType = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (id: number) => validationService.deleteRuleType(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ruleTypes'] });
      toast({
        title: "Success",
        description: "Rule type deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to delete rule type: ${error.message}`,
        variant: "destructive",
      });
    },
  });
};

// Field Relation Rules
export const useFieldRelationRules = () => {
  return useQuery({
    queryKey: ['fieldRelationRules'],
    queryFn: validationService.getAllFieldRelationRules,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};

export const useFieldRelationRuleById = (id: number) => {
  return useQuery({
    queryKey: ['fieldRelationRules', id],
    queryFn: () => validationService.getFieldRelationRuleById(id),
    enabled: !!id,
  });
};

export const useCreateFieldRelationRule = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (data: FieldRelationRuleCreate) => validationService.createFieldRelationRule(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fieldRelationRules'] });
      toast({
        title: "Success",
        description: "Field relation rule created successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to create field relation rule: ${error.message}`,
        variant: "destructive",
      });
    },
  });
};

export const useUpdateFieldRelationRule = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (data: FieldRelationRuleUpdate) => validationService.updateFieldRelationRule(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fieldRelationRules'] });
      toast({
        title: "Success",
        description: "Field relation rule updated successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to update field relation rule: ${error.message}`,
        variant: "destructive",
      });
    },
  });
};

export const useDeleteFieldRelationRule = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: (id: number) => validationService.deleteFieldRelationRule(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['fieldRelationRules'] });
      toast({
        title: "Success",
        description: "Field relation rule deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to delete field relation rule: ${error.message}`,
        variant: "destructive",
      });
    },
  });
};