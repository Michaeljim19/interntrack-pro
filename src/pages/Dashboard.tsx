import { motion } from "framer-motion";
import { INTERN_PROFILE, WEEKLY_HOURS, ATTENDANCE_DATA, NOTIFICATIONS, WEEKLY_REPORTS, TIME_RECORDS, GOALS } from "@/lib/mock-data";
import { StatCard } from "@/components/StatCard";
import { Clock, TrendingUp, FileCheck, Award, Target, CalendarCheck } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const progressPercent = Math.round((INTERN_PROFILE.renderedHours / INTERN_PROFILE.requiredHours) * 100);
const remaining = INTERN_PROFILE.requiredHours - INTERN_PROFILE.renderedHours;
const approvedReports = WEEKLY_REPORTS.filter((r) => r.status === "approved").length;
const completedGoals = GOALS.filter((g) => g.completed).length;

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold font-display text-foreground">
          Welcome back, {INTERN_PROFILE.name.split(" ")[0]}! 👋
        </h1>
        <p className="text-sm text-muted-foreground mt-1">Here's your internship progress overview</p>
      </motion.div>

      {/* OJT Progress */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="rounded-xl border border-border bg-card p-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
          <div>
            <h2 className="font-display font-semibold text-card-foreground">OJT Hours Progress</h2>
            <p className="text-sm text-muted-foreground">
              {INTERN_PROFILE.renderedHours} / {INTERN_PROFILE.requiredHours} hours completed
            </p>
          </div>
          <Badge variant="secondary" className="self-start text-sm font-semibold">
            {progressPercent}%
          </Badge>
        </div>
        <Progress value={progressPercent} className="h-3" />
        <p className="mt-2 text-xs text-muted-foreground">{remaining} hours remaining • Target: {INTERN_PROFILE.endDate}</p>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Hours Rendered"
          value={INTERN_PROFILE.renderedHours}
          subtitle={`of ${INTERN_PROFILE.requiredHours} required`}
          icon={<Clock className="h-5 w-5" />}
        />
        <StatCard
          title="This Week"
          value={`${WEEKLY_HOURS[WEEKLY_HOURS.length - 1].hours}h`}
          subtitle="hours logged"
          icon={<TrendingUp className="h-5 w-5" />}
          trend={{ value: "+2h from last week", positive: true }}
        />
        <StatCard
          title="Reports Approved"
          value={`${approvedReports}/${WEEKLY_REPORTS.length}`}
          subtitle="weekly reports"
          icon={<FileCheck className="h-5 w-5" />}
        />
        <StatCard
          title="Goals Completed"
          value={`${completedGoals}/${GOALS.length}`}
          subtitle="internship goals"
          icon={<Target className="h-5 w-5" />}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-display">Weekly Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={WEEKLY_HOURS}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="week" tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                <YAxis tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                    fontSize: 13,
                  }}
                />
                <Bar dataKey="hours" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-display">Attendance</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <ResponsiveContainer width="100%" height={160}>
              <PieChart>
                <Pie
                  data={ATTENDANCE_DATA}
                  cx="50%"
                  cy="50%"
                  innerRadius={45}
                  outerRadius={70}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {ATTENDANCE_DATA.map((entry, index) => (
                    <Cell key={index} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex gap-4 mt-2">
              {ATTENDANCE_DATA.map((item) => (
                <div key={item.name} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: item.fill }} />
                  {item.name} ({item.value})
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent & Notifications */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-display">Recent Time Logs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {TIME_RECORDS.slice(0, 4).map((record) => (
              <div key={record.id} className="flex items-center justify-between rounded-lg bg-muted/50 px-3 py-2.5">
                <div>
                  <p className="text-sm font-medium text-card-foreground">{record.date}</p>
                  <p className="text-xs text-muted-foreground">{record.timeIn} - {record.timeOut}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-card-foreground">{record.totalHours}h</p>
                  <Badge variant={record.status === "approved" ? "default" : "secondary"} className="text-[10px]">
                    {record.status}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-display">Notifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {NOTIFICATIONS.map((notif) => (
              <div key={notif.id} className={`flex items-start gap-3 rounded-lg px-3 py-2.5 ${!notif.read ? "bg-accent/50" : "bg-muted/30"}`}>
                <div className={`mt-0.5 h-2 w-2 rounded-full flex-shrink-0 ${
                  notif.type === "warning" ? "bg-warning" : notif.type === "success" ? "bg-success" : "bg-info"
                }`} />
                <div>
                  <p className="text-sm font-medium text-card-foreground">{notif.title}</p>
                  <p className="text-xs text-muted-foreground">{notif.message}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
