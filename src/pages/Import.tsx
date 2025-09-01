import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Upload as UploadIcon, FileText } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Import = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      setSelectedFile(files[0]);
    }
  }, []);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  }, []);

  const handleUpload = useCallback(async () => {
    if (!selectedFile) return;

    setIsUploading(true);
    setUploadProgress(0);

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      // Create XMLHttpRequest to track upload progress
      const xhr = new XMLHttpRequest();
      
      xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) {
          const progress = Math.round((e.loaded / e.total) * 100);
          setUploadProgress(progress);
        }
      });

      const uploadPromise = new Promise((resolve, reject) => {
        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(xhr.response);
          } else {
            reject(new Error(`Upload failed with status: ${xhr.status}`));
          }
        };
        xhr.onerror = () => reject(new Error('Upload failed'));
      });

      xhr.open('POST', `${import.meta.env.VITE_API_BASE_URL || 'https://localhost:7249'}/api/FileUpload/upload`);
      xhr.send(formData);

      await uploadPromise;
      
      setIsUploading(false);
      toast({
        title: "Upload Complete",
        description: `File "${selectedFile.name}" has been uploaded successfully.`,
      });
      
      // Navigate to data restructuring page
      navigate(`/data-restructuring?file=${encodeURIComponent(selectedFile.name)}`);
      setSelectedFile(null);
    } catch (error) {
      setIsUploading(false);
      console.error('Upload error:', error);
      toast({
        title: "Upload Failed",
        description: "There was an error uploading your file. Please try again.",
        variant: "destructive",
      });
    }
  }, [selectedFile, toast]);

  return (
    <div className="bg-background p-6 min-h-full">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>
        </div>

        {/* Import File Card */}
        <Card className="p-8">
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold">Import File</h1>
              <p className="text-muted-foreground">
                Upload the file for importing data to PowerFit
              </p>
            </div>

            {!isUploading ? (
              <div className="space-y-6">
                {/* File Drop Zone */}
                <div
                  className={`
                    border-2 border-dashed rounded-lg p-12 transition-all duration-200 cursor-pointer
                    ${isDragOver 
                      ? "border-primary bg-primary/5" 
                      : selectedFile 
                      ? "border-primary bg-primary/5" 
                      : "border-muted-foreground/25 hover:border-primary/50 hover:bg-primary/5"
                    }
                  `}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => document.getElementById('file-input')?.click()}
                >
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      {selectedFile ? (
                        <div className="p-3 bg-primary/10 rounded-full">
                          <FileText className="h-8 w-8 text-primary" />
                        </div>
                      ) : (
                        <div className="p-3 bg-muted rounded-full">
                          <UploadIcon className="h-8 w-8 text-muted-foreground" />
                        </div>
                      )}
                    </div>
                    
                    {selectedFile ? (
                      <div className="space-y-2">
                        <p className="font-medium">{selectedFile.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <p className="font-medium">
                          Drag and drop your file here, or click to browse
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Supported formats: CSV, Excel, JSON
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <input
                  id="file-input"
                  type="file"
                  className="hidden"
                  onChange={handleFileSelect}
                  accept=".csv,.xlsx,.xls,.json"
                />

                <Button
                  onClick={handleUpload}
                  disabled={!selectedFile}
                  size="lg"
                  className="w-32"
                >
                  Upload
                </Button>
              </div>
            ) : (
              /* Upload Progress */
              <div className="space-y-6 py-8">
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Uploading file...</h3>
                  <p className="text-muted-foreground">
                    Processing your file. Please wait...
                  </p>
                </div>

                <div className="space-y-2 max-w-md mx-auto">
                  <Progress value={uploadProgress} className="h-2" />
                  <p className="text-sm text-muted-foreground text-center">
                    {uploadProgress}% complete
                  </p>
                </div>

                <div className="flex justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Import;