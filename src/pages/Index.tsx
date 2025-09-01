import { Header } from "@/components/layout/Header";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { ImportHistory } from "@/components/dashboard/ImportHistory";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { useTemplates } from "@/hooks/useTemplates";
import { useImportHistory } from "@/hooks/useImportHistory";

const Index = () => {
  const { data: templates, isLoading: templatesLoading } = useTemplates();
  const { data: importHistory, isLoading: importHistoryLoading } = useImportHistory();
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatsCard
            title="Recent Imports"
            value={importHistoryLoading ? 0 : importHistory?.length || 0}
            variant="recent"
          />
          <StatsCard
            title="Active Templates"
            value={templatesLoading ? 0 : templates?.length || 0}
            variant="active"
          />
          <StatsCard
            title="Failed Imports"
            value={0}
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
