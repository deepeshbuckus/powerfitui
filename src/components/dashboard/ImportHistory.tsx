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
import { MoreHorizontal, Filter, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

const mockData = [
  {
    id: 1,
    fileName: "payroll_data_january.xlsx",
    templateName: "Payroll Template",
    date: "2024-01-15",
    status: "completed"
  },
  {
    id: 2,
    fileName: "employee_benefits_q1.pdf",
    templateName: "Benefits Parser",
    date: "2024-01-14", 
    status: "processing"
  },
  {
    id: 3,
    fileName: "tax_documents_2024.zip",
    templateName: "Tax Document Processor",
    date: "2024-01-13",
    status: "failed"
  }
];

const statusStyles = {
  completed: "bg-primary/10 text-primary border-primary/20",
  processing: "bg-primary/15 text-primary border-primary/25",
  failed: "bg-primary/20 text-primary border-primary/30"
};

export const ImportHistory = () => {
  const hasData = mockData.length > 0;

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
              {mockData.map((item) => (
                <TableRow key={item.id} className="hover:bg-muted/50">
                  <TableCell className="font-medium">
                    {item.fileName}
                  </TableCell>
                  <TableCell>{item.templateName}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>
                    <Badge 
                      variant="outline" 
                      className={cn("capitalize", statusStyles[item.status as keyof typeof statusStyles])}
                    >
                      {item.status}
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