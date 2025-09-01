import { createContext, useContext, useState, ReactNode } from 'react';

export interface UploadedFileData {
  fileName: string;
  originalName: string;
  filePath: string;
  fileSize: number;
  columns?: string[];
  rows?: Record<string, any>[];
  totalRows?: number;
}

interface FileContextType {
  uploadedFile: UploadedFileData | null;
  setUploadedFile: (file: UploadedFileData | null) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const FileContext = createContext<FileContextType | undefined>(undefined);

export const useFile = () => {
  const context = useContext(FileContext);
  if (context === undefined) {
    throw new Error('useFile must be used within a FileProvider');
  }
  return context;
};

export const FileProvider = ({ children }: { children: ReactNode }) => {
  const [uploadedFile, setUploadedFile] = useState<UploadedFileData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <FileContext.Provider value={{
      uploadedFile,
      setUploadedFile,
      isLoading,
      setIsLoading
    }}>
      {children}
    </FileContext.Provider>
  );
};