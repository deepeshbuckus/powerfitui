import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, Globe, User } from "lucide-react";

export const Header = () => {
  return (
    <header className="border-b bg-card px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">U2I</span>
            </div>
            <h1 className="text-xl font-bold text-primary">PowerFit</h1>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="gap-2">
            <Globe className="h-4 w-4" />
            English
          </Button>
          <Button variant="ghost" size="sm">
            <User className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};