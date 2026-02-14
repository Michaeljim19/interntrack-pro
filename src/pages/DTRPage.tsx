import { useState } from "react";
import { motion } from "framer-motion";
import { TIME_RECORDS } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Clock, Plus, Download, Search } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function DTRPage() {
  const [search, setSearch] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  const filtered = TIME_RECORDS.filter((r) => r.date.includes(search));
  const totalHours = TIME_RECORDS.reduce((sum, r) => sum + r.totalHours, 0);

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold font-display text-foreground">Daily Time Record</h1>
        <p className="text-sm text-muted-foreground mt-1">Log and manage your daily attendance</p>
      </motion.div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Filter by date..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex gap-2">
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Log Time
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="font-display">Log Time Entry</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-2">
                <div className="space-y-2">
                  <Label>Date</Label>
                  <Input type="date" defaultValue="2026-02-14" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label>Time In</Label>
                    <Input type="time" defaultValue="08:00" />
                  </div>
                  <div className="space-y-2">
                    <Label>Time Out</Label>
                    <Input type="time" defaultValue="17:00" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Notes (optional)</Label>
                  <Input placeholder="Any remarks..." />
                </div>
                <Button className="w-full" onClick={() => setDialogOpen(false)}>
                  Submit Entry
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export PDF
          </Button>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-5">
            <p className="text-sm text-muted-foreground">Total Entries</p>
            <p className="text-2xl font-bold font-display text-card-foreground">{TIME_RECORDS.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-5">
            <p className="text-sm text-muted-foreground">Total Hours</p>
            <p className="text-2xl font-bold font-display text-card-foreground">{totalHours}h</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-5">
            <p className="text-sm text-muted-foreground">Avg Hours/Day</p>
            <p className="text-2xl font-bold font-display text-card-foreground">
              {(totalHours / TIME_RECORDS.length).toFixed(1)}h
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="text-left font-medium text-muted-foreground px-4 py-3">Date</th>
                  <th className="text-left font-medium text-muted-foreground px-4 py-3">Time In</th>
                  <th className="text-left font-medium text-muted-foreground px-4 py-3">Time Out</th>
                  <th className="text-left font-medium text-muted-foreground px-4 py-3">Hours</th>
                  <th className="text-left font-medium text-muted-foreground px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((record, i) => (
                  <motion.tr
                    key={record.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.03 }}
                    className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                  >
                    <td className="px-4 py-3 font-medium text-card-foreground">{record.date}</td>
                    <td className="px-4 py-3 text-muted-foreground flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" /> {record.timeIn}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">{record.timeOut}</td>
                    <td className="px-4 py-3 font-semibold text-card-foreground">{record.totalHours}h</td>
                    <td className="px-4 py-3">
                      <Badge variant={record.status === "approved" ? "default" : record.status === "pending" ? "secondary" : "destructive"}>
                        {record.status}
                      </Badge>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
