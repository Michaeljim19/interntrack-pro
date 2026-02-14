import { motion } from "framer-motion";
import { COMPANY_PROFILE } from "@/lib/mock-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, MapPin, Eye, Target, Briefcase, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function CompanyPage() {
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-2xl font-bold font-display text-foreground">Company Profile</h1>
        <p className="text-sm text-muted-foreground mt-1">Your host company information</p>
      </motion.div>

      {/* Header card */}
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground flex-shrink-0">
                <Building2 className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-xl font-display font-bold text-card-foreground">{COMPANY_PROFILE.name}</h2>
                <div className="flex items-center gap-1.5 mt-1 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  {COMPANY_PROFILE.location}
                </div>
                <Badge variant="secondary" className="mt-2">{COMPANY_PROFILE.nature}</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* VMP */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { title: "Vision", icon: Eye, text: COMPANY_PROFILE.vision },
          { title: "Mission", icon: Target, text: COMPANY_PROFILE.mission },
          { title: "Purpose", icon: Lightbulb, text: COMPANY_PROFILE.purpose },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + i * 0.08 }}
          >
            <Card className="h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-display flex items-center gap-2">
                  <item.icon className="h-4 w-4 text-primary" />
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Activities */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-display flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-primary" />
            Activities Performed
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {COMPANY_PROFILE.activitiesPerformed.map((activity) => (
              <Badge key={activity} variant="secondary" className="text-sm py-1.5 px-3">
                {activity}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
