import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, RefreshCw } from "lucide-react";

export const RecentActivity = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <Activity className="h-5 w-5" />
          Recent Activity
        </h2>
        <Button variant="ghost" size="sm">
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>

      <div className="text-center py-12 text-muted-foreground">
        <div className="text-lg mb-2">No recent activity to display</div>
        <p className="text-sm">Import activities will appear here</p>
      </div>
    </Card>
  );
};