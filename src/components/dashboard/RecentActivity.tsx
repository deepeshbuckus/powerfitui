import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, RefreshCw, FileText, Clock } from "lucide-react";
import { useImportHistory } from "@/hooks/useImportHistory";
import { format } from "date-fns";

export const RecentActivity = () => {
  const { data: importHistory, isLoading, error, refetch } = useImportHistory();

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <Activity className="h-5 w-5" />
          Recent Activity
        </h2>
        <Button variant="ghost" size="sm" onClick={() => refetch()}>
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>

      {isLoading ? (
        <div className="text-center py-8">
          <div className="animate-pulse">Loading recent activity...</div>
        </div>
      ) : error ? (
        <div className="text-center py-8 text-muted-foreground">
          <div className="text-lg mb-2">Unable to load recent activity</div>
          <p className="text-sm">Please check your connection and try again</p>
        </div>
      ) : !importHistory?.length ? (
        <div className="text-center py-12 text-muted-foreground">
          <div className="text-lg mb-2">No recent activity to display</div>
          <p className="text-sm">Import activities will appear here</p>
        </div>
      ) : (
        <div className="space-y-3">
          {importHistory.slice(0, 5).map((item) => (
            <div key={item.ImportHistoryId} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
              <FileText className="h-4 w-4 text-primary flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">{item.FileName}</div>
                <div className="text-sm text-muted-foreground flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {format(new Date(item.ImportDate), 'MMM dd, yyyy HH:mm')}
                </div>
              </div>
              <div className="text-xs text-muted-foreground">
                Template ID: {item.TemplateId}
              </div>
            </div>
          ))}
          {importHistory.length > 5 && (
            <div className="text-center pt-2">
              <Button variant="ghost" size="sm">
                View All ({importHistory.length} total)
              </Button>
            </div>
          )}
        </div>
      )}
    </Card>
  );
};