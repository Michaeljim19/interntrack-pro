import { motion } from "framer-motion";
import { WEEKLY_REPORTS } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, MessageSquare, ChevronRight } from "lucide-react";

const statusColors: Record<string, string> = {
  approved: "default",
  submitted: "secondary",
  draft: "outline",
  revision: "destructive",
};

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-bold font-display text-foreground">Weekly Reports</h1>
          <p className="text-sm text-muted-foreground mt-1">Document your weekly activities and accomplishments</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Report
        </Button>
      </motion.div>

      <div className="space-y-4">
        {WEEKLY_REPORTS.map((report, i) => (
          <motion.div
            key={report.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <Card className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent font-display font-bold text-accent-foreground text-sm">
                      W{report.weekNumber}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-card-foreground">
                        Week {report.weekNumber} Report
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {report.startDate} — {report.endDate}
                      </p>
                    </div>
                  </div>
                  <Badge variant={statusColors[report.status] as any}>{report.status}</Badge>
                </div>

                <div className="space-y-2 mb-3">
                  <p className="text-sm font-medium text-card-foreground">Tasks:</p>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-0.5">
                    {report.tasks.map((task, idx) => (
                      <li key={idx}>{task}</li>
                    ))}
                  </ul>
                </div>

                <p className="text-sm text-muted-foreground">{report.accomplishments}</p>

                {report.feedback && (
                  <div className="mt-3 rounded-lg bg-accent/50 p-3 flex items-start gap-2">
                    <MessageSquare className="h-4 w-4 text-accent-foreground mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-accent-foreground">Supervisor Feedback</p>
                      <p className="text-sm text-muted-foreground">{report.feedback}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
