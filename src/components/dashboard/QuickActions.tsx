import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export const QuickActions = () => {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Button 
          size="lg" 
          className="h-20 flex-col gap-2 bg-gradient-primary hover:opacity-90 transition-all duration-200 hover:scale-105"
          asChild
        >
          <Link to="/import" className="flex flex-col items-center gap-2">
            <Upload className="h-6 w-6" />
            <span>Create Import</span>
          </Link>
        </Button>
        <Button 
          variant="outline" 
          size="lg" 
          className="h-20 flex-col gap-2 border-2 hover:bg-primary/5 hover:border-primary/30 transition-all duration-200 hover:scale-105"
        >
          <FileText className="h-6 w-6" />
          <span>New Template</span>
        </Button>
      </div>
    </Card>
  );
};