import { motion } from "framer-motion";
import { GOALS } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, Target } from "lucide-react";

export default function GoalsPage() {
  const overallProgress = Math.round(GOALS.reduce((sum, g) => sum + g.progress, 0) / GOALS.length);

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold font-display text-foreground">Internship Goals</h1>
        <p className="text-sm text-muted-foreground mt-1">Track your learning objectives and milestones</p>
      </motion.div>

      {/* Overall */}
      <Card>
        <CardContent className="p-5">
          <div className="flex items-center gap-3 mb-3">
            <Target className="h-5 w-5 text-primary" />
            <h2 className="font-display font-semibold text-card-foreground">Overall Progress</h2>
            <Badge variant="secondary" className="ml-auto">{overallProgress}%</Badge>
          </div>
          <Progress value={overallProgress} className="h-2.5" />
          <p className="text-xs text-muted-foreground mt-2">
            {GOALS.filter((g) => g.completed).length} of {GOALS.length} goals completed
          </p>
        </CardContent>
      </Card>

      {/* Goals list */}
      <div className="grid gap-3">
        {GOALS.map((goal, i) => (
          <motion.div
            key={goal.id}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06 }}
          >
            <Card className={goal.completed ? "border-success/30 bg-success/5" : ""}>
              <CardContent className="p-4 flex items-start gap-4">
                {goal.completed ? (
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                ) : (
                  <Circle className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className={`text-sm font-semibold ${goal.completed ? "text-success line-through" : "text-card-foreground"}`}>
                      {goal.title}
                    </h3>
                    <span className="text-xs font-medium text-muted-foreground">{goal.progress}%</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{goal.description}</p>
                  <Progress value={goal.progress} className="h-1.5 mt-2" />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
