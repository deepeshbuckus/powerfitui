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
  recent: "border-l-4 border-l-primary bg-primary-light/30",
  active: "border-l-4 border-l-primary bg-primary-light/20",
  failed: "border-l-4 border-l-primary bg-primary-light/10"
};

const variantBadges = {
  recent: "bg-primary/10 text-primary border-primary/20",
  active: "bg-primary/15 text-primary border-primary/25", 
  failed: "bg-primary/20 text-primary border-primary/30"
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
          {variant === "active" && "Active"}
          {variant === "failed" && "Alert"}
        </Badge>
      </div>
    </Card>
  );
};