import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: number;
  variant: "recent" | "active" | "failed";
  className?: string;
}

const variantStyles = {
  recent: "border-l-4 border-l-primary",
  active: "border-l-4 border-l-success",
  failed: "border-l-4 border-l-destructive"
};

const variantBadges = {
  recent: "bg-primary/10 text-primary border-primary/20",
  active: "bg-success/10 text-success border-success/20", 
  failed: "bg-destructive/10 text-destructive border-destructive/20"
};

export const StatsCard = ({ title, value, variant, className }: StatsCardProps) => {
  return (
    <Card className={cn(
      "p-6 transition-all duration-200 hover:shadow-hover cursor-pointer",
      variantStyles[variant],
      className
    )}>
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">
            {title}
          </p>
          <p className="text-3xl font-bold tracking-tight">
            {value}
          </p>
        </div>
        <Badge variant="outline" className={cn("text-xs", variantBadges[variant])}>
          {variant === "recent" && "New"}
          {variant === "active" && "Running"}
          {variant === "failed" && "Error"}
        </Badge>
      </div>
    </Card>
  );
};