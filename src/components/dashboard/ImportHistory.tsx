import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { MoreHorizontal, Filter, Eye, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { useImportHistory } from "@/hooks/useImportHistory";
import { format } from "date-fns";

const statusStyles = {
  completed: "bg-primary/10 text-primary border-primary/20",
  processing: "bg-primary/15 text-primary border-primary/25",
  failed: "bg-primary/20 text-primary border-primary/30"
};

export const ImportHistory = () => {
  const { data: importHistory, isLoading, error } = useImportHistory();

  if (isLoading) {
    return (
      <Card className="p-6">
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <span className="ml-2 text-muted-foreground">Loading import history...</span>
        </div>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="p-6">
        <div className="text-center py-12 text-muted-foreground">
          <div className="text-lg mb-2">Failed to load import history</div>
          <p className="text-sm">Please try again later</p>
        </div>
      </Card>
    );
  }

  const hasData = importHistory && importHistory.length > 0;

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Import History</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            View All
          </Button>
        </div>
      </div>

      {!hasData ? (
        <div className="text-center py-12 text-muted-foreground">
          <div className="text-lg mb-2">No import history available</div>
          <p className="text-sm">Your import activities will appear here</p>
        </div>
      ) : (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>File Name</TableHead>
                <TableHead>Template Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {importHistory?.map((item) => (
                <TableRow key={item.ImportHistoryId} className="hover:bg-muted/50">
                  <TableCell className="font-medium">
                    {item.FileName}
                  </TableCell>
                  <TableCell>Template ID: {item.TemplateId}</TableCell>
                  <TableCell>{format(new Date(item.ImportDate), 'yyyy-MM-dd')}</TableCell>
                  <TableCell>
                    <Badge 
                      variant="outline" 
                      className={cn("capitalize", statusStyles.completed)}
                    >
                      Completed
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </Card>
  );
};