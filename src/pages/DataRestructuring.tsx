import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Filter, Search } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

const DataRestructuring = () => {
  const [searchParams] = useSearchParams();
  const fileName = searchParams.get('file') || 'uploaded file';
  
  const [selectedTemplate, setSelectedTemplate] = useState("Employee Profile");
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState("10");
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  // Mock data - in real app this would come from the backend based on the uploaded file
  const mockData = [
    {
      id: "1",
      employee: "Last 1, First 1 - 000001040",
      employee_number: "1040",
      first_name: "First 1",
      middle_name: "Last 1",
      last_name: "2554.43",
      sin: "121239292",
      street: "10 CARVETH CR",
      city: "FORT ERIE",
      province: "ON"
    },
    {
      id: "2", 
      employee: "Last 2, First 2 S - 000002128",
      employee_number: "2128",
      first_name: "First 2",
      middle_name: "S",
      last_name: "Last 2",
      sin: "732129312",
      street: "1003 2520 EGLINTON AVE W",
      city: "NIAGARA FALLS",
      province: "ON"
    },
    {
      id: "3",
      employee: "Last 3, First 3 - 000001077", 
      employee_number: "1077",
      first_name: "First 3",
      middle_name: "Last 3",
      last_name: "1296.95",
      sin: "779377232",
      street: "105 VALONIA DR",
      city: "RIDGEWAY",
      province: "ON"
    },
    {
      id: "4",
      employee: "Last 4, First 4 - 000001085",
      employee_number: "1085", 
      first_name: "First 4",
      middle_name: "Last 4",
      last_name: "1275.235",
      sin: "173732210",
      street: "105 1445 WILSON AVE W",
      city: "NIAGARA FALLS",
      province: "ON"
    },
    {
      id: "5",
      employee: "Last 5, First 5 - 000001136",
      employee_number: "1136",
      first_name: "First 5", 
      middle_name: "Last 5",
      last_name: "69.24",
      sin: "132 230 131",
      street: "11 BRENTWOOD DRIVE",
      city: "SIMCOE 8R7",
      province: "ON"
    }
  ];

  const columns = [
    { key: "employee", label: "employee" },
    { key: "employee_number", label: "employee_number" },
    { key: "first_name", label: "first_name" },
    { key: "middle_name", label: "middle_name" },
    { key: "last_name", label: "last_name" },
    { key: "sin", label: "sin" },
    { key: "street", label: "street" },
    { key: "city", label: "city" },
    { key: "province", label: "province" }
  ];

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(mockData.map(row => row.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleRowSelect = (rowId: string, checked: boolean) => {
    if (checked) {
      setSelectedRows([...selectedRows, rowId]);
    } else {
      setSelectedRows(selectedRows.filter(id => id !== rowId));
    }
  };

  return (
    <div className="bg-background p-6 min-h-full">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/import">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Template Selection
              </Button>
            </Link>
          </div>
          <Button className="gap-2">
            Continue
          </Button>
        </div>

        {/* Title and Description */}
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">Data Restructuring</h1>
          <p className="text-muted-foreground">
            Review and edit the transformed data from "{fileName}". Split, transform or order the data. Click any cell to edit or use column filters to find specific data.
          </p>
        </div>

        {/* Template Selection */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium">Template:</span>
          <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Employee Profile">Employee Profile</SelectItem>
              <SelectItem value="Customer Data">Customer Data</SelectItem>
              <SelectItem value="Product Catalog">Product Catalog</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Data Table Card */}
        <Card className="p-6">
          <div className="space-y-4">
            {/* Transform Section */}
            <div className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
              <span className="text-sm font-medium">🔄 Transform</span>
              <div className="flex-1">
                <Input 
                  placeholder="Search data..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="max-w-xs"
                />
              </div>
            </div>

            {/* Table */}
            <div className="border rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">
                      <Checkbox 
                        checked={selectedRows.length === mockData.length}
                        onCheckedChange={handleSelectAll}
                      />
                    </TableHead>
                    <TableHead>Select</TableHead>
                    {columns.map((column) => (
                      <TableHead key={column.key} className="min-w-[120px]">
                        <div className="flex items-center gap-2">
                          <span className="text-xs">{column.label}</span>
                          <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                            <Filter className="h-3 w-3" />
                          </Button>
                        </div>
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockData.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell>
                        <Checkbox
                          checked={selectedRows.includes(row.id)}
                          onCheckedChange={(checked) => handleRowSelect(row.id, !!checked)}
                        />
                      </TableCell>
                      <TableCell className="text-xs text-muted-foreground">{row.employee}</TableCell>
                      {columns.map((column) => (
                        <TableCell key={column.key} className="text-xs">
                          {row[column.key as keyof typeof row]}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span>1 - 5 of 5</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Items per page:</span>
                <Select value={itemsPerPage} onValueChange={setItemsPerPage}>
                  <SelectTrigger className="w-20 h-8">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="25">25</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DataRestructuring;