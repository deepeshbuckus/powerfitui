import { Header } from "@/components/layout/Header";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { ImportHistory } from "@/components/dashboard/ImportHistory";
import { RecentActivity } from "@/components/dashboard/RecentActivity";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCard
            title="Import in queue"
            value={247}
            variant="recent"
          />
          <StatsCard
            title="Import running"
            value={12}
            variant="active"
          />
          <StatsCard
            title="Import failed"
            value={2}
            variant="failed"
          />
        </div>

        {/* Quick Actions */}
        <QuickActions />

        {/* Import History */}
        <ImportHistory />

        {/* Recent Activity */}
        <RecentActivity />
      </main>
    </div>
  );
};

export default Index;
