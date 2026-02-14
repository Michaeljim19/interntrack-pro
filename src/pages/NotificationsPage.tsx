import { motion } from "framer-motion";
import { NOTIFICATIONS } from "@/lib/mock-data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, AlertTriangle, CheckCircle2, Info } from "lucide-react";

const typeIcons = {
  warning: AlertTriangle,
  success: CheckCircle2,
  info: Info,
};

const typeColors = {
  warning: "text-warning",
  success: "text-success",
  info: "text-info",
};

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold font-display text-foreground">Notifications</h1>
        <p className="text-sm text-muted-foreground mt-1">Stay updated on your internship activities</p>
      </motion.div>

      <div className="space-y-3">
        {NOTIFICATIONS.map((notif, i) => {
          const Icon = typeIcons[notif.type];
          return (
            <motion.div
              key={notif.id}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06 }}
            >
              <Card className={!notif.read ? "border-primary/20 bg-accent/30" : ""}>
                <CardContent className="p-4 flex items-start gap-3">
                  <Icon className={`h-5 w-5 mt-0.5 flex-shrink-0 ${typeColors[notif.type]}`} />
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm font-semibold text-card-foreground">{notif.title}</h3>
                      {!notif.read && <Badge className="text-[10px]">New</Badge>}
                    </div>
                    <p className="text-sm text-muted-foreground mt-0.5">{notif.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">{notif.date}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
